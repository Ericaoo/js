var vel = 60.2
var velmax = 60
//condição composta
if (vel > velmax) {
    console.log(`Multado. Você excedeu o limite de velocidade de ${velmax} km/h em ${(vel - velmax).toFixed(1)} km/h.`)
} else {
    console.log(`Boa viagem!`)
}