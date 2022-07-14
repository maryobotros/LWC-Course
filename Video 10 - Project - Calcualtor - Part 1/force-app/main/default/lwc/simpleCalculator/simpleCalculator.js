import { LightningElement, track } from 'lwc';

export default class SimpleCalculator extends LightningElement {
    @track currentResult;
    
    firstNumber;
    secondNumber;
    
    numberChangeHandler(event){
        const inputBoxName = event.target.name;

        if(inputBoxName === "firstNumber"){
            this.firstNumber = event.target.value;
        }
        else if(inputBoxName === "secondNumber"){
            this.secondNumber = event.target.value;
        }
    }

    addHandler(){
        const firstNum = parseInt(this.firstNumber);
        const secondNum = parseInt(this.secondNumber);
        this.currentResult = "Result of " + firstNum + " + " + secondNum + " is " + (firstNum + secondNum);
    }

    subHandler(){
        const firstNum = parseInt(this.firstNumber);
        const secondNum = parseInt(this.secondNumber);

        this.currentResult = "Result of " + firstNum + " - " + secondNum + " is " + (firstNum - secondNum);
    }

    multiplyHandler(){
        const firstNum = parseInt(this.firstNumber);
        const secondNum = parseInt(this.secondNumber);

        this.currentResult = "Result of " + firstNum + " x " + secondNum + " is " + (firstNum * secondNum);
    }

    divisionHandler(){
        const firstNum = parseInt(this.firstNumber);
        const secondNum = parseInt(this.secondNumber);

        this.currentResult = "Result of " + firstNum + " / " + secondNum + " is " + (firstNum / secondNum);
    }
}