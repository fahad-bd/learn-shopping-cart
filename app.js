// console.log('js connected');
document.getElementById('case-plus').addEventListener('click', function(){
    // console.log('click in case pluse');
    const caseInput = document.getElementById('case-number');
    const caseNumber = caseInput.value;
    // console.log(caseNumber);
    caseInput.value = parseInt(caseNumber) + 1;
});