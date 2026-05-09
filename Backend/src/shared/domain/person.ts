import { PersonAge } from "./personAge.js";
import { PersonCellphone } from "./personCellphone.js";
import { PersonDni } from "./personDni.js";
import { PersonEmail } from "./personEmail.js";
import { PersonId } from "./personId.js";
import { PersonLastName } from "./personLastName.js";
import { PersonName } from "./personName.js";

type personProps = {
    id?: string | undefined,
    personEmail?: string | undefined,
    personName: string,
    personLastName: string,
    personAge: string,
    personDni: string,
    personCellphone: string
}

export class Person{
    id?: PersonId | undefined;
    personEmail?: PersonEmail | undefined;
    personName: PersonName;
    personLastName: PersonLastName;
    personAge: PersonAge;
    personDni: PersonDni;
    personCellphone: PersonCellphone;

    constructor({id, personEmail, personName, personLastName, personAge, personDni, personCellphone}: personProps){
        this.id = id && new PersonId(id) || undefined,
        this.personEmail = personEmail && new PersonEmail(personEmail) || undefined,
        this.personName = new PersonName(personName),
        this.personLastName = new PersonLastName(personLastName),
        this.personAge = new PersonAge(personAge),
        this.personDni = new PersonDni(personDni),
        this.personCellphone = new PersonCellphone(personCellphone)
    }
}