/**
 * Created by arnoldkrumins on 30/03/2016.
 */
import { Component,Input, ContentChildren, QueryList, AfterContentInit } from 'angular2/core';
import { Step } from './step.component';
import {SpinnerComponent} from '../directives/spinner.directive';


@Component({
    selector: 'steps',
    directives:[SpinnerComponent],
    template:`
    <ol class="list-unstyled list-inline wizardsteps">
      <li class="text-center wizardsteps-step" *ngFor="#step of steps"  [class.current]="step.active" [class.disabled]="step.disabled">
        <span class="fa-stack fa-lg">
            <i class="fa fa-stack-2x fa-circle-thin"><span class="step-number">{{ step.stepNumber }}</span></i>
            <div class="wizardsteps-step-text">{{ step.title }}</div>
        </span>
      </li>
    </ol>
    <ng-content></ng-content>
    <spinner [isRunning]="busy"></spinner>

  `
})
export class Steps implements AfterContentInit {

    @ContentChildren(Step) steps: QueryList<Step>;

    @Input() set buttonEvent(buttonEvent:number){

        if(buttonEvent === undefined) return;

        this.steps.toArray().forEach(step => step.active = false);
        let step = this.steps.toArray()[buttonEvent];
        step.active = true;
        step.disabled= false;

    }

    private busy:boolean = true;
    
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
        step.disabled = false;
    }



}
