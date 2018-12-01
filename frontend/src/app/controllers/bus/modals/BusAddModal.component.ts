import { Component, Output, EventEmitter, Input } from '@angular/core';
import { BusService } from '../../../services/bus.service';
import { TourService } from '../../../services/tour.service';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { CustomValidators } from '../../../custom-validators'
import { unescapeIdentifier } from '@angular/compiler';

declare const $: any;

@Component({
    templateUrl: './BusAddModal.component.html',
})

export class NgbdModalAddBus{ 
    
    public currentBus: any[] = [undefined, undefined,undefined];
    public allTours: any[];

    constructor(
        private _busService: BusService,
        public activeModal: NgbActiveModal,
        private _TourService: TourService) { }

    closeModal() {
        this.activeModal.close('Modal Closed');
    }
    
    setTour(tour) {
        if(this.currentBus[2]){
            this.currentBus[2] = tour;
        }
    }

    addBus() {
        if (this.currentBus[0].length > 3) {
            this._busService.addBus(
                this.currentBus[0],
                this.currentBus[1],
                this.currentBus[2].id)
            .subscribe(res => {
                this.showNotification({
                    info: 'Autobus agregado correctamente',
                    color: 'success'
                }, 'top', 'right');
            }, err => {
                this.showNotification({
                    info: 'Ha habido un error',
                    color: 'danger'
                }, 'top', 'right');
            });
        }
    }
        
    ngOnInit() {
        this.getTours();
    }

    getTours(){
        this._TourService.getTours().subscribe(res => {
            this.allTours = res;
        });
    }
        
    showNotification(data, from, align){
        $.notify({
            message: data.info
        },{
            type: data.color,
            timer: 1000,
            placement: {
                from: from,
                align: align
            },
            template: `<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" role="alert">
            <button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>
            <span data-notify="icon"></span>
            <span data-notify="message">{2}</span>
            <div class="progress" data-notify="progressbar">
            <div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>
            </div>
            </div>`,
            onShow: ()=> {
                this.closeModal();
            }
        });
    }
}
    
    