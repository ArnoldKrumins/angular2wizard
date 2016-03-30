/**
 * Created by arnoldkrumins on 30/03/2016.
 */
import { Component, Input } from 'angular2/core';

@Component({
    selector: 'tab',
    styles: [`
    .pane{
      padding: 1em;
    }
  `],
    template: `
    <div [hidden]="!active" class="pane">
      <ng-content></ng-content>
      <button class="btn btn-success">{{ next }}</button>
    </div>

  `
})
export class Tab {
    @Input('tabButton') next: string;
    @Input('tabTitle') title: string;
    @Input() active = false;
}