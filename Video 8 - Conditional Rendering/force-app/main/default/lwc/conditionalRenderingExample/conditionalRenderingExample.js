import { LightningElement, track } from 'lwc';

export default class ConditionalRenderingExample extends LightningElement {
    @track showMessage = false;

    showMessageHandler(event){
        this.showMessage = event.target.checked;
    }
}