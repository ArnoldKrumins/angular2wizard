import {Component} from 'angular2/core';
import {DragDrop} from  '../directives/drag-drop.directive';

@Component({
    selector: 'drop-zone',
    directives:[DragDrop],
    styles:['.dropzone{margin-top:10px;height:200px;width:200px;background-color:lightcyan;border:dashed #0000AA 1px;}','.dropzone p{text-align: center;vertical-align: middle;}'],
    template: `<div (onDomainsParsed)="log($event)" drag-drop class="dropzone">
                    <p>Drop files here</p>
                </div>
                <ul>
                    <li *ngFor="#domain of domains" >{{ domain }}</li>
                </ul>
                `
})
export class DropZone {

    private domains = [];

    log(data){
        this.domains = data;
    }

}
