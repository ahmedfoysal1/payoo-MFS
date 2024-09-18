// search: form submit reloading the page 
// step 1 set event handler
document.getElementById('login-btn').addEventListener('click', function(event){
    // step 2 --> prevent default behaviou (browser load dile just input load na hoy)
    event.preventDefault();
    // step 3 get the phone nubmer
    const phoneNumber = document.getElementById('phone-number');
    console.log(phoneNumber.value)
    
    
})