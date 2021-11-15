var page3ObjInner=pageArray[2];


bakery.setStaffDataObject = function(){

//page3ObjInner.setEmpQty1(document.getElementById("empQty1").value);
//page3ObjInner.setEmpQty2(document.getElementById("empQty2").value);
//page3ObjInner.setEmpQty3(document.getElementById("empQty3").value);

//page3ObjInner.setEmpSalary1(document.getElementById("empSalary1").value);
//page3ObjInner.setEmpSalary2(document.getElementById("empSalary2").value);
//page3ObjInner.setEmpSalary3(document.getElementById("empSalary3").value);
}

bakery.restoreStaffDataObject = function(){
imgPos=1;
 if(page3ObjInner  !=null)
 {
 document.getElementById("staffQtyDynamic").value=page3ObjInner.getEmpQty1();
   
 }
}

bakery.displayStaffSpecialityDtls= function(direction){



if(imgPos==1 && direction=='left')
{
return;
}

if(imgPos==3 && direction=='right')
{
return;
}

if(direction=='left')
{
  imgPos =imgPos-1;
}

if(direction=='right')
{
  imgPos= imgPos+1;
}


document.getElementById("staffSalaryDynamic").innerHTML=staff[imgPos-1][0];
document.getElementById("staffSpecialityDynamic").innerHTML=staff[imgPos-1][1];
document.getElementById("staffTitleDynamic").innerHTML=staff[imgPos-1][2];
document.getElementById("staffIdDynamic").src=staff[imgPos-1][3];
var funcToCall='getEmpQty'+imgPos;
document.getElementById("staffQtyDynamic").value=page3ObjInner[funcToCall]();

}

bakery.hireStaffIncrement = function(){

var curCnt;
var funcToCall='getEmpQty'+imgPos;

curCnt=page3ObjInner[funcToCall]();
if(curCnt==5)
{
   document.getElementById("employeeValidation").style.display="inline";
   return;
}
curCnt=parseInt(curCnt)+1;
document.getElementById("staffQtyDynamic").value=curCnt;
funcToCall='setEmpQty'+imgPos;
page3ObjInner[funcToCall](curCnt);

pageArray[3].setValEvaluated(false);
pageArray[6].setValEvaluated(false);


}

bakery.hireStaffDecrement = function(){


var curCnt;
var funcToCall='getEmpQty'+imgPos;

curCnt=page3ObjInner[funcToCall]();
if(curCnt==0)
  return;
curCnt=parseInt(curCnt)-1;
document.getElementById("staffQtyDynamic").value=curCnt;
funcToCall='setEmpQty'+imgPos;
page3ObjInner[funcToCall](curCnt);

pageArray[3].setValEvaluated(false);
pageArray[4].setValEvaluated(false);
pageArray[5].setValEvaluated(false);
pageArray[6].setValEvaluated(false);

document.getElementById("employeeValidation").style.display="none";

}
var staff = [
    ['$ 2800', 'Design and crafts </br> innovative pastries','Pastry Chef','images/chef.svg'],
	['$ 3100', 'Baking cake specialist','Baking Chef','images/emp2.png'],
    ['$ 5000', 'Baking and Designing </br> cake specialist','Designing Chef','images/emp3.svg'],
    
];

var imgPos=1;