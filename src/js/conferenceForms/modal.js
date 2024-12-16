export function showErro(message){
    const popOut = document.getElementById("errorPopOut");
    const errorMessage = document.getElementById('errorMessage');
    const progressBar =document.querySelector(".progress-bar");

    errorMessage.textContent= message;
    popOut.classList.remove("hidden");
    popOut.classList.add("show");

    progressBar.style.animation = "none";
    requestAnimationFrame(()=>{
        progressBar.style.animation="";
        progressBar.style.animation = "progress 3s linear forwards";
    })

setTimeout(()=>{
    popOut.classList.remove("show");
    setTimeout(() => {
        popOut.classList.add("hidden");
    }, 300);
},3000)
}