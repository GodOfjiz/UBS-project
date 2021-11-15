bakery.setResultDataObject = function(){	 
	
}

bakery.startGameAgain = function(){
window.location.reload();	
}
bakery.getProfitLossVal = function(){
	
	
	var scenarioSelected=pageArray[0].getScenario();
	if(scenarioSelected=='A')
	{
	
	   var snd = new Audio("audio/04_CorrectAnswer"+ ".mp3");
	   snd.play();
	}
	if(scenarioSelected=='B')
	{
	   var snd = new Audio("audio/05_WrongAnswer"+ ".mp3");
	   snd.play();
	}

	if(scenarioSelected=='C')
	{
		var snd = new Audio("audio/04_CorrectAnswer"+ ".mp3");
	   snd.play();
	}

var fixedValExp=pageArray[3].getFixedExpVal();
var costPrice=pageArray[4].getTotalInvExp();

var brkEvenCnt=pageArray[6].getBreakEvenUnit();

var contriMarginVal=parseInt(pageArray[5].getContributionMargin());

var random=Math.floor(Math.random() * (brkEvenCnt - 0 + 1)) + 0;


var totalUnitSoldProfit=parseInt(brkEvenCnt)+parseInt(random);
var totalUnitSoldLoss=parseInt(brkEvenCnt)-parseInt(random);
var page6ObjInner=pageArray[5];
var page7ObjInner=pageArray[6];

//var randomForMultiply=Math.floor(Math.random() * (50 - 0 + 1)) + 0;
//totalUnitSold=parseInt(totalUnitSold)*randomForMultiply;


var profitMade=(parseInt(totalUnitSoldProfit)-parseInt(brkEvenCnt))*contriMarginVal;
var lossIncurred=(parseInt(brkEvenCnt)-parseInt(totalUnitSoldLoss))*contriMarginVal;
if(scenarioSelected=='A'){	
document.getElementById("resultDisplay").innerHTML="<font face='Frutiger45Light' size='+2' color='gray'><b>Congratulations!</b></font></br> </br><font face='Frutiger45Light' size='+1' color='gray'>You sold a total of "+totalUnitSoldProfit+" Units, and made a profit of $"+profitMade+" in one month.<br/><br/>Selling price: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$"+page6ObjInner.getSellingPrice()+" per unit<br/>Contribution margin: $"+page6ObjInner.getContributionMargin()+" per unit</br>Break even unit: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+page7ObjInner.getBreakEvenUnit();+"</font></br>";}
else if(scenarioSelected=='B'){
document.getElementById("resultDisplay").innerHTML="<font face='Frutiger45Light' size='+2' color='gray'><b>Sorry!</b></font> </br></br><font face='Frutiger45Light' size='+1' color='gray'>You could sell a total of "+totalUnitSoldLoss+" Units, and incurred a loss of $"+lossIncurred+" in one month.<br/><br/>Selling price: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$"+page6ObjInner.getSellingPrice()+" per unit<br/>Contribution margin: $"+page6ObjInner.getContributionMargin()+" per unit</br>Break even unit: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+page7ObjInner.getBreakEvenUnit();+"</font></br>";}
else if(scenarioSelected=='C'){
document.getElementById("resultDisplay").innerHTML="<font face='Frutiger45Light' size='+2' color='gray'><b>This is a break even situation</b></font></br></br> <font face='Frutiger45Light' size='+1' color='gray'>You sold a total of "+brkEvenCnt +" Units, hence no profit and no loss.<br/><br/>Selling price: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$"+page6ObjInner.getSellingPrice()+" per unit<br/>Contribution margin: $"+page6ObjInner.getContributionMargin()+" per unit</br>Break even unit: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+page7ObjInner.getBreakEvenUnit();+"</font></br>";}

 var expense;
 var revenue ; 

if(scenarioSelected=='A')
{   
     total = totalUnitSoldProfit
     expense = (costPrice*totalUnitSoldProfit)+parseInt(fixedValExp); //  TOOD: nidhi to send expense value here
	 revenue = parseInt(expense)+parseInt(profitMade); // TOOD: nidhi to send revenue value here
}
else if(scenarioSelected=='B')
{   
     total = totalUnitSoldLoss
	 expense = (costPrice*totalUnitSoldLoss)+parseInt(fixedValExp); //  TOOD: nidhi to send expense value here
	 revenue = parseInt(expense)-parseInt(lossIncurred); // TOOD: nidhi to send revenue value here
}

else if(scenarioSelected=='C')
{
     total = totalUnitSoldLoss
	 expense = (costPrice*totalUnitSoldLoss)+parseInt(fixedValExp); //  TOOD: nidhi to send expense value here
	 revenue = expense; // TOOD: nidhi to send revenue value here
}

	
	
	

    var graphColorBackground = {
        PROFIT: 'rgba(54, 162, 235, 0.2)',
        LOSS: 'rgba(255, 206, 86, 0.2)',
        BREAK_EVEN: 'rgba(75, 192, 192, 0.2)'
    };

    var graphColorBorder = {
        PROFIT: 'rgba(54, 162, 235, 1)',
        LOSS: 'rgba(255, 206, 86, 1)',
        BREAK_EVEN: 'rgba(75, 192, 192, 1)'
    };

    var ctx = document.getElementById('Chart');

    var dataForChart = [revenue, expense]
    var backgroundColorForChart;
	var borderColorForChart;
	var backgroundColorForChartRevenue='rgba(74, 173, 182, 0.3)';
	var backgroundColorForChartExpense='rgba(196, 69, 117, 0.3)';
	var borderColorForChartRevenue='#4AADB6';
	var borderColorForChartExpense='#C44575';
    
    if (revenue > expense) {//profit
        backgroundColorForChart = graphColorBackground.PROFIT;
        borderColorForChart = graphColorBorder.PROFIT;
    } else if (revenue === expense) { // break even
        backgroundColorForChart = graphColorBackground.BREAK_EVEN;
        borderColorForChart = graphColorBorder.BREAK_EVEN;
    } else { // loss
        backgroundColorForChart = graphColorBackground.LOSS;
        borderColorForChart = graphColorBorder.LOSS;
    }


    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Revenue', 'Expenses'],
            datasets: [{
                data: dataForChart,
                backgroundColor: [
                    backgroundColorForChartRevenue,
                    backgroundColorForChartExpense
                ],
                borderColor: [
                    borderColorForChartRevenue,
                    borderColorForChartExpense
                ],
                borderWidth: 3
            }]
        },
        options: {
            legend: {
                display: false
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
  var day_1 = Math.round(total/30 + getRndInteger(-30,30))
  var day_2 = Math.round((total-day_1)/29 + getRndInteger(-30,30))
  var day_3 = Math.round((total-day_1-day_2)/28 + getRndInteger(-30,30))
  var day_4 = Math.round((total-day_1-day_2-day_3)/27 + getRndInteger(-30,30))
  var day_5 = Math.round((total-day_1-day_2-day_3-day_4)/26 + getRndInteger(-30,30))
  var day_6 = Math.round((total-day_1-day_2-day_3-day_4-day_5)/25 + getRndInteger(-30,30))
  var day_7 = Math.round((total-day_1-day_2-day_3-day_4-day_5-day_6)/24 + getRndInteger(-30,30))
  var day_8 = Math.round((total-day_1-day_2-day_3-day_4-day_5-day_6-day_7)/23 + getRndInteger(-30,30))
  var day_9 = Math.round((total-day_1-day_2-day_3-day_4-day_5-day_6-day_7-day_8)/22 + getRndInteger(-30,30))
  var day_10 = Math.round((total-day_1-day_2-day_3-day_4-day_5-day_6-day_7-day_8-day_9)/21 + getRndInteger(-30,30))
  var day_11 = Math.round((total-day_1-day_2-day_3-day_4-day_5-day_6-day_7-day_8-day_9-day_10)/20 + getRndInteger(-30,30))
  var day_12 = Math.round((total-day_1-day_2-day_3-day_4-day_5-day_6-day_7-day_8-day_9-day_10-day_11)/19 + getRndInteger(-30,30))
  var day_13 = Math.round((total-day_1-day_2-day_3-day_4-day_5-day_6-day_7-day_8-day_9-day_10-day_11-day_12)/18 + getRndInteger(-30,30))
  var day_14 = Math.round((total-day_1-day_2-day_3-day_4-day_5-day_6-day_7-day_8-day_9-day_10-day_11-day_12-day_13)/17 + getRndInteger(-30,30))
  var day_15 = Math.round((total-day_1-day_2-day_3-day_4-day_5-day_6-day_7-day_8-day_9-day_10-day_11-day_12-day_13-day_14)/16 + getRndInteger(-30,30))
  var day_16 = Math.round((total-day_1-day_2-day_3-day_4-day_5-day_6-day_7-day_8-day_9-day_10-day_11-day_12-day_13-day_14-day_15)/15 + getRndInteger(-30,30))
  var day_17 = Math.round((total-day_1-day_2-day_3-day_4-day_5-day_6-day_7-day_8-day_9-day_10-day_11-day_12-day_13-day_14-day_15-day_16)/14 + getRndInteger(-30,30))
  var day_18 = Math.round((total-day_1-day_2-day_3-day_4-day_5-day_6-day_7-day_8-day_9-day_10-day_11-day_12-day_13-day_14-day_15-day_16-day_17)/13 + getRndInteger(-30,30))
  var day_19 = Math.round((total-day_1-day_2-day_3-day_4-day_5-day_6-day_7-day_8-day_9-day_10-day_11-day_12-day_13-day_14-day_15-day_16-day_17-day_18)/12 + getRndInteger(-30,30))
  var day_20 = Math.round((total-day_1-day_2-day_3-day_4-day_5-day_6-day_7-day_8-day_9-day_10-day_11-day_12-day_13-day_14-day_15-day_16-day_17-day_18-day_19)/11 + getRndInteger(-30,30))
  var day_21 = Math.round((total-day_1-day_2-day_3-day_4-day_5-day_6-day_7-day_8-day_9-day_10-day_11-day_12-day_13-day_14-day_15-day_16-day_17-day_18-day_19-day_20)/10 + getRndInteger(-30,30))
  var day_22 = Math.round((total-day_1-day_2-day_3-day_4-day_5-day_6-day_7-day_8-day_9-day_10-day_11-day_12-day_13-day_14-day_15-day_16-day_17-day_18-day_19-day_20-day_21)/9 + getRndInteger(-30,30))
  var day_23 = Math.round((total-day_1-day_2-day_3-day_4-day_5-day_6-day_7-day_8-day_9-day_10-day_11-day_12-day_13-day_14-day_15-day_16-day_17-day_18-day_19-day_20-day_21-day_22)/8 + getRndInteger(-30,30))
  var day_24 = Math.round((total-day_1-day_2-day_3-day_4-day_5-day_6-day_7-day_8-day_9-day_10-day_11-day_12-day_13-day_14-day_15-day_16-day_17-day_18-day_19-day_20-day_21-day_22-day_23)/7 + getRndInteger(-30,30))
  var day_25 = Math.round((total-day_1-day_2-day_3-day_4-day_5-day_6-day_7-day_8-day_9-day_10-day_11-day_12-day_13-day_14-day_15-day_16-day_17-day_18-day_19-day_20-day_21-day_22-day_23-day_24)/6 + getRndInteger(-30,30))
  var day_26 = Math.round((total-day_1-day_2-day_3-day_4-day_5-day_6-day_7-day_8-day_9-day_10-day_11-day_12-day_13-day_14-day_15-day_16-day_17-day_18-day_19-day_20-day_21-day_22-day_23-day_24-day_25)/5 + getRndInteger(-30,30))
  var day_27 = Math.round((total-day_1-day_2-day_3-day_4-day_5-day_6-day_7-day_8-day_9-day_10-day_11-day_12-day_13-day_14-day_15-day_16-day_17-day_18-day_19-day_20-day_21-day_22-day_23-day_24-day_25-day_26)/4 + getRndInteger(-30,30))
  var day_28 = Math.round((total-day_1-day_2-day_3-day_4-day_5-day_6-day_7-day_8-day_9-day_10-day_11-day_12-day_13-day_14-day_15-day_16-day_17-day_18-day_19-day_20-day_21-day_22-day_23-day_24-day_25-day_26-day_27)/3 + getRndInteger(-30,30))
  var day_29 = Math.round((total-day_1-day_2-day_3-day_4-day_5-day_6-day_7-day_8-day_9-day_10-day_11-day_12-day_13-day_14-day_15-day_16-day_17-day_18-day_19-day_20-day_21-day_22-day_23-day_24-day_25-day_26-day_27-day_28)/2 + getRndInteger(-30,30))
  var day_30 = total-day_1-day_2-day_3-day_4-day_5-day_6-day_7-day_8-day_9-day_10-day_11-day_12-day_13-day_14-day_15-day_16-day_17-day_18-day_19-day_20-day_21-day_22-day_23-day_24-day_25-day_26-day_27-day_28-day_29
  var day = ["Day 1","Day 2","Day 3","Day 4","Day 5","Day 6","Day 7","Day 8","Day 9","Day 10",
             "Day 11","Day 12","Day 13","Day 14","Day 15","Day 16","Day 17","Day 18","Day 19","Day 20",
             "Day 21","Day 22","Day 23","Day 24","Day 25","Day 26","Day 27","Day 28","Day 29","Day 30"]
  var No_of_Sales = [day_1,day_2,day_3,day_4,day_5,day_6,day_7,day_8,day_9,day_10,
                     day_11,day_12,day_13,day_14,day_15,day_16,day_17,day_18,day_19,day_20,
                     day_21,day_22,day_23,day_24,day_25,day_26,day_27,day_28,day_29,day_30]
new Chart("Chart", {
  type: "line",
  data: {
    labels: day,
    datasets: [{
      fill: false,
      lineTension: 0,
      backgroundColor: "rgba(54, 162, 235, 0.2)",
      borderColor: "rgba(54, 162, 235, 1)",
      data: No_of_Sales
    }]
  },
  options: {
    legend: {display: false},
    scales: {

    }
  }
});
	
}


