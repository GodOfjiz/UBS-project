bakery.setWelcomeDataObject = function(){
var page1ObjInner=pageArray[0];

var e = document.getElementById("shopTypeId");
page1ObjInner.setShopType(e.value);
page1ObjInner.setShopName(document.getElementById("shopNameId").value);
page1ObjInner.setPMngr(document.getElementById("pMngrId").value);
//page1ObjInner.setSMngr(document.getElementById("sMngrId").value);
var ele = document.getElementsByName('scenarios'); 
for(i = 0; i < ele.length; i++) { 
                if(ele[i].checked) 
				{
					page1ObjInner.setScenario(ele[i].value);
					break;
				}
}
}

bakery.restoreWelcomeDataObject = function(){

var page1ObjInner=pageArray[0];

document.getElementById("shopTypeId").value = page1ObjInner.getShopType();
document.getElementById("shopNameId").value=page1ObjInner.getShopName();
document.getElementById("pMngrId").value=page1ObjInner.getPMngr();
//document.getElementById("sMngrId").value=page1ObjInner.getSMngr();
document.getElementById(page1ObjInner.getScenario()).checked = true;


}

bakery.resetManagerNameFields = function(){
document.getElementById("pMngrId").value='';
//document.getElementById("sMngrId").value='';
document.getElementById("shopNameId").value='';
var windowLocationHref=window.location.href;
var shopTypeElem = document.getElementById("shopTypeId");
windowLocationHref= windowLocationHref.substr(0,windowLocationHref.indexOf(".html"));
window.location.replace(windowLocationHref + ".html?shopType="+shopTypeElem.value);


}