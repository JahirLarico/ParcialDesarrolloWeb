export class PersonDni{
    personDni:string
    
    constructor(personDni:string){
        this.validate(personDni),
        this.personDni = personDni
    }

    private validate(personDni:string){
        if(!personDni) throw new Error("personDni is required")
        if(personDni.length < 8 || personDni.length > 8) throw new Error("personDni must be at least 8 long and can't be longer")
    }
}