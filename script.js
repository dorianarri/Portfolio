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
    link.addEventListener('click', () =>{
        navLinks.forEach(link => link.classList.remove('active'));

        this.classList.add('active');
    })
})