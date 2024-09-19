// search: form submit reloading the page 
// step 1 set event handler
document.getElementById('login-btn').addEventListener('click', function(event){
    // step 2 --> prevent default behaviou (browser load dile just input load na hoy)
    event.preventDefault();
    // step 3 get the phone nubmer
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;
    console.log(phoneNumber, pinNumber)

    // step 4 validate phone or pin 
    // this if else methos is not legal or temporary
    if(phoneNumber === '01' && pinNumber === '12'){
        console.log('you Are Logged In')
        window.location.href = 'home.html'
        // step 5 allow user to use the website
    }
    else{
        alert('wrong Phone Number or Pin')
    }
    
})