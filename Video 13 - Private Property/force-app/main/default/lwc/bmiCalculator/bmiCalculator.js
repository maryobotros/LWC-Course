import { LightningElement, track } from 'lwc';

export default class BmiCalculator extends LightningElement {
    cardTitle = "BMI Calculator";

    text;

    textHandler(event){
        this.text = event.target.value;
    }

    changePrivatePropertyValue(){
        this.cardTitle = this.text;
        console.log("Value: " + this.cardTitle);
    }
}