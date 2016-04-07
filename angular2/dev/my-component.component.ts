import {Component} from 'angular2/core';

@Component({

    selector:'my-component',
    template: `
    <h1>Hi, I'am {{name}} and this is my first Angular 2 component!<span [class.is-awesome] = "inputElement.value === 'yes' " >It's so awesome!</span></h1>
    <br>
    Is it awesome?
    <input type ="text" #inputElement (keyup)="3">

    <button [class.button-display-stauts] = "inputElement.value === 'yes' "> Only enabled if "yes" was entered. </button>
    `,

    styleUrls: ['src/css/mycomponent.css']

    })

export class MyComponentComponent {
    name = 'Max'

}



