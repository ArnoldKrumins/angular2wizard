import {Component} from 'angular2/core'

import {Steps} from './components/steps.component';
import {Step} from './components/step.component';
import {ContentOneComponent} from './components/contentone.component'
import {ContentTwoComponent} from './components/contenttwo.component'

@Component({
    selector: 'my-app',
    template: `
    <div style="margin:20px;">
    <steps>
      <step title="Select Publishers" rightButtonText="Domains" count="1">
        <content-one></content-one>
      </step>
      <step title="Select Domains" leftButtonText="Publishers"  rightButtonText="Save & Confitm"  count="2">
         <content-two></content-two>
       </step>
       <step title="Confirm and Save" leftButtonText="Domains"  rightButtonText="Save" count="3">
         <content-two></content-two>
       </step>
     </steps>
    </div>
  `,
    directives: [Steps, Step,ContentOneComponent,ContentTwoComponent]
})
export class App {
    constructor() {

    }
}


