import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LaunchService {

  getLatestLaunch() {
    return {id: 1, rakieta: "falcon9"}
  }


  constructor() { }
}
