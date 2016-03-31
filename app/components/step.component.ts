/**
 * Created by arnoldkrumins on 30/03/2016.
 */
import { Component, Input,AfterContentInit } from 'angular2/core';

@Component({
    selector: 'step',
    styles: [`.pane{padding: 1em;}`,`ul li{display: inline-flex;}`],
    template: `
    <div [hidden]="!active" class="pane">
      <ng-content></ng-content>
      <ul>
         <li><div [hidden]="showLeftButton"><button class="btn btn-default">{{ leftButtonText }}</button></div></li>
         <li><div [hidden]="showRightButton"><button class="btn btn-default">{{ rightButtonText }}</button></div></li>
      </ul>
     </div>
  `
})
export class Step implements AfterContentInit {

    @Input() title: string;
    @Input() count: number;
    @Input() leftButtonText: string;
    @Input() rightButtonText: string;
    @Input() active = false;

    private showLeftButton = false;
    private showRightButton = false;



    ngAfterContentInit(){
        this.showLeftButton =  this.leftButtonText === undefined ? true : false;
        this.showRightButton =  this.rightButtonText === undefined ? true : false;
    }


    constructor(){

    }


}