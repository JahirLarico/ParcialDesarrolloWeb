export class DogAge{
    dogAge: string;

    constructor(dogAge: string){
        this.validate(dogAge);
        this.dogAge = dogAge;
    }

    private validate(dogAge: string){
        if (!dogAge) throw new Error("dogAge is required")
    }
}