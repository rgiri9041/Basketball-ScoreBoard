let homeScore = 0
let guestScore = 0

let homeScoreR1 = document.getElementById("homeO")
let homeScoreR2 = document.getElementById("homeT")
let homeScoreR3 = document.getElementById("homeTh")

let resultDisplay = document.getElementById("home-score")

homeScoreR1.addEventListener("click", function(){
    homeScore +=1
    resultDisplay.textContent = homeScore
 })

 homeScoreR2.addEventListener("click", function() {
    homeScore += 2
    resultDisplay.textContent = homeScore
 })

homeScoreR3.addEventListener("click", function() {
    homeScore += 3
    resultDisplay.textContent = homeScore
})

let guestScoreR1 = document.getElementById("guestO")
let guestScoreR2 = document.getElementById("guestT")
let guestScoreR3 = document.getElementById("guestTh")

let resultDisplayGuest = document.getElementById("guest-score")

function guestResult1 (){
    guestScore +=1
    resultDisplayGuest.textContent = guestScore
}
guestScoreR1.addEventListener("click", guestResult1)


guestScoreR2.addEventListener("click", function(){
    guestScore += 2
    resultDisplayGuest.textContent = guestScore
})

guestScoreR3.addEventListener("click", function(){
    guestScore += 3
    resultDisplayGuest.textContent = guestScore
})

  