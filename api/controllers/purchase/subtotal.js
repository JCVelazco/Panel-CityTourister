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


    return res.json(sumOfTickets);
    
    

  }