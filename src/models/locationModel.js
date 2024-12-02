export class location {
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
    get PegaDados(){
      return [this.street, this.neighborhood, this.cep, this.city, this.state, this.complement]
    }
    //getters e setters do location
    get cep(){
      return this.#cep;
    }
    set cep(cep) {
      try {
        // Remove caracteres não numéricos
        const cepNumerico = cep.replace(/\D/g, '');
        if (cepNumerico.length !== 8) {
          throw new Error("CEP inválido. Deve conter 8 dígitos numéricos.");
      }
        
      } catch (error) {
        
      }
      this.cep = cep;
    }

    get street(){
      return this.#street;
    }
    set street(street) {
      this.street = street;
    }

    get neighborhood(){
      return this.#neighborhood;
    }
    set neighborhood(neighborhood) {
      this.#neighborhood = neighborhood;
    }

    get city(){
      return this.#city;
    }
    set city(city) {
      this.city = city;
    }

    get state(){
      return this.#state;
    }
    set state(state) {
      this.state = state;
    }

    get complement(){
      return this.#complement;
    }
    set complement(complement) {
      this.#complement = complement;
    }
  }