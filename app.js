// console.log('js connected');

function updateCaseNumber(isIncreasing){
    const caseInput = document.getElementById('case-number');
    let caseNumber = caseInput.value;
    if(isIncreasing)
    {
        caseInput.value = parseInt(caseNumber) + 1;
        caseNumber++;
    }    
    else if(caseNumber > 0)
    {
        caseInput.value = parseInt(caseNumber) - 1;   
        caseNumber--;
    }    
        
    //update case total
    const caseTotal = document.getElementById('case-total');
    caseTotal.innerText = caseNumber * 59;
}

//phone increase decrease event
document.getElementById('phone-plus').addEventListener('click', function(){
    console.log('phone plus clicked');
})

//case increase decrease event
document.getElementById('case-plus').addEventListener('click', function(){
    updateCaseNumber(true);
});

document.getElementById('case-minus').addEventListener('click', function(){
    updateCaseNumber(false);
});