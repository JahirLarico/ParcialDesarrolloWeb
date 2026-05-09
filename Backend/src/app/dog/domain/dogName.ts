export class DogName{
    dogName: string;

    constructor(dogName: string){
        this.validate(dogName);
        this.dogName = dogName;    
    }

    private validate(dogName: string){
        if(!dogName) throw new Error("dogName is required");
    }
}