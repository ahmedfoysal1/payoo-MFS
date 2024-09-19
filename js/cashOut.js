document.getElementById('btn-cash-out').addEventListener('click', function (event) {
    event.preventDefault();

    // add money input
    const cashOut = document.getElementById('input-cash-out').value;
    console.log(cashOut)

    // get the provided pin number
    const pinNumberInput = document.getElementById('input-cash-out-pin').value;

    // step 3 verify the pin number 
    // this method only for learning purpose and for begginer
    if (pinNumberInput === '12') {
        console.log('money added successfully')
        // step 4 get the current balance
        const currentBalance = document.getElementById('balance').innerText;
        console.log(currentBalance);
        // step 5 add addMoneyInput with current balance
        const cashOutNumber = parseFloat(cashOut);
        const balanceNumber = parseFloat(currentBalance);
        const newBalance = balanceNumber - cashOutNumber;
        console.log(newBalance);

        // step 6 update the balance in UI/DOM 
        document.getElementById('balance').innerText = newBalance;

    }
    else {
        alert('Money Withdraw Failed')
    }
})