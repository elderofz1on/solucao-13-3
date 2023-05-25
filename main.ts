music.onEvent(MusicEvent.MelodyEnded, function () {
    led.plot(4, 0)
    pins.digitalWritePin(DigitalPin.P1, 1)
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P1, 0)
})
music.setBuiltInSpeakerEnabled(true)
music.changeTempoBy(300)
music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
