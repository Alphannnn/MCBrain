document.addEventListener("mousemove" , (event) =>{
     const x = event.clientX / window.innerWidth - 0.5;
     const y = event.clientY / window.innerHeight - 0.5;

     document.querySelectorAll('.parallax').forEach((element)=> {
        const speed = element.getAttribute("data-speed");

        element.style.transform = `translate(${x * speed * 20}px , ${y * speed * 20}px)`;
     })
})


//Sign-In Page

const signInBtn = document.getElementById('signInBtn');
const signInPage = document.getElementById('signInPage');
let crossIcon = document.getElementById('closeIcon');


signInBtn.addEventListener('click' , ()=>{
   signInPage.classList.remove('closeSignIn')
   signInPage.classList.add("openSignin");
})

crossIcon.addEventListener('click' , ()=>{
    signInPage.classList.remove("openSignin");
     signInPage.classList.add('closeSignIn');
})