import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Test {
  private boolValue=false;

  setBoolValue(value: boolean) {
    this.boolValue = value;
  }

  getBoolValue(): boolean {
    return this.boolValue;
  }
}
