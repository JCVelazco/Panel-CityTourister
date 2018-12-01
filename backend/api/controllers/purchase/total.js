module.exports = async (req, res) => {
    const PurchaseId = req.param('id');

    
    
    let currentPurchase = await Purchase.findOne({id: PurchaseId}).populate('tickets');

    if(!currentPurchase) 
    return res.json({info: 'Purchase notFound'});

    if(currentPurchase.tickets.length)

    var sumOfTickets = 0;
    for(let actualTicket of currentPurchase.tickets){
        actualTicketPrice =  await Price.findOne({id: actualTicket.price_id});
        sumOfTickets = sumOfTickets + actualTicketPrice.priceAmount;
    }


    var company =  await Company.findOne({id: currentPurchase.company_id});

    var sumOfTicketsIva = sumOfTickets + (sumOfTickets*company.iva);

    var updatedPurchase = await Purchase.update({id: PurchaseId})
    .set({
      sub_total: sumOfTickets,
      total: sumOfTicketsIva,
    })
    .intercept((err)=>{
      err.message = 'An error has ocurred: '+err.message;
      return err;
     })
    .fetch();

    return res.json({total: sumOfTicketsIva, subtotal: sumOfTickets});
    
    

  }