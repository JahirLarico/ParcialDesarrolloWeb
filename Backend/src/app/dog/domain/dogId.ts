export class DogId {
    dogId: string;

    constructor(dogId:string){
        this.validate(dogId);
        this.dogId = dogId;
    }

    private validate(dogId: string){
        if (!dogId) throw new Error("dogId is required");
    }
}