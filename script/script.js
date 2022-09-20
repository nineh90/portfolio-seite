function init(){
    welcomeText.innerHTML = `<div class="screen-wrapper"><h1><span  id="txtWrapper">Willkommen,</span></h1>
        <h2>hier entsteht die Portfolio-Seite<br>
        von <span>Nils Nehring</span>
        </h2></div>`
        ; 
}

function sendMail(){
    console.log('Email');
}

function openResponsiveMenu(){
    mobileNavbar.classList.remove('d-none');
    // ifMobileNavbarIsOpen();
}

// function ifMobileNavbarIsOpen(){
//     if(mobileNavbar){
//         mobileNavbar.classList.add('d-none')
//     }
// }

function closeMenuandGoToLink(){
    mobileNavbar.classList.add('d-none');
}
