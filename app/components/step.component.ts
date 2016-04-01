/**
 * Created by arnoldkrumins on 30/03/2016.
 */
import { Component, Input,Output,EventEmitter } from 'angular2/core';

@Component({
    selector: 'step',
    styles: [`.pane{padding: 1em;}`,`ul li{display: inline-flex;}`],
    template: `
    <div [hidden]="!active" class="pane">
      <ng-content></ng-content>
     </div>
  `
})
export class Step {

    @Output() onButtonClick: EventEmitter<any> = new EventEmitter();

    @Input() title: string;
    @Input() stepNumber: number;

    @Input() active = false;
    @Input() disabled = true;

}