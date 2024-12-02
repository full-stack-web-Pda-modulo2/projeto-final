export class location {
    constructor(cep, street, neighborhood, city, state, complement) {
      this.cep = cep;
      this.street = street;
      this.neighborhood = neighborhood;
      this.city = city;
      this.state = state;
      this.complement = complement;
    }
    get PegaDados(){
      return [this.street, this.neighborhood, this.cep, this.city, this.state, this.complement]
    }
  }