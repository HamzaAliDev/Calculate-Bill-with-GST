
function getprice(inputId){
    let input = document.getElementById(inputId).value

    return parseInt(input)
}

function calculation (){
    let price1 = getprice("priceItem1")
    let price2 = getprice("priceItem2")
    let price3 = getprice("priceItem3")
    let price4 = getprice("priceItem4")

    let total = price1 + price2 + price3 + price4
    console.log(total);

    let tax = getprice("tax")
    let taxcalculated = (total / 100 ) * tax
    
    console.log(taxcalculated);

    let totalCost = total + taxcalculated

    console.log(totalCost);
    // alert("Total Cost = " , totalCost)

    document.write("Total Bill is : ",totalCost)
}