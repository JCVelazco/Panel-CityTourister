import { Component, OnInit, Input } from '@angular/core';
import { PurchaseService } from '../../services/purchase.service';
import {NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AboutComponent } from '../../modals/about/about.component';

@Component({
  selector: 'app-about',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.scss']
})
export class PurchaseComponent implements OnInit {

  arrayOfPurchases = [];

  constructor(
    public _purchaseService: PurchaseService,
    public _modalService: NgbModal) { }

  ngOnInit() {
    this.getPurchases();
  }

  //this can be better
  getPurchases() {
    this._purchaseService.getPurchases()
    .subscribe(res => {
      this.arrayOfPurchases = res;
      this.getTotals(this.arrayOfPurchases);
    });
  }

  getTotals(arrayOfPurchases){
    for(let purchase of arrayOfPurchases){
    this._purchaseService.getTotal(purchase.id).subscribe();
    }
  }

  displayTicketsInfo(id) {
    const modalRef = this._modalService.open(PurchaseInfoComponent);
    modalRef.result.then( res => {
      this.getPurchases();
    }).catch( err => {
      console.log('NO SE PUEDE ABRIR MODAL');
    });
    modalRef.componentInstance.purchaseId = id;
  }

}

@Component({
  selector: 'app-about',
  templateUrl: './info.component.html'
})

export class PurchaseInfoComponent implements OnInit {

  public purchase: any;

  public kidTickets = [];
  public adultTickets = [];
  public oldTickets = [];

  public money: any;

  @Input() purchaseId: number;

  constructor(
    private _purchaseService: PurchaseService,
    public activeModal: NgbActiveModal){ }

  ngOnInit(){
    this.getTotals(this.purchaseId);

    this._purchaseService.getPurchaseById(this.purchaseId)
    .subscribe(res => {
      this.purchase = res;
      this.getGeneralTicketInfo(this.purchase.tickets);
    });
  }

  getTotals(id){
    this._purchaseService.getTotal(id).subscribe(res => {this.money = res;});
  }

  getGeneralTicketInfo(tickets){
    for(let ticket of tickets){
      if(ticket.id==1)
        this.kidTickets.push(ticket);
      if(ticket.id==2)
        this.adultTickets.push(ticket);
      if(ticket.id==3)
        this.oldTickets.push(ticket);
    }
  }
}
