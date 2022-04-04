let clap = document.querySelector(".clap")
let hihhat = document.querySelector(".hihhat")
let bass = document.querySelector(".bass")
let kick = document.querySelector(".kick")
let openh = document.querySelector(".open")
let ride = document.querySelector(".ride")
let snare = document.querySelector(".snare")
let tink = document.querySelector(".tink")
let tom = document.querySelector(".tom")

let audioClap = document.querySelector(".audioClap")
let audioHihhat = document.querySelector(".audioHihhat")
let audioBass = document.querySelector(".audioBass")
let audioKick = document.querySelector(".audioKick")
let audioOpen = document.querySelector(".audioOpen")
let audioRide = document.querySelector(".audioRide")
let audioSnare = document.querySelector(".audioSnare")
let audioTink = document.querySelector(".audioTink")
let audioTom = document.querySelector(".audioTom")

document.addEventListener("keyup", () => {
    clap.style.backgroundColor = "#DE7C5A"
    hihhat.style.backgroundColor = "#DE7C5A"
    bass.style.backgroundColor = "#DE7C5A"
    kick.style.backgroundColor = "#DE7C5A"
    openh.style.backgroundColor = "#DE7C5A"
    ride.style.backgroundColor = "#DE7C5A"
    snare.style.backgroundColor = "#DE7C5A"
    tink.style.backgroundColor = "#DE7C5A"
    tom.style.backgroundColor = "#DE7C5A"
})

document.addEventListener("keypress", (e) => {
    if (e.key === "a" || e.key === "A") {
        audioClap.src = "sounds/clap.wav"
        clap.style.backgroundColor = "red"
    } else if (e.key === "s" || e.key === "S") {
        audioHihhat.src = "sounds/hihat.wav"
        hihhat.style.backgroundColor = "red"
    } else if (e.key === "d" || e.key === "D") {
        audioBass.src = "sounds/boom.wav"
        bass.style.backgroundColor = "red"
    } else if (e.key === "f" || e.key === "F") {
        audioKick.src = "sounds/kick.wav"
        kick.style.backgroundColor = "red"
    } else if (e.key === "g" || e.key === "G") {
        audioOpen.src = "sounds/openhat.wav"
        openh.style.backgroundColor = "red"
    } else if (e.key === "h" || e.key === "H") {
        audioRide.src = "sounds/ride.wav"
        ride.style.backgroundColor = "red"
    } else if (e.key === "j" || e.key === "J") {
        audioSnare.src = "sounds/snare.wav"
        snare.style.backgroundColor = "red"
    } else if (e.key === "k" || e.key === "K") {
        audioTink.src = "sounds/tink.wav"
        tink.style.backgroundColor = "red"
    } else if (e.key === "l" || e.key === "L") {
        audioTom.src = "sounds/tom.wav"
        tom.style.backgroundColor = "red"
    } 
})

clap.addEventListener("click", () => {
    audioClap.src = "sounds/clap.wav"
})

hihhat.addEventListener("click", () => {
    audioHihhat.src = "sounds/hihat.wav"
})

bass.addEventListener("click", () => {
    audioBass.src = "sounds/boom.wav"
})

kick.addEventListener("click", () => {
    audioKick.src = "sounds/kick.wav"
})

openh.addEventListener("click", () => {
    audioOpen.src = "sounds/openhat.wav"
})

ride.addEventListener("click", () => {
    audioRide.src = "sounds/ride.wav"
})

snare.addEventListener("click", () => {
    audioSnare.src = "sounds/snare.wav"
})

tink.addEventListener("click", () => {
    audioTink.src = "sounds/tink.wav"
})

tom.addEventListener("click", () => {
    audioTom.src = "sounds/tom.wav"
})



