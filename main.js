// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const likeButtons= document.querySelectorAll('span.like-glyph')

likeButtons.forEach(likeButton => {
    likeButton.addEventListener('click', e => {
      mimicServerCall()
      .then(() => {
        if (likeButton.textContent !== FULL_HEART){
          likeButton.textContent = FULL_HEART
          likeButton.classList.add('activated-heart')
        }else{
          likeButton.classList.remove('activated-heart')
          likeButton.textContent = EMPTY_HEART
        }     
      })
      .catch((errorMessage) => {
        document.querySelector('div#modal').className=''
        document.querySelector('div#modal p').textContent = errorMessage
        setTimeout(() => {
          document.querySelector('div#modal').className = "hidden"
        }, 3000);
      })
    })
})


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
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
