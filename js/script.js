// scroll reveal
window.sr = ScrollReveal({ reset: true });

sr.reveal('.something-1', { duration: 200 });

sr.reveal('.something-2', {
  origin: 'right',
  duration: 2000
});

let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// back to top

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// feedback form
function toggle_visibility() {
  var e = document.getElementById('feedback-main');
  if(e.style.display == 'block')
     e.style.display = 'none';
  else
     e.style.display = 'block';
}