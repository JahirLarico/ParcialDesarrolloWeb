import { Injectable } from '@angular/core';
import { env } from '../enviroment/enviroment';

@Injectable({
  providedIn: 'root',
})
export class Dog {
  async getDogs(){
    const response = await fetch(env.BASE_URL + 'dog/getAll')
    if (response.status != 200) throw new Error("Ha ocurrido un problema");

    const data = await response.json();

    return data;
  }

}
