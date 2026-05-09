export class PersonCellphone{
    personCellphone: string;

    constructor(personCellphone: string){
        this.validate(personCellphone);
        this.personCellphone = personCellphone;
    }

    private validate(personCellphone: string){
        if (!personCellphone) throw new Error("personCellphone is required");
    }
}