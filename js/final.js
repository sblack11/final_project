function playGame() {
//Declare variables  
var totalCount = 0;
var games = [];
var keepLooping = "y";
var userInput = "";

//begin game
var enterCave = prompt("You see a cave. Do you enter? y or n.");
//1st room  
if(enterCave === "y") {
  var room1 = prompt("You enter a huge cavern. You see 2 doors. 1 or 2?");
    
  if(room1 === "1") {
    document.write("As you enter a giant snake attacks and kills you. The end." + "\n");
//2nd room      
  }else{
    var room2 = prompt("A Giant sleeping red dragon is in the middle of the room. You see 2 doors. 1 or 2?");
      if(room2 === "1") {
        document.write("The dragon wakes up and eats you. The end." + "\n");
//3rd room        
  }else{
    var room3 = prompt("You enter a long hallway where you can see a light at the end of the tunnel. Do you go to the end? y or n?");
//win game      
      if(room3 === "y"){
        document.write("As you exit the cave you realize you made it through the mountain. The end." + "\n");
//final lose      
      }else{
        document.write("Your indecision has caught up to you as you see a giant red dragon coming at you. The end." + "\n");
    }    
  }
}
//dont enter cave      
}else{
    document.write("You don't enter the cave and go home. The end." + "\n");
}
//ask if you want to play game again
while(keepLooping) {
  userInput = prompt("Do you want to play again? y or n.");
  if(userInput === "n") {
    keepLooping = false;
  }else{
    games.push(userInput);
    playGame();
 }
}
//count times game played
//not able to get this to work....ughhhh
for (var count = 1; count < games.length; count++); {
  totalCount = games.length;
 }
//output times played 
  document.write("Total times played: " + totalCount);
}

playGame();






