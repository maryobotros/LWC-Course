import { LightningElement, track, api } from 'lwc';

export default class PublicMethodChild extends LightningElement {
    @track value = ["red"];

    options = [
        { label: "Red Marker", value: "red"},
        { label: "Blue Marker", value: "blue"},
        { label: "Green Marker", value: "green"},
        { label: "Black Marker", value: "black"},
    ];

    @api selectCheckbox(checkboxValue){
        let selectedCheckbox;
        
        for(let i = 0; i < this.options.length; i ++){
            if(this.options[i].value === checkboxValue){
                selectedCheckbox = this.options[i].value;
            }
        }

        if(selectedCheckbox){
            this.value = selectedCheckbox;
            return "Successfully checked";
        }
        else{
            return "No checkbox found"
        }
    }

}