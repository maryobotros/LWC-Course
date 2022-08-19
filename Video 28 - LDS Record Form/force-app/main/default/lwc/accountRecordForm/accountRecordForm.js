import { LightningElement, track } from 'lwc';

import NAME_FIELD from '@salesforce/schema/Account.Name';
import PHONE_FIELD from '@salesforce/schema/Account.Phone';
import WEBSITE_FIELD from '@salesforce/schema/Account.Website';

export default class AccountRecordForm extends LightningElement {
    @track recordId;
    fieldsArray = [NAME_FIELD, PHONE_FIELD, WEBSITE_FIELD];

    successHandler(event){
        this.recordId = event.detail.id;
    }
}

// The video shows 2 ways: how to do this normally and how to give a hard reference to the fields (this is the preferred method)