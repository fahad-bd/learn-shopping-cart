// console.log('js connected');

function updateCaseNumber(product, price, isIncreasing){
    const caseInput = document.getElementById(product + '-number');
    let caseNumber = caseInput.value;
    if(isIncreasing)
    {
        caseNumber = parseInt(caseNumber) + 1;
    }    
    else if(caseNumber > 0)
    {
        caseNumber = parseInt(caseNumber) - 1;   
    }    
        
    caseInput.value = caseNumber;
    //update case total
    const caseTotal = document.getElementById(product + '-total');
    caseTotal.innerText = caseNumber * price;
}

//phone increase decrease event
document.getElementById('phone-plus').addEventListener('click', function(){
    // console.log('phone plus clicked');
    updateCaseNumber('phone', 1219, true);
});
document.getElementById('phone-minus').addEventListener('click', function(){
    // console.log('phone plus clicked');
    updateCaseNumber('phone', 1219, false);
});

//case increase decrease event
document.getElementById('case-plus').addEventListener('click', function(){
    updateCaseNumber('case', 59, true);
});

document.getElementById('case-minus').addEventListener('click', function(){
    updateCaseNumber('case', 59, false);
});