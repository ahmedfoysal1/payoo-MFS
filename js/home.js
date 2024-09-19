// add money to the account


// step 1: get button and add prevetDefault
// step 2: get money amount from the input to add in balance
document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault();

    // add money input
    const addMoney = document.getElementById('input-add-money').value;
    console.log(addMoney)

    // get the provided pin number
    const pinNumberInput = document.getElementById('input-pin-number').value;

})