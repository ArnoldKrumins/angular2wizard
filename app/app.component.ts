import {Component} from 'angular2/core'

import {Tabs} from './components/tabs';
import {Tab} from './components/tab';
import {ContentOneComponent} from './components/contentone.component'
import {ContentTwoComponent} from './components/contenttwo.component'

@Component({
    selector: 'my-app',
    template: `
    <tabs>
      <tab tabTitle="'Tab 1'" tabButton="Next">
        <content-one></content-one>
      </tab>
      <tab tabTitle="Tab 2"  tabButton="Previous" >
         <content-two></content-two>
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


