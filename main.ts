let list: number[] = []
basic.showString("Hello!")
basic.showLeds(`
    . # . # .
    . # . # .
    # . . . #
    . # . # .
    . . # . .
    `)
music.play(music.stringPlayable("E B C5 A B G A F ", 173), music.PlaybackMode.UntilDone)
for (let value of list) {
	
}
basic.showString("I'm happy to be back at STEM.")
basic.showLeds(`
    . . . . .
    # # . # #
    # # # # #
    . # # # .
    . . # . .
    `)
music.play(music.createSoundExpression(
WaveShape.Sine,
5000,
2399,
255,
0,
2276,
SoundExpressionEffect.None,
InterpolationCurve.Linear
), music.PlaybackMode.UntilDone)
music.play(music.createSoundExpression(WaveShape.Noise, 54, 54, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
basic.forever(function () {
	
})
