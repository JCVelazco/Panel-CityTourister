import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { isNumber } from 'util';

@Component({
    selector: 'app-map-place',
    templateUrl: './GetMapModal.component.html',
})

export class GetMapModalComponent implements OnInit {

    @Input() placeInfo;
    @Input() coordinates;
    @Input() toursFromPlace;
    @Input() imageUrl;

    name: string;
    image_url: string;
    place_type: string;
    lat: number;
    lng: number;
    toursAssociated = [];

    constructor(
        public activeModal: NgbActiveModal,
    ) {}

    ngOnInit() {
        this.name = this.placeInfo.name;
        this.place_type = this.placeInfo.type;
        this.lat = Number.parseFloat(this.placeInfo.lat);
        this.lng = Number.parseFloat(this.placeInfo.lng);
        this.image_url = this.imageUrl;
        this.toursAssociated = this.toursFromPlace;
    }



}
