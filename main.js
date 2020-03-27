// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const glyphObject = {'♡':FULL_HEART,'♥':EMPTY_HEART}
const colorState = {"red":"","":"red"}
///

  let likeButtons = document.querySelectorAll(".like")
  for (el of likeButtons){
  
    el.addEventListener("click", (e) => {
      mimicServerCall()
      
      .then((respond) => {
   e.target.innerText = glyphObject[e.target.innerText]
   e.target.style.color = colorState[e.target.style.color]
      })
      .catch((error) => {
      document.getElementById("modal").className = ""

      setTimeout(function() {
    
        document.getElementById("modal").className = "hidden"
      
      }, 5000);
      })
    })
  }



//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
