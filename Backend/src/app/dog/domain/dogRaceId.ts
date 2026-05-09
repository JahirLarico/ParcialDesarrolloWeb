export class DogRaceId{
    dogRaceId: string;

    constructor(dogRaceId: string){
        this.validate(dogRaceId);
        this.dogRaceId = dogRaceId;
    }

    private validate(dogRaceId: string) {
        if(!dogRaceId) throw new Error("dogRaceId is required");
    }
}