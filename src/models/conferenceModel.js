// export class Conference {
//     #name
//     #content
//     #location
//     #date

//     constructor(name, content,location, date) {
//       this.#name = name,
//       this.#content = content,
//       this.#location = location, // ESSE CARA AQUI VAIR VIR DO ARRAY DO GET DA CLASSE ANTERIOR
//       this.#date = date;
//     }
    
//     get name () {
//       return this.#name;
//     }
    
//     set name(name) {
//       this.#name = name;
//     }
    
//     get content () {
//       return this.#content;
//     }
    
//     set content(content) {
//       this.#content = content;
//     }
    
//     get location () {
//       return this.#location;
//     }
    
//     set location(location) {
//       this.#location =location;
//     }
    
//     get date () {
//       return this.#date;
//     }
    
//     set date(date) {
//       this.#date = date;
//     }

//     get dataConference() {
//       return [this.#content, this.#date, this.#location,this.#name];
//     }

//     insertList(event) {
//       this.listConference.push(event);
//     }
//   }
 class Adress {
  #cep
  #street
  #neighborhood
  #city
  #state
  #complement

  constructor(cep, street, neighborhood, city, state, complement) {
      this.#cep = cep;
      this.#street = street;
      this.#neighborhood = neighborhood;
      this.#city = city;
      this.#state = state;
      this.#complement = complement;
  }

  get PegaDados() {
      return {
          cep: this.#cep,
          street: this.#street,
          neighborhood: this.#neighborhood,
          city: this.#city,
          state: this.#state,
          complement: this.#complement,
      };
  }
}

export class Conference extends Adress {
  #name
  #content
  #date

  constructor(name, content, location, date) {
      // Chama o construtor da classe pai (Adress) com os dados de location
      super(...location);  // location seria um array com [cep, street, neighborhood, city, state, complement]
      this.#name = name;
      this.#content = content;
      this.#date = date;
  }

  get name() {
      return this.#name;
  }

  set name(name) {
      this.#name = name;
  }

  get content() {
      return this.#content;
  }

  set content(content) {
      this.#content = content;
  }

  get date() {
      return this.#date;
  }

  set date(date) {
      this.#date = date;
  }

  // Acessando PegaDados da classe pai diretamente
  get dataConference() {
      return [this.#content, this.#date, this.PegaDados, this.#name];  // Usando PegaDados da superclasse
  }

  insertList(event) {
      this.listConference.push(event);
  }
}