export class RaceId {
    raceId: string
    constructor (raceId:string){
        this.validate(raceId); 
        this.raceId = raceId;
    }

    private validate(value:string){
        if (!value) throw new Error("RaceId is required");
    }
}