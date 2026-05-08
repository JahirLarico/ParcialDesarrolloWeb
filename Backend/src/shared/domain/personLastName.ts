export class PersonLastName{
    personLastName:string
    
    constructor(personLastName:string){
        this.validate(personLastName),
        this.personLastName = personLastName
    }

    private validate(personLastName:string){
        if(!personLastName) throw new Error("personLastName is required")
    }
}