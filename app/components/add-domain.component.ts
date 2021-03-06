/**
 * Created by arnoldkrumins on 01/04/2016.
 */
import {Component,EventEmitter,Output} from 'angular2/core';
import {DragDrop} from '../directives/drag-drop.directive';

@Component({
    selector: 'add-domain',
    directives:[DragDrop],
    template: `
    <div class="form-inline">
             <input #addedDomain type="text" class="form-control"  placeholder="Domain Name"><button (click)="addDomain(addedDomain.value)" class="btn btn-success">Add Domain</button>

                <div drag-drop  (onDomainsParsed)="getDomains($event)" class="drop-zone">
                    <p>Drop CSV file here</p>
                    <i class="fa fa-download"></i>
                </div>


             <div class="domains">
                <ul>
                 <li *ngFor="#domain of domains">
                    <div>{{ domain }}</div>
                 </li>

                </ul>
             </div>
    </div>
    `
})
export class AddDomainComponent {

    @Output() onDomainsAvailable: EventEmitter<any> = new EventEmitter();

    private domains:Array<string> = [];

    constructor(){
        this.domains = new Array<string>();
    }

    private emitEvent(){
        this.onDomainsAvailable.emit(this.domains);
    }

    getDomains(data):void{

        _.forEach(data, d => {
            if(!_.some(this.domains,domain => domain === d) || undefined){
            this.domains.push(d)
            }
        });
        this.emitEvent();
    }

    addDomain(newdomain):void{

        if(_.some(this.domains,domain => domain === newdomain)) return;
        this.domains.push(newdomain);
        this.emitEvent();
    }
}

