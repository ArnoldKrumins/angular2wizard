import {Directive, ElementRef, EventEmitter} from 'angular2/core';

@Directive({
    selector: '[drag-drop]',
    outputs: ['onDomainsParsed']
})
export class DragDrop {

    private domains: Array<string>;
    private onDomainsParsed: EventEmitter<any> = new EventEmitter();


    constructor(public el: ElementRef) {

        this.domains = new Array<string>();
        this.initEvents();
    }

    initEvents(): void {
        this.el.nativeElement.addEventListener('drop', (e) => {
            e.stopPropagation();
            e.preventDefault();

            let dt = e.dataTransfer;
            let files = dt.files;

            let fileReader = new FileReader();

            if (files.length) {

                fileReader.readAsText(files[0]);
                fileReader.onloadend = () => {

                    _.forEach(fileReader.result.split(','), (domain)=>{
                        this.domains.push(domain)
                    });
                    console.log(this.domains[0]);
                }

                this.onDomainsParsed.emit(this.domains);
            }


        }, false);

        this.el.nativeElement.addEventListener('dragenter', (e) => {
            e.stopPropagation();
            e.preventDefault();
        }, false);

        this.el.nativeElement.addEventListener('dragover', (e) => {
            e.stopPropagation();
            e.preventDefault();
        }, false);
    }
}
