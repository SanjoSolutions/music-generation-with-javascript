import MidiWriter from 'midi-writer-js'
import { promises as fs } from 'fs'
import { Buffer } from 'buffer'
import { generateMusic } from './generate_music.js'

async function main() {
  const output = new MidiOutput()
  generateMusic(output)
  await output.save('midi.mid')
}

class MidiOutput {
  constructor() {
    this.track = new MidiWriter.Track()
  }

  playNote(note, duration) {
    duration = this._durationToMidiWriterDuration(duration)
    const event = new MidiWriter.NoteEvent({
      pitch: [note],
      duration
    })
    this.track.addEvent(event)
  }

  pause(duration) {
    duration = this._durationToMidiWriterDuration(duration)
    const event = new MidiWriter.NoteEvent({duration: 0, wait: duration})
    this.track.addEvent(event)
  }

  _durationToMidiWriterDuration(duration) {
    // assuming time signature 4 4
    // based on documentation:
    //   Tn : where n is an explicit number of ticks (T128 = 1 beat)
    // source: https://github.com/grimmdude/MidiWriterJS/blob/2630bedc3016bbe78a73fcc6b9e2e23223ded400/README.md#midiwriternoteeventoptions
    return `T${Math.round(duration * 4 * 128)}`
  }

  async save(fileName) {
    const writer = new MidiWriter.Writer(this.track)
    const buffer = Buffer.from(writer.buildFile())
    await fs.writeFile(fileName, buffer)
  }
}

main()
