var page5ObjInner=pageArray[4];
bakery.selectIngridients = function(elmentSelected){
	
	bakery.hideNextButtonInvPage();

	var cnt=0;
	var topIngridientsCnter=0;
	
	$('input[type=checkbox]').each(function () {
	
	if(this.checked)
	 cnt++;
	});

	if(cnt==7)
	{
     document.getElementById("errMsgInventory").innerHTML="Cannot select more than 6 ingredients";
	 document.getElementById(elmentSelected).checked = false;
	 document.getElementById("errMsgInventory").style.display='inline';
	}
	else
	{
	  document.getElementById("errMsgInventory").innerHTML="";
	}
}


bakery.setInventoryDataObject = function(){

var selectedList="";
var cnt=1;
$('input[type=checkbox]').each(function () {

	if(this.checked)
	{
	  selectedList=selectedList+'cb'+cnt+",";
	  cnt++;
	  
	}
	else
	{
	  cnt++;
	}
	 
	});
	
	if(selectedList.indexOf(",")!=-1)
	 {
	   selectedList =selectedList.substr(0,selectedList.length-1);
	 }
	 page5ObjInner.setSelectedInventoryItems(selectedList);
	 page5ObjInner.setTotalInvExp(document.getElementById("totalInvExpTxt").value);
	
}

bakery.restoreInventoryDataObject = function(){

 if(page5ObjInner  !=null && page5ObjInner.getSelectedInventoryItems() !=null )
 {
 
    var selectedChkBox=page5ObjInner.getSelectedInventoryItems().split(",");
	
	 if(selectedChkBox != '')
	 {
		for (i = 0; i < selectedChkBox.length; i++) 
		{
		  document.getElementById(selectedChkBox[i]).checked = true; 
		}	
	}	
	document.getElementById("totalInvExpTxt").value=page5ObjInner.getTotalInvExp();
	
 }
 
}
bakery.evaluateInvExp= function(){
var enteredVal=document.getElementById("totalInvExpTxt").value;
var cntCheckedBox=1;
var actualTotalVal=0;
var cnterChkBox=0;
var products=[];
var ingridients=[];
var isCoffeMachineSelected=false;
var isCoffeBeanSelected=false;
$('input[type=checkbox]').each(function () {
	
	if(cnterChkBox<8 && this.checked)
	{   products.push(this.id)
		
	}
	if(cnterChkBox>=8 && this.checked)
	{
		ingridients.push(this.id)
		
	}	
	if(pageArray[0].getShopType()=='Cafe')
	{
		
	   	if(cnterChkBox==10 && this.checked)
		{
			isCoffeMachineSelected=true;
		}
		if(cnterChkBox==14 && this.checked)
		{
			isCoffeBeanSelected=true;
		}
	}
	
	cnterChkBox++;
	
	
});	

	if(isCoffeMachineSelected && !isCoffeBeanSelected)
	{
		 document.getElementById("errMsgInventory").innerHTML="Since you have selected a coffee machine it is mandatory to select coffee bean as well.";
	 
		document.getElementById("errMsgInventory").style.display='inline';
		return;
	}
	
	if(ingridients.length<4 )
	{
	 document.getElementById("errMsgInventory").innerHTML="Please select atleast 4 ingredients.";
	 
	 document.getElementById("errMsgInventory").style.display='inline';
		return;
	}

$('input[type=checkbox]').each(function () {

	if(this.checked)
	{
	var selectedItmPrice=chkBoxImageAndPrice[cntCheckedBox-1][1];
	  actualTotalVal=parseFloat(actualTotalVal)+parseFloat(selectedItmPrice.substring(1,selectedItmPrice.length));	  
	 
	  
	  cntCheckedBox++;	  
	}
	else
	{
	  cntCheckedBox++;
	}
	 
	});	
	
	
	if(actualTotalVal==enteredVal)
	{
	var snd = new Audio("audio/04_CorrectAnswer"+ ".mp3");
	snd.play();
	   document.getElementById("nxtButtonId").style.display="inline";
	   document.getElementById('evalResult').innerHTML="<img src='images/confirm.svg'/>&nbsp;Correct";
	   document.getElementById("evalResult").classList.remove('fixedEvalWrong');
	   document.getElementById("evalResult").classList.add('fixedEvalCorrect');
	   page5ObjInner.setValEvaluated(true);
	}
	else
	{
	var snd = new Audio("audio/05_WrongAnswer"+ ".mp3");
	snd.play();
	  document.getElementById('evalResult').innerHTML="Oops, try again";
	  document.getElementById("evalResult").classList.remove('fixedEvalCorrect');
      document.getElementById("evalResult").classList.add('fixedEvalWrong');
	  document.getElementById("nxtButtonId").style.display="none";
	}
}

