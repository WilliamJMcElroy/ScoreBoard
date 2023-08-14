// //globals
let home = 0
let away = 0

const scoreH1Btn = document.getElementsByClassName('scoreH1Btn')[0]
// let elma = document.getElementById('Away+1')


// function resetScore() {
//     homeButtonClicked = ''
//     awayButtonClicked = ''
//     updateHomeDOM1()
//     updateHomeDOM3()
//     updateAwayDOM1()
//     updateAwayDOM3()
//     // updateAwayDOM()
// }

// function updateHomeDOM1() {
//     elmh1.innerText = home
// }

// function updateHomeDOM3() {
//     elmh3.innerText = home
// }

// function updateAwayDOM1() {

//     elma1.innerText = away

// }

// function updateAwayDOM3() {
//     elma3.innerText = away
// }


// // buttons function
// function scoreOneHome() {
//     home++
//     console.log(home)
//     updateHomeDOM1()
//     return home
// }

// function scoreThreeHome() {
//     home + 3
//     console.log(home)
//     return (home + 3)
// }

// function scoreOneAway() {
//     away++
//     console.log(away)
//     updateAwayDOM1()
//     return away
// }

// function scoreThreeAway() {
//     away + 3
//     console.log(away)
//     return (away + 3)
// }

let scoreHome = document.getElementById('Home')
let scoreAway = document.getElementById('Away')
function updateHomeDOM() {
    scoreHome.innerHTML = home
    TotalScore()
}

function updateAwayDOM() {
    scoreAway.innerHTML = away
    TotalScore()
}


function scoreOneHome() {
    home += 1
    console.log("HOME 1")
    updateHomeDOM()
    return home
}

function scoreOneAway() {
    away += 1
    console.log("AWAY 1")
    updateAwayDOM()
    return away
}

function scoreThreeHome() {
    home += 3
    console.log("HOME 3")
    updateHomeDOM()
    return home
}

function scoreThreeAway() {
    away += 1
    console.log("Away 3")
    updateAwayDOM()
    return away
}

function resetScore() {
    home = 0
    away = 0
    updateHomeDOM()
    updateAwayDOM()
}

function TotalScore() {
    if (home >= 20) {
        window.alert("HOME TEAM has won!")
        resetScore()
    }
    if (away >= 20) {
        window.alert("AWAY TEAM has won!")
        resetScore()
    }

}