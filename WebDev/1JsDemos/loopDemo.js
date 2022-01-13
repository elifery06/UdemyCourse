function sayiUret(ustLimit = 49) {
    return Math.ceil(Math.random() * ustLimit)
}

for (var j = 1; j <= 7; j++) {
    console.log(j + ". KOLON")
    for (var i = 1; i <= 6; i++) {
        console.log(sayiUret())

    }

}

