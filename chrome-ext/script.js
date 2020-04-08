

const main = document.querySelector("main")

main.style.backgroundImage = "url(https://source.unsplash.com/random/1920x1080)"

// const apiHandler = new APIHandler()
// apiHandler.getWeather()


const messages = [
    "GOOD DAY MODAFOKA",
    "GET YOUR SHIT TOGETHER",
    "KEEP UP WITH IT",
    "DONT STOP",
    "YOU PIECE OF SHIT",
    "NICE SUMMER DAYS",
    "OH YEAH BABY",
    "EVERYBODY PANIC"
]



const randomFromMessages = Math.floor(Math.random() * messages.length)

document.querySelector("p").innerText = messages[randomFromMessages]