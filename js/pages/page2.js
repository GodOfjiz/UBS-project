bakery.setLocationDataObject = function(){
var page2ObjInner=pageArray[1];
page2ObjInner.setLocation(bakery.getNotNullValue("locationId"));
page2ObjInner.setExpRental(bakery.getNotNullValue("expRental"));
page2ObjInner.setExpUtility(bakery.getNotNullValue("expUtility"));
page2ObjInner.setLocationImgInx(document.getElementById("locationId").selectedIndex);
}

bakery.restoreLocationDataObject = function(){
var page2ObjInner=pageArray[1];
if(bakery.getNotNullValueObj(page2ObjInner.getLocation())==null || bakery.getNotNullValueObj(page2ObjInner.getLocation())=='')
  {
 
	document.getElementById("locationId").value=bakery.translation['locMarina'];
	document.getElementById("expRental").value=locationPrice[0][0];
	document.getElementById("expUtility").value=locationPrice[0][1];
	document.getElementById("locationImgTag").src=factsDetails[0][0];
	document.getElementById("locationFactsTxt").innerHTML=factsDetails[0][1];

  }
else
{
  document.getElementById("locationId").value=bakery.getNotNullValueObj(page2ObjInner.getLocation());
  document.getElementById("expRental").value=bakery.getNotNullValueObj(page2ObjInner.getExpRental());
  document.getElementById("expUtility").value=bakery.getNotNullValueObj(page2ObjInner.getExpUtility());
  document.getElementById("locationImgTag").src=factsDetails[page2ObjInner.getLocationImgInx()][0];
  document.getElementById("locationFactsTxt").innerHTML=factsDetails[page2ObjInner.getLocationImgInx()][1];

}
}

bakery.setPrice = function(){
var selectedIndexLocation=document.getElementById("locationId").selectedIndex;
document.getElementById("expRental").value=locationPrice[selectedIndexLocation][0];
document.getElementById("expUtility").value=locationPrice[selectedIndexLocation][1];
pageArray[3].setValEvaluated(false);
pageArray[6].setValEvaluated(false);
}

bakery.updateFacts = function(){
var selectedIndexLocation=document.getElementById("locationId").selectedIndex;
document.getElementById("locationImgTag").src=factsDetails[selectedIndexLocation][0];
document.getElementById("locationFactsTxt").innerHTML=factsDetails[selectedIndexLocation][1];
}


var locationPrice = [
    ['$ 10000', '$ 11000'],
	['$ 9000', '$ 10000'],
    ['$ 8000', '$ 9000'],
    
];

var factsDetails = [
    ['images/Mcdonald.jpg', '</br>&nbsp;&nbsp;LOCATION FACTS </br></br>Mcdonald is restaurant that has fed many american and people around the world. It was found since the 1940s and it spread its influence to around the world.</br></br>'],
	['images/KFC.jpg', '</br>&nbsp;&nbsp;LOCATION FACTS </br></br>KFC is an American fast food restaurant chain headquartered in Louisville, Kentucky that specializes in fried chicken. It is the world second-largest restaurant chain after McDonalds, with 22,621 locations globally in 150 countries as of December 2019.</br></br>'],
    ['images/wendy.jpg', '</br>&nbsp;&nbsp;LOCATION FACTS </br></br>Wendys is an American international fast food restaurant chain founded by Dave Thomas on November 15, 1969, in Columbus, Ohio. The company moved its headquarters to Dublin, Ohio, on January 29, 2006.</br></br>'],
    
];