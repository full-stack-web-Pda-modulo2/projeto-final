//função que faz um callback que dispara os erro durante o preenchemento do formulario
export function mostrarErro(mensagem){
    const popOut = document.getElementById("errorPopOut");
    const errorMessage = document.getElementById('errorMessage');
    const progressBar =document.querySelector(".progress-bar");

    //Define a mensagem e exibe o pop-out
    errorMessage.textContent= mensagem;
    popOut.classList.remove("hidden");
    popOut.classList.add("show");

    //Reinicia a animação da barra de progresso
    progressBar.style.animation = "none";
    requestAnimationFrame(()=>{
        progressBar.style.animation="";
        progressBar.style.animation = "progress 3s linear forwards";
    })

//Oculta o pop-out após 3 segundos
setTimeout(()=>{
    popOut.classList.remove("show");
    setTimeout(() => {
        popOut.classList.add("hidden");
    }, 300);//Espera a transição terminar antes de ocultar completamente
},3000)
}