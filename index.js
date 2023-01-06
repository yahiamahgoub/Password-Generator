const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q",
"R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n",
"o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", 
"9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",
":",";","<",">",".","?", "/"];



let firstPasswordEl = document.getElementById("firstPassword-el")
let secondPasswordEl = document.getElementById("secondPassword-el")
let lengthEl = document.getElementById("length-el")

function generatePassword(){
    let firstPassword = ""
    let index = -1
    for(let i = 0; i < lengthEl.value; i++){
        index = Math.floor(Math.random() * characters.length)
        firstPassword += characters[index]
    }
    firstPasswordEl.textContent = firstPassword

    let secondPassword = ""
    for(let i = 0; i < lengthEl.value; i++){
        index = Math.floor(Math.random() * characters.length)
        secondPassword += characters[index]
    }    
    secondPasswordEl.textContent = secondPassword
}

function copyFirstPassword(){
    const content = firstPasswordEl.textContent
    navigator.clipboard.writeText(content)
    const copied = navigator.clipboard.readText()
    console.log()
}

function copySecondPassword(){
    const content = secondPasswordEl.textContent
    navigator.clipboard.writeText(content)
    // const copied = navigator.clipboard.readText()
}