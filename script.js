const rockbtn=document.querySelector('.rock-btn')
const paperbtn=document.querySelector('.paper-btn')
const scissorsbtn=document.querySelector('.scissors-btn')
const userhandicon=document.querySelector('.user.hand-icon')
const computerhandicon=document.querySelector('.computer.hand-icon')
const result=document.querySelector('.result')
const userscore=document.querySelector('.user-score')
const computerscore=document.querySelector('.computer-score')

const rockicon="✊"
const papericon="🖐️"
const scissorsicon="✌️"
const iconlist=[rockicon,papericon,scissorsicon]


//reusablecode

function calculateResult(selectedicon,winningicon){
    result.innerText=""
    userhandicon.innerText="🤜"
    computerhandicon.innerText="🤛"
    userhandicon.classList.add('shakeUserHands')
    computerhandicon.classList.add('shakeComputerHands')
    setTimeout(()=>{
        userhandicon.classList.remove('shakeUserHands')
    computerhandicon.classList.remove('shakeComputerHands')
    userhandicon.innerText=selectedicon
    const computerchoice=Math.floor(Math.random()*3)
    computerhandicon.innerText=iconlist[computerchoice]

    if(userhandicon.innerText === computerhandicon.innerText){
        result.innerText="Draw"
    }
    else if(computerhandicon.innerText === winningicon){
        result.innerText="You Won!!"
        userscore.innerText=+userscore.innerText+1
    }
    else
    {
        result.innerText="Computer Won!!"
        computerscore.innerText=+computerscore.innerText+1
    }
    },1000)

}


rockbtn.addEventListener('click',()=>{
    // //after shake reset

    // result.innerText=""
    // userhandicon.innerText="🤜"
    // computerhandicon.innerText="🤛"

    // //to shakehand

    // userhandicon.classList.add('shakeUserHands')
    // computerhandicon.classList.add('shakeComputerHands')

    // //to stop shake hand

    // setTimeout(()=>{
    //     userhandicon.classList.remove('shakeUserHands')
    // computerhandicon.classList.remove('shakeComputerHands')

    // //fix the user icon

    // userhandicon.innerText=rockicon

    // //to get random on computer

    // const computerchoice=Math.floor(Math.random()*3)
    // computerhandicon.innerText=iconlist[computerchoice]

    // //condition to get result

    // if(userhandicon.innerText === computerhandicon.innerText){
    //     result.innerText="Draw"
    // }
    // else if(computerhandicon.innerText === scissorsicon){
    //     result.innerText="You Won!!"
    //     userscore.innerText=+userscore.innerText+1
    // }
    // else
    // {
    //     result.innerText="Computer Won!!"
    //     computerscore.innerText=+computerscore.innerText+1
    // }
    // },1000)

    calculateResult(rockicon,scissorsicon)

})

paperbtn.addEventListener('click',()=>{
    // result.innerText=""
    // userhandicon.innerText="🤜"
    // computerhandicon.innerText="🤛"
    // userhandicon.classList.add('shakeUserHands')
    // computerhandicon.classList.add('shakeComputerHands')
    // setTimeout(()=>{
    //     userhandicon.classList.remove('shakeUserHands')
    // computerhandicon.classList.remove('shakeComputerHands')
    // userhandicon.innerText=papericon
    // const computerchoice=Math.floor(Math.random()*3)
    // computerhandicon.innerText=iconlist[computerchoice]
    // if(userhandicon.innerText === computerhandicon.innerText){
    //     result.innerText="Draw"
    // }
    // else if(computerhandicon.innerText === rockicon){
    //     result.innerText="You Won!!"
    //     userscore.innerText=+userscore.innerText+1
    // }
    // else
    // {
    //     result.innerText="Computer Won!!"
    //     computerscore.innerText=+computerscore.innerText+1
    // }
    // },1000)

    calculateResult(papericon,rockicon)
})

scissorsbtn.addEventListener('click',()=>{
    // result.innerText=""
    // userhandicon.innerText="🤜"
    // computerhandicon.innerText="🤛"
    // userhandicon.classList.add('shakeUserHands')
    // computerhandicon.classList.add('shakeComputerHands')
    // setTimeout(()=>{
    //     userhandicon.classList.remove('shakeUserHands')
    // computerhandicon.classList.remove('shakeComputerHands')
    // userhandicon.innerText=scissorsicon
    // const computerchoice=Math.floor(Math.random()*3)
    // computerhandicon.innerText=iconlist[computerchoice]
    // if(userhandicon.innerText === computerhandicon.innerText){
    //     result.innerText="Draw"
    // }
    // else if(computerhandicon.innerText === papericon){
    //     result.innerText="You Won!!"
    //     userscore.innerText=+userscore.innerText+1
    // }
    // else
    // {
    //     result.innerText="Computer Won!!"
    //     computerscore.innerText=+computerscore.innerText+1
    // }
    // },1000)

    calculateResult(scissorsicon,papericon)

})