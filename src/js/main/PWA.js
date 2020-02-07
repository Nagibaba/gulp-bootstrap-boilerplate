import {setCookie, getCookie, removeCookie} from './cookies'

let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
    // Prevent Chrome 67 and earlier from automatically showing the prompt
    // Stash the event so it can be triggered later.
    deferredPrompt = e;
    const btnAdd = document.getElementById('save-as-app')
    btnAdd.style.display = 'block';

    if(!getCookie('save-as-app')){
        $('#save-as-app').tooltip('show')
        setTimeout(()=>{$('#save-as-app').tooltip('hide')}, 10000)
        setCookie('save-as-app', 1)
    }

    if(btnAdd){
        btnAdd.addEventListener('click', (e) => {
            // e.preventDefault()
            // hide our user interface that shows our A2HS button
            btnAdd.style.display = 'none';
            console.log('before prompt')
            // Show the prompt
            deferredPrompt.prompt()
            .then(res => console.log(res))
            .catch(error => { console.log(`----> ${error}`) })

            
           
            // Wait for the user to respond to the prompt
            deferredPrompt.userChoice
            .then((choiceResult) => {
              if (choiceResult.outcome === 'accepted') {
                console.log('User accepted the A2HS prompt');
              } else {
                console.log('User dismissed the A2HS prompt');
              }
              deferredPrompt = null;
            });
        });
    }
});