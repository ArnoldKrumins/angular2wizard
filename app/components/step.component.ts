/**
 * Created by arnoldkrumins on 30/03/2016.
 */
import { Component, Input } from 'angular2/core';

@Component({
    selector: 'step',
    styles: [`
    .pane{
      padding: 1em;
    }
  `],
    template: `
    <div [hidden]="!active" class="pane">
      <ng-content></ng-content>
    </div>
  `
})
export class Step {
    @Input('stepTitle') title: string;
    @Input() active = false;
}