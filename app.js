var bDate = document.querySelector("#date-input");
var checkBtn = document.querySelector("#check-btn");
var outputDiv = document.querySelector("#output");
var inputForm = document.forms[0];

function testPrime(n){
    if(n==1){
        return false;
    }else if(n==2){
        return true;
    }else{
        for(var i =2; i<n;i++){
            if(n%i==0){
                return false;
            }
        }
        return true;
    }
}

inputForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    var bDateArr = bDate.value.split("-");
    var yyyy = bDateArr[0];
    var mm = bDateArr[1];
    var dd = bDateArr[2];
    outputDiv.style.display="block"

    if(testPrime(dd+mm)){
        outputDiv.innerHTML="Your birthdate " +dd+"/"+mm+"/"+yyyy+" in the formate dd/mm i.e., "+dd+mm+" is prime number." 
    }else if(testPrime(mm+dd)){
        outputDiv.innerHTML="Your birthdate " +dd+"/"+mm+"/"+yyyy+" in the formate mm/dd i.e., "+mm+dd+" is prime number."
    }else if(testPrime(yyyy)){
        outputDiv.innerHTML="Your birthyear "+yyyy+" is prime number."
    }else{
        outputDiv.innerHTML="Your birthdate is not prime number in any of the fromate."
    }
    console.log(dd+mm,mm+dd,yyyy); 

})
