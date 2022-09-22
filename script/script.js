function init(){
    welcomeText.innerHTML = `<h1 class="ml11">
    <span class="text-wrapper">
      <span class="line line1"></span>
      <span class="letters">Wilkommen
      </span>
    </span>
    </h1>
    <h1 class="ml11">
    <span class="text-wrapper">
      <span class="line line1"></span>
      <span class="letters">Wilkommen
      </span>
    </span>
    </h1>`
    // Wrap every letter in a span
var textWrapper = document.querySelector('.ml11 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

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

  
    //    welcomeText.innerHTML = `<div class="screen-wrapper"><h1><span  id="txtWrapper">Willkommen,</span></h1>
    //                             <h2>hier entsteht die Portfolio-Seite<br>
    //                                 von <span>Nils Nehring</span>
    //                             </h2>
    //                         </div>`
    //     ; 
}

function sendMail(){
    console.log('Email');
}

function openResponsiveMenu(){
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
}
