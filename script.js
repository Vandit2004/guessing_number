let input = document.querySelector(".input")
let submit = document.querySelector(".submit")
let restart = document.querySelector(".restart")
let message = document.querySelector(".output")
let attempt = document.querySelector(".attempt")
let count = 0
let luckyNumber = Math.floor(Math.random()*100) + 1
submit.addEventListener("click",function(){
    let number = Number(input.value)
    if(input.value ==="" || isNaN(number)){
        message.innerHTML = "Message : Please enter a valid number"
        return
    }
    if(number<1 || number>100){
        message.innerHTML = `Message : Enter the number between 1-100`
        return
    }
    else if(number>luckyNumber){
        message.innerHTML = "Message : Too High ⬆"
        count++
        attempt.innerHTML = `Attempts : ${count}`
    }
    else if(number<luckyNumber){
        message.innerHTML = "Message : Too Low ⬇ " 
        count++
        attempt.innerHTML = `Attempts : ${count}`
    }
    else{
        message.innerHTML = "Message : 🎉 Correct! You Win!"
        count++
        attempt.innerHTML = `Attempts : ${count}`
    }
})
restart.addEventListener("click",function(){
    count = 0
    input.value = ""
    message.innerHTML = "Message : "
    attempt.innerHTML = "Attempts : 0 "
    luckyNumber = Math.floor(Math.random()*100) + 1
})