bakery.checkResultExpValueInv=function(){
if(page5ObjInner.getValEvaluated())
 {
	   document.getElementById("nxtButtonId").style.display="inline";
	   document.getElementById('evalResult').innerHTML="<img src='images/confirm.svg'/>&nbsp;Correct";
	   document.getElementById("evalResult").classList.remove('fixedEvalWrong');
	   document.getElementById("evalResult").classList.add('fixedEvalCorrect');
 }
}

bakery.hideNextButtonInvPage = function(){
	
	  page5ObjInner.setValEvaluated(false);
	  document.getElementById('evalResult').innerHTML="";	 
	  document.getElementById("nxtButtonId").style.display="none";
	  pageArray[5].setValEvaluated(false);
	  pageArray[6].setValEvaluated(false);
}

var chkBoxImageAndPrice;

bakery.limitInventoryExp=function(invExpenses){
	if (invExpenses.value.length > 2) {
        invExpenses.value = invExpenses.value.slice(0,2); 
	}
}

var chkBoxImageAndPriceBakery = [
    ['images/inventory/cake/baking-glove@2x.png', '$0.1'],	
	['images/inventory/cake/balloon-whisk@2x.png', '$0.1'],	
	['images/inventory/cake/cake-pan@2x.png', '$0.3'],
	['images/inventory/cake/flour-sift@2x.png', '$0.1'],
	['images/inventory/cake/stand-mixer@2x.png', '$1'],
	['images/inventory/cake/muffin-pan@2x.png', '$0.1'],
	['images/inventory/cake/rolling-pin@2x.png', '$0.2'],
	['images/inventory/cake/serve-board@2x.png', '$0.1'],
	['images/inventory/cake/eggs@2x.png', '$6','Eggs'],
	['images/inventory/cake/flour@2x.png', '$10','Baking flour'],	
	['images/inventory/cake/measure-flask@2x.png', '$10','Oil'],	
	['images/inventory/cake/salt@2x.png', '$3','Salt'],
	['images/inventory/cake/milk@2x.png', '$6','Milk'],	
	['images/inventory/cake/sugar@2x.png', '$4','Icing sugar']  ,
	['images/inventory/cake/baking-soda@2x.png', '$7','Baking soda'],
	['images/inventory/cake/butter@2x.png', '$10','Butter'],
   
    
];

var chkBoxImageAndPriceCafe = [
    ['images/inventory/coffee/bowl@2x.png', '$0.1'],	
	['images/inventory/coffee/coffee-cup@2x.png', '$0.1'],	
	['images/inventory/coffee/coffee-jug@2x.png', '$0.3'],
	['images/inventory/coffee/coffee-machine@2x.png', '$1'],
	['images/inventory/coffee/serve-board@2x.png', '$0.2'],
	['images/inventory/coffee/cup@2x.png', '$0.1'],
	['images/inventory/coffee/food-packaging@2x.png', '$0.1'],
	['images/inventory/coffee/take-out-cup@2x.png', '$0.1'],
	['images/inventory/coffee/tall-glass@2x.png', '$1','Glass'],
	['images/inventory/coffee/tea_spoon@2x.png', '$1','Vanilla flower'],	
	['images/inventory/coffee/tea-press@2x.png', '$2','Coffee Machine'],	
	['images/inventory/coffee/sugar@2x.png', '$1','Sugar'],
	['images/inventory/coffee/milk@2x.png', '$1','Milk'],	
	['images/inventory/coffee/coffee-powder@2x.png', '$1','Coffee powder']  ,
	['images/inventory/coffee/coffee-bean@2x.png', '$2','Coffee bean'],
	['images/inventory/coffee/cinammon@2x.png', '$1','Cinammon'],
   
    
];





