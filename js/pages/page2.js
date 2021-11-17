bakery.setLocationDataObject=function(){
    var e=pageArray[1];e.setLocation(bakery.getNotNullValue("locationId")),
    e.setExpRental(bakery.getNotNullValue("expRental")),
    e.setExpUtility(bakery.getNotNullValue("expUtility")),
    e.setLocationImgInx(document.getElementById("locationId").selectedIndex)},bakery.restoreLocationDataObject=function(){var e=pageArray[1];null==bakery.getNotNullValueObj(
    e.getLocation())||""==bakery.getNotNullValueObj(e.getLocation())?(document.getElementById("locationId").
    value=bakery.translation.locMarina,document.getElementById("expRental").value=locationPrice[0][0],document.getElementById("expUtility").
    value=locationPrice[0][1],document.getElementById("locationImgTag").src=factsDetails[0][0],document.getElementById("locationFactsTxt").innerHTML=factsDetails[0][1]):
    (document.getElementById("locationId").value=bakery.getNotNullValueObj(e.getLocation()),
    document.getElementById("expRental").value=bakery.getNotNullValueObj(e.getExpRental()),
    document.getElementById("expUtility").value=bakery.getNotNullValueObj(e.getExpUtility()),
    document.getElementById("locationImgTag").src=factsDetails[e.getLocationImgInx()][0],
    document.getElementById("locationFactsTxt").innerHTML=factsDetails[e.getLocationImgInx()][1])},
    bakery.setPrice=function(){var e=document.getElementById("locationId").selectedIndex;document.getElementById("expRental").
    

value=locationPrice[e][0],document.getElementById("expUtility").
value=locationPrice[e][1],pageArray[3].setValEvaluated(!1),pageArray[6].setValEvaluated(!1)},bakery.updateFacts=function()
{var e=document.getElementById("locationId").selectedIndex;document.getElementById
("locationImgTag").src=factsDetails[e][0],document.getElementById("locationFactsTxt").innerHTML=factsDetails[e][1]};

var locationPrice = [
    ['$ 55000', '$ 40000'],
	['$ 70000', '$ 62000'],
    ['$ 30000', '$ 25000'],   
];
    
    factsDetails=[["images/location/FashionWalk.jpeg","</br> LOCATION FACTS </br></br> Fashion Walk is a very well-known shopping district at the heart of Causeway Bay. The area has nearly 80 trendy shops and diverse restaurants that both locals and tourists enjoy.On weekdays, foot traffic is approximately 13,000 while on weekends, it goes up to 18,000. It is frequented by young adults, teenagers, students and foreigners.</br></br>"],
    ["images/location/harbourcity.jpeg","</br> LOCATION FACTS </br></br>Harbour City is the largest and most diverse shopping mall in all of Hong Kong. It is under a series of office blocks and hotels. It is located in Tsim Sha Tsui next to the breath-taking Victoria Harbour, which is where the beloved Star Ferry is found. On weekends, 150 thousand people enter the shopping mall and it includes all kinds of people such as local residents, tourists and working adults.</br></br>"],
    ["images/location/newtownplaza.jpeg","</br> LOCATION FACTS </br></br>Located in the heart of Sha Tin, adjacent to Sha Tin station, New Town Plaza offers around 2 million sq. ft. of exceptional shopping, dining and lifestyle facilities.It's wide variety of international shops attracts many foreigners and locals alike that the plaza is filled with thousands of them in the weekend. It's even considered Hong Kong's busiest mall! </br></br>"]
];