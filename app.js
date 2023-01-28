// console.log('js connected');

function updateCaseNumber(){
    const caseInput = document.getElementById('case-number');
    const caseNumber = caseInput.value;
    caseInput.value = parseInt(caseNumber) + 1;
}

document.getElementById('case-plus').addEventListener('click', function(){
    updateCaseNumber();
});

document.getElementById('case-minus').addEventListener('click', function(){
    const caseInput = document.getElementById('case-number');
    const caseNumber = caseInput.value;
    caseInput.value = parseInt(caseNumber) - 1;
});