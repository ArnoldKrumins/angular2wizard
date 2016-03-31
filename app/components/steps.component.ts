/**
 * Created by arnoldkrumins on 30/03/2016.
 */
import { Component,Input, ContentChildren, QueryList, AfterContentInit } from 'angular2/core';
import { Step } from './step.component';

@Component({
    selector: 'steps',
    template:`{{ buttonPressed }}
    <ol class="list-unstyled list-inline wizardsteps">
      <li class="text-center wizardsteps-step" *ngFor="#step of steps" (click)="selectStep(step)" [class.current]="step.active" [class.disabled]="!step.active">
        <span class="fa-stack fa-lg">
            <i class="fa fa-stack-2x fa-circle-thin">{{ step.count }}</i>
            <div class="wizardsteps-step-text">{{ step.title }}</div>
        </span>
      </li>
    </ol>
    <ng-content></ng-content>
  `
})
export class Steps implements AfterContentInit {

    @Input() buttonPressed:string;

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
