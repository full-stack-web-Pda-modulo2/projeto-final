import {location} from "../locationModel";
export class Conference {
    #title
    #img
    #content
    #location
    #date

    constructor(title, img, content,location, date) {
      this.#title = title,
      this.#img = img,
      this.#content = content,
      this.#location = location, // ESSE CARA AQUI VAIR VIR DO ARRAY DO GET DA CLASSE ANTERIOR
      this.#date = date;
    }
    get title () {
      return this.#title;
    }
    
    set title(title) {
      this.#title = title;
    }

    get img () {
      return this.#img;
    }
    
    set img(img) {
      this.#img = img;
    }
    
    get content () {
      return this.#content;
    }
    
    set content(content) {
      this.#content = content;
    }
    
    get location () {
      return this.#location;
    }
    
    set location(location) {
      this.#location =location;
    }
    
    get date () {
      return this.#date;
    }
    
    set date(date) {
      this.#date = date;
    }
  }
  //INSTÂNCIA - OBJ
  const Endereco1 = newlocation("", "", "", "", "", "")
  //GET - ARRAY
  Endereco1.PegaDados
  // INSTÂNCIA - OBJ                       // ARRAY
  const Evento1 = new Conference("","","",Endereco1.PegaDados,"")
