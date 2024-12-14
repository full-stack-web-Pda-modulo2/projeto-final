document.getElementById("myFile").addEventListener("change", function (event) {
    const file = event.target.files[0]; // Obtém o arquivo selecionado
    const previewImage = document.getElementById("previewImage");
    const message = document.getElementById("message");

    if (file) {
        // Verifica se o arquivo é uma imagem
        if (file.type.startsWith("image/")) {
            const reader = new FileReader();

            reader.onload = function (e) {
                previewImage.src = e.target.result; // Define a imagem no elemento <img>
                previewImage.style.display = "block"; // Mostra a imagem
                message.style.display = "none"; // Esconde a mensagem
            };

            reader.readAsDataURL(file); // Lê o arquivo como DataURL
        } else {
            message.textContent = "Por favor, selecione um arquivo de imagem válido.";
            message.style.display = "block";
            previewImage.style.display = "none"; // Esconde a imagem
        }
    } else {
        message.textContent = "Nenhuma imagem selecionada.";
        message.style.display = "block";
        previewImage.style.display = "none"; // Esconde a imagem
    }
});
