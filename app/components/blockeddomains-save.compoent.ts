/**
 * Created by arnoldkrumins on 02/04/2016.
 */
import {Component,Input} from 'angular2/core';

@Component({
    selector: 'save-domains',
    template: `<div>
                 <h5>block the following domains...</h5>

                  <div class="domains">
                    <ul>
                        <li *ngFor="#domain of domains">
                            <div>{{ domain }}</div>
                        </li>
                    </ul>
                  </div>

               </div>`
})
export class SaveDomainsComponent {

    private domains = []

    @Input() publishers = [];
    @Input()  set domainsToBlock(domains:any){
        this.domains = domains;
    }
}
