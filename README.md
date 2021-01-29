# MIDI generation with JavaScript

This work is devoted to God.

Sending MIDI notes to a digital MIDI device
which can be used in a DAW (Digital Audio Workstation).

## Setup

### Mac

You can set up a virtual MIDI device with the following steps:

1. Open "Audio MIDI Setup"
2. Menu -> Window -> Show MIDI Studio
3. Double-click "IAC driver"
4. Check "Device is online" and make sure that it has at least one port (this was the case by default for me)
5. Apply and close the window

This device can now be used as a MIDI output
for the script and as a MIDI input in a DAW.
