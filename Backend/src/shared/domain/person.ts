import { PersonAge } from "./personAge.js";
import { PersonDni } from "./personDni.js";
import { PersonId } from "./personId.js";
import { PersonLastName } from "./personLastName.js";
import { PersonName } from "./personName.js";

type personProps = {
    id?: string,
    personName: string,
    personLastName: string,
    personAge: string,
    personDni: string,
}

export class Person{
    id?: PersonId | undefined;
    personName: PersonName;
    personLastName: PersonLastName;
    personAge: PersonAge;
    personDni: PersonDni;

    constructor({id, personName, personLastName, personAge, personDni}: personProps){
        this.id = id && new PersonId(id) || undefined,
        this.personName = new PersonName(personName),
        this.personLastName = new PersonLastName(personLastName),
        this.personAge = new PersonAge(personAge),
        this.personDni = new PersonDni(personDni)
    }
}