import { LightningElement, api, wire } from 'lwc';
import {fireEvent} from 'c/pubsub';
import {CurrentPageReference} from 'Lightning/navigation'; 

export default class MeetingRoom extends LightningElement {
    @api meetingRoomInfo = {roomName:'A-01', roomCapacity:'12'}

    @api showRoomInfo = false;

    @wire(CurrentPageReference) pageReference;

    tileClickHandler(){
        const tileClicked = new CustomEvent("tileclick", {detail : this.meetingRoomInfo});

        this.dispatchEvent(tileClicked);
        fireEvent(this.pageReference, 'pubsubtileclick', this.meetingRoomInfo);
    }
}