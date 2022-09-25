function init(){
    setStartText();
    varTextWrapper();
    setTimeout(showProgrammerName, 2000);
    cssWelcomeText();
    setInterval(moveMouseDown, 1000);
}

function moveMouseDown(){
    mouse.classList.add("translateY");
    setTimeout(moveMouseUp, 500);
}

function moveMouseUp(){
    mouse.classList.remove('translateY');
}

function varTextWrapper(){
    var textWrapper = document.querySelector('.ml11 .letters');
    textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");
}

function cssWelcomeText(){
    anime.timeline({loop: true})
    .add({
        targets: '.ml11 .line',
        scaleY: [0,1],
        opacity: [0.5,1],
        easing: "easeOutExpo",
        duration: 700
    })
    .add({
        targets: '.ml11 .line',
        translateX: [0, document.querySelector('.ml11 .letters').getBoundingClientRect().width + 10],
        easing: "easeOutExpo",
        duration: 700,
        delay: 100
    }).add({
        targets: '.ml11 .letter',
        opacity: [0,1],
        easing: "easeOutExpo",
        duration: 600,
        offset: '-=775',
        delay: (el, i) => 34 * (i+1)
    }).add({
        targets: '.ml11',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
    });
}

function setStartText(){
    welcomeText.innerHTML = `<div class="ml11">
                                <span class="text-wrapper">
                                <span class="line line1"></span>
                                <span class="letters">Willkommen</span>
                                </span>
                            </div>`
}

function showProgrammerName(){
    welcomeText.innerHTML += `<span>auf der Portfolio-Seite von</span>`;
    welcomeText.innerHTML += `<h3>Nils Nehring</h3>`;
    welcomeText.innerHTML += `<h1 class="ml15">
                                <span class="word">HTML</span>
                                <span class="word">CSS</span>
                                <span class="word">JavaScript</span>
                            </h1>
                                `;
        anime.timeline({loop: false})
                                .add({
                                  targets: '.ml15 .word',
                                  scale: [14,1],
                                  opacity: [0,1],
                                  easing: "easeOutCirc",
                                  duration: 800,
                                  delay: (el, i) => 800 * i
                                }).add({
                                  targets: '.ml15',
                                  opacity: [0,1],
                                  duration: 1000,
                                  easing: "easeOutExpo",
                                //   delay: 1000
                                });                            
}

function sendMail(){
    mailInput.value = '';
    mailInput.disabled = true;
    firstNameInput.value = '';
    firstNameInput.disabled = true;
    lastNameInput.value = '';
    lastNameInput.disabled = true;
    textArea.value = ''; 
    textArea.placeholder = 'Vielen Dank für deine Anfrage. Ich Antworte dir in kürze.';
    textArea.disabled = true;
    submitBTN.disabled = true;
    contactFormular.innerHTML = `Deine Anfrage wurde gesendet. Aus Sicherheitsgründen ist das Kontakt Formular bis zu deinem nächsten Besuch gesperrt`;
    console.log('Email');
}

function openResponsiveMenu(){
    menuBtnMobile.classList.remove('rotateZ90DEG');
    mobileNavbar.classList.remove('d-none');
    ifMobileNavbarIsOpen();
}

function ifMobileNavbarIsOpen(){
    if(mobileNavbar){
       console.log("mobile navbar is open");
    }
}

function closeMenuandGoToLink(){
    mobileNavbar.classList.add('d-none');
    menuBtnMobile.classList.add('rotateZ90DEG');
}
