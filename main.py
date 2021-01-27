while True:
    print("sound level :" + input.sound_level())
    if input.light_level() <16:
        light.set_all(light.rgb(255,0,255))
    True and True
    print("light level:" + str(input.light_level()))
    if input.sound_level() > 30:
        music.play_melody("E B C5 A B G A F ", 150)
        music.set_volume(1000)
