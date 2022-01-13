function sayiUret(ustLimit = 49) {
    return Math.ceil(Math.random() * ustLimit)
}
// sayiUret()
var sayi1 = sayiUret(10000)
var sayi2 = sayiUret()
var sayi3 = sayiUret()
var sayi4 = sayiUret()
var sayi5 = sayiUret()
var sayi6 = sayiUret()
console.log("kolon: " + sayi1 + ' ' + sayi2 + ' ' + sayi3 + ' ' + sayi4 + ' ' + sayi5 + ' ' + sayi6)
