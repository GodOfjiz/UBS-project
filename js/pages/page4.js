var page4ObjInner=pageArray[3];
bakery.setExpenditureDataObject = function(){
if (document.getElementById("mnthlyTotalExpenses")== null)
  page4ObjInner.setFixedExpVal("");
else if(document.getElementById("mnthlyTotalExpenses").value=='undefined')
  page4ObjInner.setFixedExpVal("");
else
 page4ObjInner.setFixedExpVal(document.getElementById("mnthlyTotalExpenses").value);
}

bakery.restoreExpenditureDataObject = function(){

 if(page4ObjInner  !=null)
 {

 document.getElementById("mnthlyTotalExpenses").value=page4ObjInner.getFixedExpVal();
 
   
 }
 
}
bakery.limitMnthlyFixedExp=function(mnthlyTotalExpenses){
	if (mnthlyTotalExpenses.value.length > 6) {
        mnthlyTotalExpenses.value = mnthlyTotalExpenses.value.slice(0,6); 
	}
}
bakery.evaluateFixedExp=function(){

var totalMnthlyExpActual=parseInt(empSalary,10)+parseInt(pageArray[1].getExpRental().substring(1,pageArray[1].getExpRental().length),10)+parseInt(pageArray[1].getExpUtility().substring(1,pageArray[1].getExpUtility().length),10);

if(totalMnthlyExpActual==parseInt(document.getElementById('mnthlyTotalExpenses').value))
{
var snd = new Audio("audio/04_CorrectAnswer"+ ".mp3");
snd.play();
document.getElementById('evalResult').innerHTML="<img src='images/confirm.svg'/>&nbsp;Correct";
document.getElementById("evalResult").classList.remove('fixedEvalWrong');
document.getElementById("evalResult").classList.add('fixedEvalCorrect');
document.getElementById("mnthlyTotalExpenses").style.borderBottom = "solid 2px #797979";
document.getElementById("nxtButtonId").style.display="inline";
page4ObjInner.setValEvaluated(true);

}

else
{
var snd = new Audio("audio/05_WrongAnswer"+ ".mp3");
snd.play();
document.getElementById('evalResult').innerHTML="Oops, try again";
document.getElementById("evalResult").classList.remove('fixedEvalCorrect');
document.getElementById("evalResult").classList.add('fixedEvalWrong');
document.getElementById("mnthlyTotalExpenses").style.borderBottom = "solid 2px #C44575";
document.getElementById("nxtButtonId").style.display="none";

}
}

bakery.checkResultExpValueExp=function(){

if(page4ObjInner.getValEvaluated())
 {
		document.getElementById('evalResult').innerHTML="<img src='images/confirm.svg'/>&nbsp;Correct";
		document.getElementById("evalResult").classList.remove('fixedEvalWrong');
		document.getElementById("evalResult").classList.add('fixedEvalCorrect');
		document.getElementById("mnthlyTotalExpenses").style.borderBottom = "solid 2px #797979";
		document.getElementById("nxtButtonId").style.display="inline";
 }

}
bakery.hideNextButtonExpPage = function(){
	
	  page4ObjInner.setValEvaluated(false);
	  document.getElementById('evalResult').innerHTML="";	 
	  document.getElementById("nxtButtonId").style.display="none";
	  pageArray[6].setValEvaluated(false);
}



