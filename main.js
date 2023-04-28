//scroll to top
const mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20
        ||
        document.documentElement.scrollTop > 20) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
}

function topFunction() {
    document.body.scrollTop = 0;

    document.documentElement.scrollTop = 0
}


//email
const btn = document.getElementById('button');
const form = document.getElementById("form")

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_flt5rk9';

   emailjs.sendForm(serviceID, templateID, form)
    .then(() => {
      btn.value = 'Send';
      alert('Sent!');
      document.getElementById('name').value = " "
      document.getElementById('email').value = " "
      document.getElementById('message').value = " "
    }, (err) => {
      btn.value = 'Send';
      alert(JSON.stringify(err));
    });
});



// slide
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("c-text");
    
    if (n > slides.length) {slideIndex = 1}
    
    if (n < 1) {slideIndex =slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex-1].style.display = "block";
}
