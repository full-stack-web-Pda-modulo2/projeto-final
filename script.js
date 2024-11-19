let dataBase = [

]

class User {
    constructor(name, email, password){
        this.name = name,
        this.email = email,
        this.password = password
    }

    registerUser(){
        dataBase.push();
    }

    editUser() {
        
    }

    deleteUser() {
        try {
            const userDelete = dataBase.findIndex(user => user.email === email);
            if(!userDelete) {
                throw new Error("Usuário não encontrado!");
            }
            dataBase.pop();
        } catch (error) {
            console.error();
        }
     
    }

    userLogin() {
        
    }
}

class Suggestion {
    constructor(user, content) {
        this.user = user,
        this.content = content
    }

    createSuggestion() {
        
    }

    deleteSuggestion() {

    }
}

