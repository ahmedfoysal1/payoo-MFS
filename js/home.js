// add money to the account


// step 1: get button and add prevetDefault
// step 2: get money amount from the input to add in balance also get the pin number
// step 3 verify the pin number 
// step 4 get the current balance
// step 5 add addMoneyInput with current balance
// step 6 update the balance in UI/DOM 
document.getElementById('btn-add-money').addEventListener('click', function (event) {
    event.preventDefault();

    // add money input
    const addMoney = document.getElementById('input-add-money').value;
    console.log(addMoney)

    // get the provided pin number
    const pinNumberInput = document.getElementById('input-pin-number').value;

    // step 3 verify the pin number 
    // this method only for learning purpose and for begginer
    if (pinNumberInput === '12') {
        console.log('money added successfully')
        // step 4 get the current balance
        const currentBalance = document.getElementById('balance').innerText;
        console.log(currentBalance);
        // step 5 add addMoneyInput with current balance
        const addMoneyNumber = parseFloat(addMoney);
        const balanceNumber = parseFloat(currentBalance);
        const newBalance = addMoneyNumber + balanceNumber;
        console.log(newBalance);

        // step 6 update the balance in UI/DOM 
        document.getElementById('balance').innerText = newBalance;

    }
    else {
        alert('Wrong Pin Number')
    }
})