
  function playSound(e){
                //console.log(e.keyCode);
                const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
                const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
                if(!audio) return; //if no associated audio clip, stop the function from running altogether
                
                key.classList.add('playing'); //to sync the transition of the large size and border yellow
                audio.currentTime = 0;
                audio.play();
            }
            
            function removeTransition (e){
                //console.log(e);
                if(e.propertyName !== 'transform') return; //skip it if it's not a transform
                //'this' is the key since we called the add event listener function on the key
                this.classList.remove('playing');   
            }
            
            const keys = document.querySelectorAll('.key');
            //each key gets an event listener added to it, when the transition end event occurs, apply removeTransition function
            keys.forEach(key => key.addEventListener('transitionend', removeTransition));
            
            window.addEventListener('keydown', playSound);
