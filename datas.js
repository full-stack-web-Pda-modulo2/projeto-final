// em arquivo separado apenas para teste 

class Conference {
    constructor(title, img, content, adress, initialDate, finalDate) {
      this.title = title;
      this.img = img;
      this.content = content;
      this.adress = adress;
      this.initialDate = new Date(initialDate);
      this.finalDate = new Date(finalDate);
    }

    isInitialDateValid() {
      return this.initialDate.getTime() > Date.now();
    }

    getEventDuration() {
        const durationMs = this.finalDate.getTime() - this.initialDate.getTime();

        return this.formatDuration(durationMs);
        
      }

      formatDuration(durationMs) {
        const hours = Math.floor((durationMs / (1000 * 60 * 60)) % 24);
        const days = Math.floor(durationMs / (1000 * 60 * 60 * 24));
      
        return `${days} dias e ${hours} horas`;
      }

    displayEvent() {
      const eventSection = document.createElement("section");
      eventSection.classList.add("event-info");

      eventSection.innerHTML = `
        <h2>${this.title}</h2>
        <img src="${this.img}" alt="Imagem do evento" id="img-evento" style="max-width: 100%;">
        <p><strong>Descrição:</strong> ${this.content}</p>
        <p><strong>Endereço:</strong> ${this.adress}</p>
        <p><strong>Data inicial:</strong> ${this.initialDate.toLocaleString()}</p>
        <p><strong>Data final:</strong> ${this.finalDate.toLocaleString()}</p>
        <p><strong>Duração do evento:</strong> ${this.getEventDuration()}</p>
        <p id="time-until-event">Tempo até o evento: Calculando...</p>
      `;

      document.body.appendChild(eventSection);
    }
  }

  document.getElementById("register-btn").addEventListener("click", () => {
    const title = document.getElementById("name-input").value;
    const img = document.getElementById("url-img").value;
    const content = document.getElementById("description-text").value;
    const initialDate = document.getElementById("initial-date-input").value;
    const finalDate = document.getElementById("final-date-input").value;
    const adress = `
      ${document.getElementById("street-input").value},
      ${document.getElementById("neighborhood-input").value},
      ${document.getElementById("city-input").value} - 
      ${document.getElementById("state-input").value},
      CEP: ${document.getElementById("cep-input").value}
    `;

    const conference = new Conference(title, img, content, adress, initialDate, finalDate);

    // VALIDAÇÂO DE TESTE
    // const errorMessage = document.getElementById("errorMessage");

    // if (!title || !img || !content || !initialDate || !finalDate) {
    //     errorMessage.textContent = "Por favor, preencha todos os campos obrigatórios.";
    //     errorMessage.classList.remove("hidden");
    //     setTimeout(() => {
    //       errorMessage.classList.add("hidden");
    //     }, 5000);
    //     return;
    // }

    // if (!conference.isInitialDateValid()) {
    //     errorMessage.textContent = "A data inicial deve ser posterior à data atual.";
    //     errorMessage.classList.remove("hidden");
    //     setTimeout(() => {
    //       errorMessage.classList.add("hidden");
    //     }, 5000);
    //     return;
    // }

    // if (durationMs < 0) {
    //     errorMessage.textContent = "Data final não pode ser anterior à data inicial.";
    //     errorMessage.classList.remove("hidden");
    //     setTimeout(() => {
    //         errorMessage.classList.add("hidden");
    // }, 5000);
    // }

    conference.displayEvent();
  });