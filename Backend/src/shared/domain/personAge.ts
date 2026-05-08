export class PersonAge{
    personAge:string
    
    constructor(personAge:string){
        this.validate(personAge),
        this.personAge = personAge
    }

    private validate(personAge:string){
        if(!personAge) throw new Error("personAge is required")
    }
}