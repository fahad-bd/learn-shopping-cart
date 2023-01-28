// console.log('js connected');



document.getElementById('case-plus').addEventListener('click', function(){
    // console.log('click in case pluse');
    const caseInput = document.getElementById('case-number');
    const caseNumber = caseInput.value;
    // console.log(caseNumber);
    caseInput.value = parseInt(caseNumber) + 1;
});

document.getElementById('case-minus').addEventListener('click', function(){
    const caseInput = document.getElementById('case-number');
    const caseNumber = caseInput.value;
    caseInput.value = parseInt(caseNumber) - 1;
});