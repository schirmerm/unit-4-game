let randNumber = Math.floor((Math.random() * 101) + 19);
let score = 0;
let wins = 0;
let losses = 0;
//Function to put wins and losses to HTML
const getWin = _ => {
    document.getElementById('winning').innerHTML = `Wins: ${wins}`
}
const getLosses = _ => {
    document.getElementById('losing').innerHTML = `Losses: ${losses}`
}

//Assign value to the gems
const imageValue = _ => {
    document.getElementById('gem1').imageValue = Math.floor(Math.random()*12) + 1
    document.getElementById('gem2').imageValue = Math.floor(Math.random()*12) + 1
    document.getElementById('gem3').imageValue = Math.floor(Math.random()*12) + 1
    document.getElementById('gem4').imageValue = Math.floor(Math.random()*12) + 1
    
}

//create html score
const getScore = _ => {
    document.getElementById('score').innerHTML = `<h1>Score: ${score}</h1>`
}

//Create functions for Gems
const runGame = _ => {
    let randNumber = Math.floor((Math.random() * 101) + 19);
    document.getElementById('randomNumber').innerHTML = `<h1>${randNumber}</h1>`
    score = 0;
    getScore()
    imageValue()
    getWin()
    getLosses()
    
    
    document.addEventListener('click', event => {
        if (event.target.className === 'gem col-sm-2'){
          let gemValue = parseInt(event.target.imageValue)
          score = score + gemValue
          document.getElementById('score').innerHTML = `<h1>Score: ${score}</h1>`
          if(score > randNumber){
              losses = losses+ 1
              document.getElementById('losing').innerHTML = `Losses: ${losses}`
              runGame()
          }else if(score === randNumber){
              wins = wins + 1
              document.getElementById('winning').innerHTML = `Wins: ${wins}`
              runGame()
          }
        }else{}
    })
    // document.getElementById('gem1').addEventListener('click', function(){
    //     score = score + document.getElementById('gem1').imageValue
        
    // })
    // document.getElementById('gem2').addEventListener('click', function(){
    //     score = score + document.getElementById('gem2').imageValue
        
        
    // })
    // document.getElementById('gem3').addEventListener('click', function(){
    //     score = score + document.getElementById('gem3').imageValue
        
        
    // })
    // document.getElementById('gem4').addEventListener('click', function(){
    //     score = score + document.getElementById('gem4').imageValue  
    // })
    
    
}
//Function to compare score to random number
// const compare = _ => {
// if( score > randNumber){
//     console.log(`loss`)
   
// } else if (score === randNumber){
//     console.log('win')
// }else{}
// }

//Reset Game

runGame()
