export class PersonName{
    personName:string
    
    constructor(personName:string){
        this.validate(personName),
        this.personName = personName
    }

    private validate(personName:string){
        if(!personName) throw new Error("personName is required")
    }
}