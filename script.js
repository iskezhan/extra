const message = document.getElementById("message")
const button = document.getElementById("submit")
const image = document.getElementById("picture")
const phrase = document.getElementById("phrase")
/*
1. Split message words and store it in an array.
2. Display in CONSOLE the number of elements in the array and the most frequent word in the array
*/


let messageWords = []
let theMostFrequentWord = "";
let numberOfWordsInTheMessage = 0;


// Random phrases and its pictures (represented as an array of objects)
const randomPhrasesAndPictures = [
    {
        phrase: "A wizard is never late, nor is he early. He arrives precisely when he means to. (c) Gandalf The Grey",
        imageURL: "https://mckellen.com/images/1257.jpg"
    },
    {
        phrase: "We must all face the choice between what is right and what is easy. (c) Albus Dumbledore",
        imageURL: "https://www.magicalquote.com/wp-content/uploads/2020/02/We-must-all-face-the-choice-between-what-is-right-and-what-is-easy.jpg"
    },
    {
        phrase: "You are a wizard, Harry (c) Hagrid",
        imageURL: "https://thejapanhobbyist.files.wordpress.com/2017/03/64013553.jpg"
    }
]



button.addEventListener("click", () => {
    const randomNumber = Math.floor(Math.random() * 3) // number between 0 and 2 inclusively
    image.style.display = "block"
    image.src = randomPhrasesAndPictures[randomNumber]["imageURL"]
    phrase.innerText = randomPhrasesAndPictures[randomNumber]["phrase"]

    messageWords = message.value.split(" ")
    numberOfWordsInTheMessage = messageWords.length


    const frequency = new Map();

    for (let word of messageWords) { //writing all word into map
        if (frequency.get(word.toLowerCase()) === undefined) {
            frequency.set(word.toLowerCase(), 1)
        } else {
            frequency.set(word.toLowerCase(), frequency.get(word.toLowerCase()) + 1)
        }
    }
    
    maxFreq = 0

    for (let value of frequency.values()) { //finding max frequency
        if (value > maxFreq) {
            maxFreq = value
        }
    }
    
    for (let word of messageWords) {
        if (frequency.get(word.toLowerCase()) === maxFreq) {
            theMostFrequentWord = word
            break
        }
    }

    console.log(`The most frequent word of the message is "${theMostFrequentWord}"`)
    console.log(`The number of words in the message is ${numberOfWordsInTheMessage}`)
})