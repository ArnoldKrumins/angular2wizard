/**
 * Created by arnoldkrumins on 31/03/2016.
 */
import {Component} from 'angular2/core';

import {Steps} from './steps.component';
import {Step} from './step.component';
import {ContentOneComponent} from './contentone.component'
import {ContentTwoComponent} from './contenttwo.component'


@Component({
    selector: 'blocked-domains',
    directives: [Steps, Step, ContentOneComponent, ContentTwoComponent],
    template: `
    <div style="margin:20px;">
        <steps [buttonEvent]="buttonEventValue" >

            <step title="Select Publishers" rightButtonText="Domains" stepNumber="1" (onButtonClick)="check($event)">
                 <content-one></content-one>
            </step>

            <step title="Select Domains" leftButtonText="Publishers"  rightButtonText="Save & Confirm"  stepNumber="2" (onButtonClick)="check($event)">
                <content-two></content-two>
            </step>

            <step title="Confirm and Save" leftButtonText="Domains"  rightButtonText="Save" stepNumber="3" (onButtonClick)="check($event)">
                <content-two></content-two>
            </step>

        </steps>
    </div>

    `
})
export class BlockedDomainsComponent {

    private buttonEventValue:string;

    constructor() {}

    check(value):void{
        this.buttonEventValue = value;
        console.log(value);
    }

}
