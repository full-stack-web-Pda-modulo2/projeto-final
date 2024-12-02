/*class Adress {
    constructor(street, neighborhood, cep, city, state, complement) {
      this.street = street;
      this.neighborhood = neighborhood;
      this.cep = cep;
      this.city = city;
      this.state = state;
      this.complement = complement;
    }

    get PegaDados(){
      const displayAdress = document.createElement("div")

      displayAdress.innerHTML = `
        <p>${this.street}</p>
        <p>${this.neighborhood}</p>
        <p>${this.city} - ${this.state}</p>
        <p>${this.cep}</p>
        <p>${this.complement}</p>
      `

      // isso aqui vai fazer o endereço aparecer (vai ficar duplicado pq ele já vai ser empresso na instância de Conference)
      // document.body.appendChild(displayAdress); 

      return displayAdress
      // return [this.street, this.neighborhood, this.cep, this.city, this.state, this.complement]
    }

    set editaDados(novoEndereco) {
      
       // Verifica se o novo endereço tem exatamente 6 elementos

       if (Array.isArray(novoEndereco) && novoEndereco.length === 6) {

        // Desestrutura o array em variáveis
        // A operação de desestruturação pega os valores dentro do array novoEndereco e os "desempacota" em variáveis individuais. Isso significa que o primeiro valor do array será atribuído à variável street, o segundo valor será atribuído à variável neighborhood, o terceiro valor para cep, e assim por diante, até que todos os valores do array sejam atribuídos às respectivas variáveis.

        const [street, neighborhood, cep, city, state, complement] = novoEndereco;
        
        // Define os novos valores
        this.street = street;
        this.neighborhood = neighborhood;
        this.cep = cep;
        this.city = city;
        this.state = state;
        this.complement = complement;
    } else {
        // Se não for um array ou o array não tiver 6 elementos, retorna um erro
        console.log("Erro: O novo endereço deve ser um array com 6 elementos.");
    }
    // Retorna o array atualizado com os novos dados
    return this.PegaDados;
}
    } //O Array.isArray() é um método nativo do JavaScript que verifica se o valor passado como argumento é um array. Ele retorna um valor booleano (true ou false), dependendo de o valor ser um array ou não.
    
  class Conference {
    constructor(title, img, content, adress, date) {
      (this.title = title),
        (this.img = img),
        (this.content = content),
        (this.adress = adress), // ESSE CARA AQUI VAI VIR DO ARRAY DO GET DA CLASSE ANTERIOR
        (this.date = date);
    }

    get mostar(){
      const displayEvent = document.createElement("div")

      displayEvent.innerHTML = `
        <h2>${this.title}</h2>
        <img src="${this.img}" alt="${this.title}"/>
        <p>${this.content}</p>
        <div>${this.adress.outerHTML}</div>
        <p>${this.date.toLocaleString()}</p>
      `;

      document.body.appendChild(displayEvent);

      return displayEvent
    }

  }
  
  // CREATE = Instância de Address
  const Endereco1 = new Adress(
    "Rua Maria Monteiro, 922", 
    "Cambuí", 
    13025151, 
    "Campinas", 
    "SP", 
    "Sala 5");

// implementar depois de iniciar o indexedDB
  // Endereco1.editaDados = [ // precisa ser um objeto
  //   "Rua B", 
  //   "Centro", 
  //   33333333, 
  //   "São Paulo", 
  //   "SP", 
  //   "Apartamento 101"];

  
  // Instância de Conference, passando o endereço formatado
  const Evento1 = new Conference(
    "O ensino da LIBRAS como segunda língua",
    "https://www.libras.com.br/ct__images-fixed/recursos/recursos-blog-libras.png",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    Endereco1.PegaDados, // READ
    "21/12/2024" // pesquisar/perguntar como vamos manipular datas
  );

  // Mostra o evento no DOM
  Evento1.mostar;
*/

