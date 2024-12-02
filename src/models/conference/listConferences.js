//Classe de lista de conferencia
export class ListConferences {
    constructor() {
        this.ListConferences = [];
    }

    //esse metodo adiciona uma conferencia no objeto de lista de conferencia
    add(conference) {
        this.ListConferences.push(conference);
    }
}