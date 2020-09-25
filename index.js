{
   document.querySelector(".img1").style.display = "none";
   document.querySelector(".img2").style.display = "none";

   document.querySelector(".btn-roll").addEventListener("click", function() {

      let randomNum1, randomNum2;

      randomNum1 = Math.floor(Math.random() * 6) + 1;
      randomNum2 = Math.floor(Math.random() * 6) + 1;

      document.querySelector(".img1").setAttribute("src", "images/dice" + randomNum1 + ".png");
      document.querySelector(".img2").setAttribute("src", "images/dice" + randomNum2 + ".png");

      document.querySelector(".img1").style.display = "block";
      document.querySelector(".img2").style.display = "block";

      document.querySelector('.player-1').style.margin = "0";

      if (randomNum1 > randomNum2) {
         document.querySelector("h1").textContent = "player 1 won";
      } else if (randomNum1 < randomNum2) {
         document.querySelector("h1").textContent = "player 2 won";
      } else if (randomNum1 === randomNum2) {
         document.querySelector("h1").textContent = "Match draw";
      }

   });
}
