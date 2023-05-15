import { EventEmitter } from "@angular/core";
export class Emitters{
static authEmitter =new EventEmitter<boolean>();
static ManagerEmitter=new EventEmitter<boolean>();
static AdminEmitter=new EventEmitter<boolean>();

}