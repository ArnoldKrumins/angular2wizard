import {Component} from 'angular2/core'

import {Tabs} from './components/tabs';
import {Tab} from './components/tab';
import {ContentOneComponent} from './components/contentone.component'
import {ContentTwoComponent} from './components/contenttwo.component'

@Component({
    selector: 'my-app',
    template: `
    <tabs>
      <tab [tabTitle]="'Tab 1'">
        <content-one></content-one>
         <button class="btn btn-success">Next</button>
      </tab>
      <tab tabTitle="Tab 2">
         <content-two></content-two>
          <button class="btn btn-success">Back</button>
       </tab>
    </tabs>
  `,
    directives: [Tabs, Tab,ContentOneComponent,ContentTwoComponent]
})
export class App {
    constructor() {
        //this.name = 'Angular2'
    }
}


