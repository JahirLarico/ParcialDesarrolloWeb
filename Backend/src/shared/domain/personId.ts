export class PersonId {
    personId: string;

    constructor(personId: string){
        this.validate(personId),
        this.personId = personId
    }

    private validate(personId: string){
        if(!personId) throw new Error("personId is required");
    }
}