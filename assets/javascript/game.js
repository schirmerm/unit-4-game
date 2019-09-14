let randNumber = Math.floor((Math.random() * 101) + 19);
let score = 0;
let wins = 0;
let losses = 0;

//Functiont to put randnumber in html
const getNumber = _ => {
    let randNumber = Math.floor((Math.random() * 101) + 19);
    let getNumber = randNumber;
    document.getElementById('randomNumber').innerHTML = `${getNumber}`
}

//Assign value to the gems
const imageValue = _ => {
    document.getElementById('gem1').src = Math.floor(Math.random()*12)
    document.getElementById('gem2').src = Math.floor(Math.random()*12)
    document.getElementById('gem3').src = Math.floor(Math.random()*12)
    document.getElementById('gem4').src = Math.floor(Math.random()*12)
    
}
//Create Click functions for Gems
const runGame = _ => {
    document.getElementById('gem1').addEventListener('click', function(){
        
    })
    document.getElementById('gem2').addEventListener('click', function(){
        
    })
    document.getElementById('gem3').addEventListener('click', function(){
           
    })
    document.getElementById('gem4').addEventListener('click', function(){
   
    })
        
}
runGame()
