// console.log('js connected');

function updateProductNumber(product, price, isIncreasing){
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;
    if(isIncreasing)
    {
        productNumber = parseInt(productNumber) + 1;
    }    
    else if(productNumber > 0)
    {
        productNumber = parseInt(productNumber) - 1;   
    }    
        
    productInput.value = productNumber;
    //update case total
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price;

    //calculate total
    calculateTotal();
}

function getInputValue(product)
{
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}

function calculateTotal()
{
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;

    const textAmonunt = subTotal / 10;
    const totalPrice = subTotal + textAmonunt;

    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = textAmonunt;
    document.getElementById('total-price').innerText = totalPrice;
}

//phone increase decrease event
document.getElementById('phone-plus').addEventListener('click', function(){
    // console.log('phone plus clicked');
    updateProductNumber('phone', 1219, true);
});
document.getElementById('phone-minus').addEventListener('click', function(){
    // console.log('phone plus clicked');
    updateProductNumber('phone', 1219, false);
});

//case increase decrease event
document.getElementById('case-plus').addEventListener('click', function(){
    updateProductNumber('case', 59, true);
});

document.getElementById('case-minus').addEventListener('click', function(){
    updateProductNumber('case', 59, false);
});