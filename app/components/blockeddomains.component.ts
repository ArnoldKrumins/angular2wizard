/**
 * Created by arnoldkrumins on 31/03/2016.
 */
import {Component} from 'angular2/core';

import {Steps} from './steps.component';
import {Step} from './step.component';
import {AddDomainComponent} from './add-domain.component'
import {SaveDomainsComponent} from './blockeddomains-save.compoent';

const enum StepContent {
    Publishers = 0,
    Domains,
    Save
}

@Component({
    selector: 'blocked-domains',
    directives: [Steps, Step, AddDomainComponent,SaveDomainsComponent],
    template: `
   
    <div style="margin:20px;">
         <h4>Block Domains</h4>
        <steps [buttonEvent]="buttonEventValue" >

            <step title="Select Publishers" stepNumber="1">
                 <h4>Publisher Component here...</h4>
                 <div class="button-footer">
                    <button class="btn btn-info" (click)="setContent(1)">Domains</button>
                 </div> 
            </step>

            <step title="Select Domains"  stepNumber="2" >

                <add-domain (onDomainsAvailable)="getDomains($event)"></add-domain>

                <div class="button-footer">
                  <button class="btn btn-info pull-left" (click)="setContent(0)">Publishers</button>
                  <button class="btn btn-info pull-right" [disabled]="enableButton()" (click)="setContent(2)">Save & Confirm</button>
                </div>  
            </step>

            <step title="Confirm and Save" stepNumber="3">

               <save-domains [domainsToBlock]="domains"></save-domains>

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

    private domains = [];

    private buttonEventValue:number;

    constructor() {}

    enableButton():boolean{
        return this.domains.length === 0 ? true : false;
    }

    getDomains(domains):void{
        this.domains = domains;
    }

    setContent(value):void {
        this.buttonEventValue = value;
    }

}

