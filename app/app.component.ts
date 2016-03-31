import {Component} from 'angular2/core'

import {Steps} from './components/steps.component';
import {Step} from './components/step.component';
import {ContentOneComponent} from './components/contentone.component'
import {ContentTwoComponent} from './components/contenttwo.component'

@Component({
    selector: 'my-app',
    template: `
    <steps>
      <step stepTitle="Select Publishers">
        <content-one></content-one>
         <button class="btn btn-success">NEXT</button>
      </step>
      <step stepTitle="Select Domains">
         <content-two></content-two>
          <button class="btn btn-success">NEXT...</button>
       </step>
       <step stepTitle="Confirm and Save">
         <content-two></content-two>
          <button class="btn btn-success">PREVIOUS</button>
         
       </step>
    </steps>
  `,
    directives: [Steps, Step,ContentOneComponent,ContentTwoComponent]
})
export class App {
    constructor() {
        
    }
}


