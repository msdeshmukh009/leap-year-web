var bDate = document.querySelector("#date-input");
var checkBtn = document.querySelector("#check-btn");
var outputDiv = document.querySelector("#output");
var inputForm = document.forms[0];

function testLeap(n){
    if((n%4==0) && (n%100!=0) || (n%400==0)){
        return true;
    }else{
        return false;
    }
}

function nextLeapYr(year){
    yyNo1 = Number(year);
    yyNo2 = Number(year);
    for(var i=1;i>0;i++){
        yyNo1 = yyNo1+1;
        if(testLeap(yyNo1)){
            return([yyNo1,i])
        } 
        yyNo2=yyNo2-1;
        if(testLeap(yyNo2)){
            return([yyNo2,i])
        }
    }
}

inputForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    var bDateArr = bDate.value.split("-");
    var yyyy = bDateArr[0];
    var found = nextLeapYr(yyyy);
    console.log(found[0],found[1]);
    outputDiv.style.display="block"
    if(testLeap(yyyy)){
        outputDiv.innerHTML="You are leap year born "+yyyy+" was indeed a leap year"
    }else{
        outputDiv.innerHTML="You are not leap year born. "+yyyy+" was not a leap year. Nearest leap year was "+found[0]+" and you missed it by "+found[1]+" year(s)."
    }
   

})
