basic.showIcon(IconNames.Heart)
basic.forever(function () {
    k_Bit.run(DIR.RunForward, 50)
    basic.showIcon(IconNames.Sad)
    basic.pause(1000)
    k_Bit.run(DIR.TurnLeft, 30)
    basic.showIcon(IconNames.Surprised)
    k_Bit.run(DIR.RunForward, 50)
    basic.showIcon(IconNames.Happy)
    basic.pause(1000)
    k_Bit.run(DIR.TurnLeft, 30)
    basic.showIcon(IconNames.Angry)
    basic.pause(1000)
    k_Bit.run(DIR.RunForward, 50)
    basic.showIcon(IconNames.Happy)
    k_Bit.carStop()
})
