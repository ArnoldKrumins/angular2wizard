/**
 * Created by arnoldkrumins on 30/03/2016.
 */
import { Component, ContentChildren, QueryList, AfterContentInit } from 'angular2/core';
import { Step } from './step.component';

@Component({
    selector: 'steps',
    template:`
    <ul class="nav nav-tabs">
      <li *ngFor="#step of steps" (click)="selectStep(step)" [class.active]="step.active">
        <a href="#">{{ step.title }}</a>
      </li>
    </ul>
    <ng-content></ng-content>
  `
})
export class Steps implements AfterContentInit {

    @ContentChildren(Step) steps: QueryList<Step>;

    // contentChildren are set
    ngAfterContentInit() {
        // get all active tabs
        let activeTabs = this.steps.filter((tab)=>tab.active);

        // if there is no active tab set, activate the first
        if(activeTabs.length === 0) {
            this.selectStep(this.steps.first);
        }
    }

    selectStep(step: Step){
        // deactivate all tabs
        this.steps.toArray().forEach(step => step.active = false);

        // activate the tab the user has clicked on.
        step.active = true;
    }

}
