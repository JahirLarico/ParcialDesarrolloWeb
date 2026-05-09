export class PersonEmail{
    personEmail: string

    constructor(personEmail: string){
        this.validate(personEmail);
        this.personEmail = personEmail;
    }

    private validate(personEmail: string){
        if (!personEmail) throw new Error("personEmail id required");
    }
}