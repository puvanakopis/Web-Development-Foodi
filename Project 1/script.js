

new WOW().init();


function redirectToDiv(divId) {
    document.getElementById(divId).scrollIntoView({
      behavior: 'smooth' 
    });
  }


  document.querySelector('.heart-icon').addEventListener('click', function() {
    alert('Added to favorites!');
});


