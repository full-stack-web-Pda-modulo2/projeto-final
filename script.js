class Adress {
    constructor(street, neighborhood, cep, city, state, complement) {
      this.street = street;
      this.neighborhood = neighborhood;
      this.cep = cep;
      this.city = city;
      this.state = state;
      this.complement = complement;
    }
    get PegaDados(){
      return [this.street, this.neighborhood, this.cep, this.city, this.state, this.complement]
    }
  }
  class Conference {
    constructor(title, img, content, adress, date) {
      (this.title = title),
        (this.img = img),
        (this.content = content),
        (this.adress = adress), // ESSE CARA AQUI VAIR VIR DO ARRAY DO GET DA CLASSE ANTERIOR
        (this.date = date);
    }
    mostar(){
      return this.title, this.img, this.content, this.adress, this.date
    }
  }
  //INSTÂNCIA - OBJ
  const Endereco1 = new Adress("", "", "", "", "", "")
  //GET - ARRAY
  Endereco1.PegaDados
  // INSTÂNCIA - OBJ                       // ARRAY
  const Evento1 = new Conference("","","",Endereco1.PegaDados,"")