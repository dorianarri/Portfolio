const inputs = document.querySelectorAll(".input");


function focusFunc(){
    let parent= this.parentNode;
    parent.classList.add("focus");
}

function blurFunc(){
    let parent= this.parentNode;
    if(this.value === ""){
        parent.classList.remove("focus");
    }
}


inputs.forEach(input => {
    input.addEventListener("focus" ,focusFunc);
    input.addEventListener("blur" ,blurFunc);
})

const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', function(){
        navLinks.forEach(link => link.classList.remove('active'));

        this.classList.add('active');
    })
})

window.onresize = function() {
    let icon = document.getElementById("social-icon");
    if (window.innerWidth <= 480) {
      icon.classList.remove("fa-2xl");
      icon.classList.add("fa-sm");
    } else {
      icon.classList.remove("fa-sm");
      icon.classList.add("fa-2xl");
    }
  };