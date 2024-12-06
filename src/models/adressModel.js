// export class Adress {
//     #cep
//     #street
//     #neighborhood
//     #city
//     #state
//     #complement
//     constructor(cep, street, neighborhood, city, state, complement) {
//       this.#cep = cep;
//       this.#street = street;
//       this.#neighborhood = neighborhood;
//       this.#city = city;
//       this.#state = state;
//       this.#complement = complement;
//     }
//     get PegaDados(){
//       return [this.street, this.neighborhood, this.cep, this.city, this.state, this.complement]
//     }
//   }


export class Adress {
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