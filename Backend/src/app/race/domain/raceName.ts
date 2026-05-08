export class RaceName {
    raceName: string;

    constructor(raceName:string){
        this.validate(raceName);
        this.raceName = raceName
    }

    private validate(raceName:string){
        if(!raceName) throw new Error("raceName is required")
    }

}