import {Component} from 'angular2/core'

import {BlockedDomainsComponent} from './components/blockeddomains.component';


@Component({
    selector: 'my-app',
    directives: [BlockedDomainsComponent],
    template: `
        <blocked-domains></blocked-domains>
  `

})
export class App {

}


