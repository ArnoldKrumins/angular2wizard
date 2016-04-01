/**
 * Created by arnoldkrumins on 31/03/2016.
 */
import {Component} from 'angular2/core';

import {Steps} from './steps.component';
import {Step} from './step.component';
import {ContentOneComponent} from './contentone.component'
import {ContentTwoComponent} from './contenttwo.component'


const enum StepContent {
    Publishers = 0,
    Domains,
    Save
}

@Component({
    selector: 'blocked-domains',
    directives: [Steps, Step, ContentOneComponent, ContentTwoComponent],
    template: `
   
    <div style="margin:20px;">
         <h4>Block Domains</h4>
        <steps [buttonEvent]="buttonEventValue" >

            <step title="Select Publishers" stepNumber="1">
                 <content-one></content-one>
                 <div class="button-footer">
                    <button class="btn btn-info" (click)="setContent(1)">Domains</button>
                 </div> 
            </step>

            <step title="Select Domains"  stepNumber="2" >
                <content-two></content-two>
                <div class="button-footer">
                  <button class="btn btn-info pull-left" (click)="setContent(0)">Publishers</button>
                  <button class="btn btn-info pull-right" (click)="setContent(2)">Save & Confirm</button>
                </div>  
            </step>

            <step title="Confirm and Save" stepNumber="3">
                <content-two></content-two>
                <div class="button-footer">    
                    <button class="btn btn-info pull-left" (click)="setContent(1)">Back to Domains</button>  
                    <button class="btn btn-success pull-right">Save</button>  
                </div>
            </step>

        </steps>
    </div>

    `
})

export class BlockedDomainsComponent {

    private buttonEventValue:number;

    constructor() {}

    setContent(value){
        this.buttonEventValue = value;
    }

}

