import { LightningElement, track } from 'lwc';

export default class HelloWorld extends LightningElement {
    @track dynamicGreeting;

    greetingChangeHandler(event){
        this.dynamicGreeting = event.target.value;
    }
}