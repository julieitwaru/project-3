while (true) {
    console.log("sound level :" + input.soundLevel())
    if (input.lightLevel() < 16) {
        light.setAll(light.rgb(255, 0, 255))
    }
    
    true && true
    console.log("light level:" + ("" + input.lightLevel()))
    if (input.soundLevel() > 30) {
        music.playMelody("E B C5 A B G A F ", 150)
        music.setVolume(1000)
    }
    
}
