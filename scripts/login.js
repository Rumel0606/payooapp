document.getElementById("login-btn").addEventListener('click',function(){
//   Get the mobile number
const numberInput = document.getElementById("input-number");
const numberValu = numberInput.value;
console.log(numberValu);
//  get the pin
const pinInput = document.getElementById("input-pin");
const pinValu = pinInput.value;
console.log(pinValu);
// macth pin & number
if(numberValu == '01745671928' && pinValu == '1234'){
    // Login succes alert
    alert('Login Successfull')
    window.location.assign("new.html");

} else{
    // Login failed alert
    alert('Login failed')
    return;
}

})