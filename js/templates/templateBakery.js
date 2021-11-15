bakery.bakeryHeader =
'<table style="width: 100%;">'+
	' <tr>'+
		' <td style="height: 15%;" colspan="9">&nbsp;</td>'+
	'</tr>'+
	'<tr>'+	
		'<td class="headerNavWidth20Txt">'+
			'<a class="hotspot" style="top: 20px; left: 35px; width: 32px; height: 34px;" onClick="bakery.displayOverlay()"><img src="images/icon-hamburger.png"/></a>'+			
		'</td>	'+		
		'<td  class="headerNavWidth10Txt"><a id ="shopAnchorId">'+
				 '{{shopTypeLbl}}</a>'+
		'</td>'+
		'<td class="headerNavWidth10Txt">'+
			'<a id ="locationAnchorId" >{{locationLbl}}</a>'+
		'</td>'+
		'<td  class="headerNavWidth8Txt">'+
			'<a id ="staffAnchorId">{{staffLbl}}</a>'+
		'</td>'+
		'<td class="headerNavWidth12Txt">'+
			'<a id ="expAnchorId">{{ExpLbl}}</a>'+
		'</td>'+
		'<td class="headerNavWidth10Txt">'+
			'<a id ="inventoryAnchorId">{{inventoryLbl}}</a>'+
		'</td>'+
		'<td class="headerNavWidth10Txt">'+
			'<a id ="accountingAnchorId">{{accountingLbl}}</a>'+
		'</td>'+
		'<td class="headerNavWidth10Txt">'+
			'<a id ="brkEvenAnchorId">{{brkEvenLbl}}</a>'+
		'</td>	'+		
		
	'</tr>'+
 '</table>'

bakery.page1='</br></br></br>'+
'<table>'+
	'<tr>'+
		'<td>'+
			'<table class="tableRowSpacing">'+
				'<tr>'+					
					'<td class="boldHeaderFrutiger">'+
						'{{welcomeLbl}}</td>'+
				'</tr>'+							
				'<tr>'+					
					'<td class="lightHeaderFrutiger">'+
						'{{getStarted1Lbl}}</br>{{getStarted2Lbl}}</td>'+
				'</tr>'+				
				'<tr>'+					
					'<td><select style="border-radius: 15px; padding: 10px;" class="classic inputTextFont inputDropBoxDimension" id="shopTypeId" onChange="bakery.resetManagerNameFields()">'+
							'<option >{{bakeryLbl}}</option>'+
							'<option >{{cafeLbl}}</option>'+
					'</select></td>'+
				'</tr>'+
				'<tr>'+					
					'<td>'+
						'<table class="tableUnderlineCls">'+
							'<tr class="tableRowCls">'+
								'<td class= "textLblCls">'+
									'Shop&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</br>Name'+
								'</td>'+
								
								'<td>'+
								'<table style="height:100%"><tr><td><input type="text" class="inputTextFont textBoxCls inputTextDimension enterKeyPress" id="shopNameId" maxlength="18" onkeyup="bakery.changeShopNameInImage()"></input>'+
								'</input></td></tr></table>'+
								'</td>'+								
							'</tr>'+
						'</table>'+
					'</td>'+
				'</tr>'+
				'<tr>'+					
					'<td>'+
						'<table class="tableUnderlineCls">'+
							'<tr class="tableRowCls">'+
								'<td class= "textLblCls">'+
									'Manager</br>Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; '+
								'</td>'+
								
								'<td>'+
								'<table style="height:100%"><tr><td><input type="text" class="inputTextFont textBoxCls inputTextDimension enterKeyPress" id="pMngrId" maxlength="30"></input>'+
								'</input></td></tr></table>'+
								'</td>'+								
							'</tr>'+
						'</table>'+
					'</td>'+
				'</tr>'+
				//'<tr>'+					
					//'<td>'+
						//'<table class="tableUnderlineCls">'+
							//'<tr class="tableRowCls">'+
							//	'<td class= "textLblCls">'+
								//	'Second </br>Manager'+
								//'</td>'+
								
								//'<td>'+
								//'<table style="height:100%"><tr><td><input type="text" class="inputTextFont textBoxCls inputTextDimension enterKeyPress" id="sMngrId" //maxlength="30"></input>'+
								//'</input></td></tr></table>'+
								//'</td>'+								
							//'</tr>'+
						//'</table>'+
					//'</td>'+
				//'</tr>'+
			'</table>'+
		'</td>'+
		'<td style="height: 70px; "><div class="container"><img src="images/cafe.svg" style="width:600px;left:200px"><div class="text-block" id="bakeryNameLblDynamic"></div></div></img>'+					
		'</td>'+
	'</tr><tr><td style="text-align: left;font-family: Frutiger45Light;color: #797979;font-size: 16px;"><b>&nbsp;&nbsp;&nbsp;Scenarios</b> :  '+
	'<input type="radio" id="A" name="scenarios" value="A" checked>A.'+ 
	'<input type="radio" id="B" name="scenarios" value="B">B.'+  
	'<input type="radio" id="C" name="scenarios" value="C">C.'+
'</td>'+
'<td></td></tr>'+
'<tr>'+
'<td colspan="2">'+
'</br>&nbsp;&nbsp;<p class="warningMsg" id="shopDetailsValidation">Please enter Shop Name</p>'+
'</td>'+
'</table>';


bakery.page2='</br></br></br>'+
'<table>'+
	'<tr>'+
	'<td style="height: 100px; "><img src="images/location/Mcdonald.jpg" style="width:430px;height:270px" id="locationImgTag"/><div class="locDiv" id="locationFactsTxt" style="word-wrap: break-word;text-align:justify;padding-left:10px;padding-right:10px"></br>&nbsp;&nbsp;LOCATION FACTS </br></br>Mcdonald is restaurant that has fed many american and people around the world. It was found since the 1940s and it spread its influence to around the world.</br></br></div>'+					
		'</td>'+
		'<td style="vertical-align:top">'+
			'<table class="tableRowSpacing">'+
				'<tr>'+					
					'<td class="boldHeaderFrutiger">'+
						'{{pickLocLbl}}</td>'+
				'</tr>'+
				'<tr height = 20px></tr>'+	
				'<tr>'+					
					'<td><select style="border-radius: 15px; padding: 10px;" class="classic inputTextFont inputDropBoxDimensionLoc" id="locationId" onChange="bakery.setPrice();bakery.updateFacts()">'+
							'<option >{{locMarinaLbl}}</option>'+
							'<option >{{locBugisLbl}}</option>'+
							'<option >{{locSerangoonLbl}}</option>'+
					'</select></td>'+
				'</tr>'+
				'<tr height = 5px></tr>'+	
				'<tr>'+					
					'<td>'+
						'<table class="tableUnderlineCls">'+
							'<tr class="tableRowCls">'+
								'<td class= "textLblCls">'+
									'Expected </br>Rental&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp'+
								'</td>'+
								
								'<td>'+
								'<table style="height:100%"><tr><td><input type="text" class="inputTextFont textBoxCls inputTextDimension" id="expRental" readonly></input>'+
								'</input></td></tr></table>'+
								'</td>'+								
							'</tr>'+
						'</table>'+
					'</td>'+
				'</tr>'+
				'<tr height = 5px></tr>'+	
				'<tr>'+					
					'<td>'+
						'<table class="tableUnderlineCls">'+
							'<tr class="tableRowCls">'+
								'<td class= "textLblCls">'+
									'Expected </br>Utility Expenses'+
								'</td>'+
								
								'<td>'+
								'<table style="height:100%"><tr><td><input type="text" class="inputTextFont textBoxCls inputTextDimension" id="expUtility" readonly></input>'+
								'</input></td></tr></table>'+
								'</td>'+								
							'</tr>'+
						'</table>'+
					'</td>'+
				'</tr>'+				
			'</table>'+
		'</td>'+		
	'</tr><tr style="height:40px"></tr>'+
'</table>';


bakery.page3='</br></br></br>'+
'<table>'+
	'<tr>'+	
		'<td style="vertical-align:top;width:70%">'+
			'<table class="tableRowSpacing" style="width:100%;height:100%">'+
				'<tr>'+					
					'<td class="boldHeaderFrutiger">'+
						'{{hireStaffLbl}}</br></td>'+
				'</tr>'+
				'<tr > <td class="lightHeaderFrutiger" style="font-size:24px;"><div style="height : 80px">Now choose number of employees, they will help in cooking and serving. </div></td></tr>'+	
				'<tr>'+					
					'<td>'+
					   '<table class="staffDetailsTable">'+
						 '<tr>'+
							'<td style="width:30px"></td>'+
						    '<td>'+
							'<p class="whiteInputTextLight" style="font-size: 14px;">'+
							'Title'+
							'</p>'+
							'<font class="whiteInputTextBold" style="font-size: 24px;" id="staffSpecialityDynamic">'+
							
							staff[0][2]+						
							'</font>'+
							'</td>'+
						 '</tr>'+
						 '<tr>'+
							'<td style="width:30px"></td>'+
							'<td>'+
							'<p class="whiteInputTextLight" style="font-size: 14px;">'+
							'Speciality</br>'+
							'</p>'+
							'<p class="whiteInputTextBold" style="font-size: 24px;" id="staffSpecialityDynamic">'+
							
							staff[0][1]+						
							'</p>'+
							'</td>'+
							'<td>'+
							'<p class="whiteInputTextLight" style="font-size: 14px;">'+							
							'Monthly Salary</br>'+
							'</p>'+
							'<p class="whiteInputTextBold" style="font-size: 24px;" id="staffSalaryDynamic">'+			
							staff[0][0]+							
							'</p>'+
							'</td>'+							
						 '</tr>'+
						 '<tr>'+
							'<td style="width:30px"></td><td ></td>'+
							'<td  class="whiteInputTextLight" style="font-size: 14px;height:70px">'+
							   '<table>'+
							   '<tr>'+
							   '<td>'+
							    '{{hireQtyStaffLbl}}'+
							   '</td>'+							    
							   '<td  style="background-color: white;border-radius:10px;">'+
								'<div><img src="images/btn-minus.svg" style="vertical-align: middle" onClick="bakery.hireStaffDecrement()"/><input type="text" style="width:20px;vertical-align: middle;border:0;padding:10px;outline:none" id="staffQtyDynamic" class="inputTextFont" readOnly></input>'+
								'<img src="images/btn-plus.svg" style="vertical-align: middle" onClick="bakery.hireStaffIncrement()"/></div>'+
							   '</td>'+
							   '</tr>'+
							   '</table>'+				
							'</td>'+
						 '</tr>'+
					 '</table>'+
					'</td>'+
				'</tr>'+
'<tr>'+
'<td>'+
'<p class="warningMsg" id="employeeValidation">You can select a max of 5 employees</p>'+
'</td>'+
'</tr>'+				
			'</table>'+
		'</td>'+
		'<td style="height: 100px;width:30% "><img src="images/bubble.png" style="width:200px;padding-left:300px"/><img src="images/chef.svg" style="padding-left:150px"/>'+					
		'</td>'+		
	'</tr><tr style="height:30px"></tr>'+
'</table>';

bakery.page4='</br></br></br>'+
'<table style="height:100%; width:100%">'+
	'<tr>'+
	  '<td class="boldHeaderFrutiger" colspan="7">{{ExpLbl}}</td>'+
	'</tr>'+
    '<tr>'+
	  '<td class="lightHeaderFrutiger" style="font-size:24px;" colspan="7">{{expLbl1}}</td>'+
	  
	'</tr>'+
	'</tr><tr style="height:30px"></tr>'+
	'<tr>'+
	  '<td class="boldHeaderFrutiger" style="font-size:16px;" colspan="2">{{mnthlyRentalLbl}}</td>'+
	  '<td class="boldHeaderFrutiger" style="font-size:16px;" colspan="2">{{mnthlyUtilityLbl}}</td>'+
	  '<td class="boldHeaderFrutiger" style="font-size:16px;" colspan="2">{{mnthlySalaryLbl}}</td>'+
	   '<td class="boldHeaderFrutiger" style="font-size:16px;">{{mnthlyFixedLbl}}  &nbsp;&nbsp;<div  class="tooltip"><img src="images/icon-info.png"  style="width:20px"><span class="tooltiptext">Any expense that does not change from period to period,such as mortgage or rent payments, utility bills, and loan payments</span></img></div></td>'+
	'</tr><tr style="height:10px"></tr>'+
	'<tr style="height:5px">'+	
	  '<td class="boldHeaderFrutiger" style="font-size:16px;"><input type="text" class="inputTextFont expTextBoxCls" style="font-color:black;"  id="mnthlyRen" readonly></input></td>'+
	  '<td><div style="color:white">+</div></td>'+
	  '<td class="boldHeaderFrutiger" style="font-size:16px;"><input type="text" class="inputTextFont expTextBoxCls" style="font-color:black;"  id="mnthlyUtility" readonly></input></td>'+
	  '<td><div style="color:white">+</div></td>'+
	  '<td class="boldHeaderFrutiger" style="font-size:16px;"><input type="text" class="inputTextFont expTextBoxCls" style="font-color:black;"  id="mnthlySalary" readonly></input></td>'+
	  '<td><div style="color:white">=</div></td>'+
	   '<td style="vertical-align: bottom;" class="inputTextFont">$&nbsp;<input type="number" class="inputTextFont expTextBoxCls" id="mnthlyTotalExpenses" onChange="bakery.hideNextButtonExpPage()" oninput="bakery.limitMnthlyFixedExp(this)"></input>&nbsp;&nbsp;<input type="button" value="Evaluate" class="buttonIdCls" onClick="bakery.evaluateFixedExp()"/></td>'+
	'</tr>'+
	'<tr>'+
	  '<td colspan="6">&nbsp;</td>'+	 
	  '<td colspan="1"><div id="evalResult"></div></td>'+	
	'</tr>'+
	'</tr>'+	
	'<tr>'+
	  '<td class="lightHeaderFrutiger" style="font-size:24px;" colspan="7">{{expLbl2}}</td>'+	 
	'</tr>'+
	'</tr>'+	
	'<tr>'+
	  '<td colspan="7"><div id="selectionsMade" style="width:100% ; height:100%">'+
			'</div>'+
			'</td>'+
	'</tr>'+
	'</tr><tr style="height:30px"></tr>'+
'</table>';
bakery.page5_Bakery='</br><p class="boldHeaderFrutiger" style="height:10px">Inventory List</p><ul>'+  
  '<li style="display:none"><input type="checkbox" id="cb1" onClick="return false;" />'+
    '<label for="cb1"><div class="container"><img src="'+chkBoxImageAndPriceBakery[0][0]+'"><div class="inventoryPrice">'+
	chkBoxImageAndPriceBakery[0][1]+
	'</div></div></img></label></li>'+
  '<li style="display:none"><input type="checkbox" id="cb2" onClick="return false;" />'+
    '<label for="cb2"><div class="container"><img src="'+chkBoxImageAndPriceBakery[1][0]+'"><div class="inventoryPrice">'+
	chkBoxImageAndPriceBakery[1][1]+
	'</div></div></img></label></li>'+
  '<li style="display:none"><input type="checkbox" id="cb3" onClick="return false;" />'+
    '<label for="cb3"><div class="container"><img src="'+chkBoxImageAndPriceBakery[2][0]+'"><div class="inventoryPrice">'+
	chkBoxImageAndPriceBakery[2][1]+
	'</div></div></img></label></li>'+
  '<li style="display:none"><input type="checkbox" id="cb4" onClick="return false;" />'+
    '<label for="cb4"><div class="container"><img src="'+chkBoxImageAndPriceBakery[3][0]+'"><div class="inventoryPrice">'+
	chkBoxImageAndPriceBakery[3][1]+
	'</div></div></img></label></li>'+
  '<li style="display:none"><input type="checkbox" id="cb5" onClick="return false;" />'+
    '<label for="cb5"><div class="container"><img src="'+chkBoxImageAndPriceBakery[4][0]+'"><div class="inventoryPrice">'+
	chkBoxImageAndPriceBakery[4][1]+
	'</div></div></img></label></li>'+
  '<li style="display:none"><input type="checkbox" id="cb6" onClick="return false;" />'+
    '<label for="cb6"><div class="container"><img src="'+chkBoxImageAndPriceBakery[5][0]+'"><div class="inventoryPrice">'+
	chkBoxImageAndPriceBakery[5][1]+
	'</div></div></img></label></li>'+
  '<li style="display:none"><input type="checkbox" id="cb7" onClick="return false;" />'+
    '<label for="cb7"><div class="container"><img src="'+chkBoxImageAndPriceBakery[6][0]+'"><div class="inventoryPrice">'+
	chkBoxImageAndPriceBakery[6][1]+
	'</div></div></img></label></li>'+
  '<li style="display:none"><input type="checkbox" id="cb8" onClick="return false;" />'+
    '<label for="cb8"><div class="container"><img src="'+chkBoxImageAndPriceBakery[7][0]+'"><div class="inventoryPrice">'+
	chkBoxImageAndPriceBakery[7][1]+
	'</div></div></img></label></li></br></br><p class="warningMsg" id="errMsgInventory"></p><p class="lightHeaderFrutiger" style="height:30px;font-size:24px">Purchase items you need and calculate the total cost.</p>'+
  '<li><input type="checkbox" id="cb9" onClick="bakery.selectIngridients(\'cb9\');"/>'+
    '<label for="cb9"><div class="container"><img src="'+chkBoxImageAndPriceBakery[8][0]+'"><div class="inventoryPrice">'+
	chkBoxImageAndPriceBakery[8][1]+
	'</div></div></img></label><div class="inventoryItemName">'+chkBoxImageAndPriceBakery[8][2]+'</div></li>'+
  '<li><input type="checkbox" id="cb10" onClick="bakery.selectIngridients(\'cb10\');"/>'+
    '<label for="cb10"><div class="container"><img src="'+chkBoxImageAndPriceBakery[9][0]+'"><div class="inventoryPrice">'+
	chkBoxImageAndPriceBakery[9][1]+
	'</div></div></img></label><div class="inventoryItemName">'+chkBoxImageAndPriceBakery[9][2]+'</div></li>'+
  '<li><input type="checkbox" id="cb11" onClick="bakery.selectIngridients(\'cb11\');"/>'+
    '<label for="cb11"><div class="container"><img src="'+chkBoxImageAndPriceBakery[10][0]+'"><div class="inventoryPrice">'+
	chkBoxImageAndPriceBakery[10][1]+
	'</div></div></img></label><div class="inventoryItemName">'+chkBoxImageAndPriceBakery[10][2]+'</div></li>'+
   '<li><input type="checkbox" id="cb12" onClick="bakery.selectIngridients(\'cb12\');"/>'+
    '<label for="cb12"><div class="container"><img src="'+chkBoxImageAndPriceBakery[11][0]+'"><div class="inventoryPrice">'+
	chkBoxImageAndPriceBakery[11][1]+
	'</div></div></img></label><div class="inventoryItemName">'+chkBoxImageAndPriceBakery[11][2]+'</div></li>'+
   '<li><input type="checkbox" id="cb13" onClick="bakery.selectIngridients(\'cb13\');"/>'+
    '<label for="cb13"><div class="container"><img src="'+chkBoxImageAndPriceBakery[12][0]+'"><div class="inventoryPrice">'+
	chkBoxImageAndPriceBakery[12][1]+
	'</div></div></img></label><div class="inventoryItemName">'+chkBoxImageAndPriceBakery[12][2]+'</div></li>'+
   '<li><input type="checkbox" id="cb14" onClick="bakery.selectIngridients(\'cb14\');"/>'+
    '<label for="cb14"><div class="container"><img src="'+chkBoxImageAndPriceBakery[13][0]+'"><div class="inventoryPrice">'+
	chkBoxImageAndPriceBakery[13][1]+
	'</div></div></img></label><div class="inventoryItemName">'+chkBoxImageAndPriceBakery[13][2]+'</div></li>'+
   '<li><input type="checkbox" id="cb15" onClick="bakery.selectIngridients(\'cb15\');"/>'+
    '<label for="cb15"><div class="container"><img src="'+chkBoxImageAndPriceBakery[14][0]+'"><div class="inventoryPrice">'+
	chkBoxImageAndPriceBakery[14][1]+
	'</div></div></img></label><div class="inventoryItemName">'+chkBoxImageAndPriceBakery[14][2]+'</div></li>'+
  '<li><input type="checkbox" id="cb16" onClick="bakery.selectIngridients(\'cb16\')"/>'+
    '<label for="cb16"><div class="container"><img src="'+chkBoxImageAndPriceBakery[15][0]+'"><div class="inventoryPrice">'+
	chkBoxImageAndPriceBakery[15][1]+
	'</div></div></img></label><div class="inventoryItemName">'+chkBoxImageAndPriceBakery[15][2]+'</div></li>'+
'</ul>'+
'</br>'+
'</br>'+
'</br>'+
'<table style="padding-left:270px"><tr><td style="border: none;border-bottom: solid;border-color: #737373;margin-left: 100px;"><font style="font-family: Frutiger45Light;font-size: 16px;font-weight: bold;color: #797979;">Total Item Cost:</font>&nbsp;&nbsp;&nbsp;<font style="font-family: Frutiger45Light;font-size: 20px;color: black;">$&nbsp;</font><input type="number" id="totalInvExpTxt" class="inputTextFont" oninput="bakery.limitInventoryExp(this)" style="width:100px; border: none;'+
    'background-color: #F6F6F6;"></input></td><td><input type="button" value="Evaluate" class="buttonIdCls" onClick="bakery.evaluateInvExp()"/></td></tr><tr><td style="border: none" colspan="2"><div id="evalResult"></div></td></tr></table>';
	
bakery.page5_Cafe='</br><p class="boldHeaderFrutiger" style="height:10px">Inventory List</p><ul>'+  
  '<li style="display:none"><input type="checkbox" id="cb1" onClick="return false;" />'+
    '<label for="cb1"><div class="container"><img src="'+chkBoxImageAndPriceCafe[0][0]+'"><div class="inventoryPrice">'+
	chkBoxImageAndPriceCafe[0][1]+
	'</div></div></img></label></li>'+
  '<li  style="display:none"><input type="checkbox" id="cb2" onClick="return false;" />'+
    '<label for="cb2"><div class="container"><img src="'+chkBoxImageAndPriceCafe[1][0]+'"><div class="inventoryPrice">'+
	chkBoxImageAndPriceCafe[1][1]+
	'</div></div></img></label></li>'+
  '<li style="display:none"><input type="checkbox" id="cb3" onClick="return false;" />'+
    '<label for="cb3"><div class="container"><img src="'+chkBoxImageAndPriceCafe[2][0]+'"><div class="inventoryPrice">'+
	chkBoxImageAndPriceCafe[2][1]+
	'</div></div></img></label></li>'+
  '<li  style="display:none"><input type="checkbox" id="cb4" onClick="return false;" />'+
    '<label for="cb4"><div class="container"><img src="'+chkBoxImageAndPriceCafe[3][0]+'"><div class="inventoryPrice">'+
	chkBoxImageAndPriceCafe[3][1]+
	'</div></div></img></label></li>'+
  '<li  style="display:none"><input type="checkbox" id="cb5" onClick="return false;" />'+
    '<label for="cb5"><div class="container"><img src="'+chkBoxImageAndPriceCafe[4][0]+'"><div class="inventoryPrice">'+
	chkBoxImageAndPriceCafe[4][1]+
	'</div></div></img></label></li>'+
  '<li  style="display:none"><input type="checkbox" id="cb6" onClick="return false;" />'+
    '<label for="cb6"><div class="container"><img src="'+chkBoxImageAndPriceCafe[5][0]+'"><div class="inventoryPrice">'+
	chkBoxImageAndPriceCafe[5][1]+
	'</div></div></img></label></li>'+
  '<li  style="display:none"><input type="checkbox" id="cb7" onClick="return false;" />'+
    '<label for="cb7"><div class="container"><img src="'+chkBoxImageAndPriceCafe[6][0]+'"><div class="inventoryPrice">'+
	chkBoxImageAndPriceCafe[6][1]+
	'</div></div></img></label></li>'+
  '<li  style="display:none"><input type="checkbox" id="cb8" onClick="return false;" />'+
    '<label for="cb8"><div class="container"><img src="'+chkBoxImageAndPriceCafe[7][0]+'"><div class="inventoryPrice">'+
	chkBoxImageAndPriceCafe[7][1]+
	'</div></div></img></label></li></br></br><p class="warningMsg" id="errMsgInventory"></p><p class="lightHeaderFrutiger" style="height:30px;font-size:24px">Purchase items you need and calculate the total cost.</p>'+
  '<li><input type="checkbox" id="cb9" onClick="bakery.selectIngridients(\'cb9\');"/>'+
    '<label for="cb9"><div class="container"><img src="'+chkBoxImageAndPriceCafe[8][0]+'"><div class="inventoryPrice">'+
	chkBoxImageAndPriceCafe[8][1]+
	'</div></div></img></label><div class="inventoryItemName">'+chkBoxImageAndPriceCafe[8][2]+'</div></li>'+
  '<li><input type="checkbox" id="cb10" onClick="bakery.selectIngridients(\'cb10\');"/>'+
    '<label for="cb10"><div class="container"><img src="'+chkBoxImageAndPriceCafe[9][0]+'"><div class="inventoryPrice">'+
	chkBoxImageAndPriceCafe[9][1]+
	'</div></div></img></label><div class="inventoryItemName">'+chkBoxImageAndPriceCafe[9][2]+'</div></li>'+
  '<li><input type="checkbox" id="cb11" onClick="bakery.selectIngridients(\'cb11\');"/>'+
    '<label for="cb11"><div class="container"><img src="'+chkBoxImageAndPriceCafe[10][0]+'"><div class="inventoryPrice">'+
	chkBoxImageAndPriceCafe[10][1]+
	'</div></div></img></label><div class="inventoryItemName">'+chkBoxImageAndPriceCafe[10][2]+'</div></li>'+
   '<li><input type="checkbox" id="cb12" onClick="bakery.selectIngridients(\'cb12\');"/>'+
    '<label for="cb12"><div class="container"><img src="'+chkBoxImageAndPriceCafe[11][0]+'"><div class="inventoryPrice">'+
	chkBoxImageAndPriceCafe[11][1]+
	'</div></div></img></label><div class="inventoryItemName">'+chkBoxImageAndPriceCafe[11][2]+'</div></li>'+
   '<li><input type="checkbox" id="cb13" onClick="bakery.selectIngridients(\'cb13\');"/>'+
    '<label for="cb13"><div class="container"><img src="'+chkBoxImageAndPriceCafe[12][0]+'"><div class="inventoryPrice">'+
	chkBoxImageAndPriceCafe[12][1]+
	'</div></div></img></label><div class="inventoryItemName">'+chkBoxImageAndPriceCafe[12][2]+'</div></li>'+
   '<li><input type="checkbox" id="cb14" onClick="bakery.selectIngridients(\'cb14\');"/>'+
    '<label for="cb14"><div class="container"><img src="'+chkBoxImageAndPriceCafe[13][0]+'"><div class="inventoryPrice">'+
	chkBoxImageAndPriceCafe[13][1]+
	'</div></div></img></label><div class="inventoryItemName">'+chkBoxImageAndPriceCafe[13][2]+'</div></li>'+
   '<li><input type="checkbox" id="cb15" onClick="bakery.selectIngridients(\'cb15\');"/>'+
    '<label for="cb15"><div class="container"><img src="'+chkBoxImageAndPriceCafe[14][0]+'"><div class="inventoryPrice">'+
	chkBoxImageAndPriceCafe[14][1]+
	'</div></div></img></label><div class="inventoryItemName">'+chkBoxImageAndPriceCafe[14][2]+'</div></li>'+
  '<li><input type="checkbox" id="cb16" onClick="bakery.selectIngridients(\'cb16\')"/>'+
    '<label for="cb16"><div class="container"><img src="'+chkBoxImageAndPriceCafe[15][0]+'"><div class="inventoryPrice">'+
	chkBoxImageAndPriceCafe[15][1]+
	'</div></div></img></label><div class="inventoryItemName">'+chkBoxImageAndPriceCafe[15][2]+'</div></li>'+ 
'</ul>'+
'</br>'+
'</br>'+
'</br>'+
'<table style="padding-left:270px"><tr><td style="border: none;border-bottom: solid;border-color: #737373;margin-left: 100px;"><font style="font-family: Frutiger45Light;font-size: 16px;font-weight: bold;color: #797979;">Total Item Cost:</font>&nbsp;&nbsp;&nbsp;<font style="font-family: Frutiger45Light;font-size: 20px;color: black;">$&nbsp;</font><input type="number" id="totalInvExpTxt" class="inputTextFont" oninput="bakery.limitInventoryExp(this)" style="width:100px; border: none;'+
    'background-color: #F6F6F6;"></input></td><td><input type="button" value="Evaluate" class="buttonIdCls" onClick="bakery.evaluateInvExp()"/></td></tr><tr><td style="border: none" colspan="2"><div id="evalResult"></div></td></tr></table>';
	
	

bakery.page6='</br></br></br>'+
'<table style="height:100%; width:100%">'+
	'<tr>'+
	  '<td class="boldHeaderFrutiger" colspan="5">{{contributionmargin1Lbl}}</td>'+
	'</tr>'+
    '<tr>'+
	  '<td class="lightHeaderFrutiger" style="font-size:24px;" colspan="5">Contribution margin is Selling price - Variable expense</td>'+
	  
	'</tr>'+
	'</tr><tr style="height:30px"></tr>'+
	'<tr>'+
	  '<td class="boldHeaderFrutiger" style="font-size:16px;" colspan="2">{{sellingPriceLbl}}</td>'+
	  '<td class="boldHeaderFrutiger" style="font-size:16px;" colspan="2">{{variableExpLbl}}</td>'+	  
	   '<td class="boldHeaderFrutiger" style="font-size:16px;">{{contriMarginLbl}}  &nbsp;&nbsp;<div  class="tooltip"><img src="images/icon-info.png"  style="width:20px"><span class="tooltiptext" style="width: 300px;">Contribution margin, or dollar contribution per unit, is the selling price per unit minus the variable cost per unit. "Contribution" represents the portion of sales revenue that is not consumed by variable costs and so contributes to the coverage of fixed costs.</span></img></div></td>'+
	'</tr><tr style="height:10px"></tr>'+
	'<tr style="height:5px">'+	
	  '<td style="font-size:16px;"><font style="font-family: Frutiger45Light;font-size: 20px;color: black;">$&nbsp;</font><input type="number" class="inputTextFont expTextBoxCls" style="font-color:black;" id="sellingPriceTxt" onChange="bakery.hideNextButtonContriPage()" onBlur="bakery.roundTheSPValue()" maxlength="18"></input>'+
								'</input></td>'+
	  '<td style="width:50px"><div>-</div></td>'+
	  '<td style="font-size:16px;"><font style="font-family: Frutiger45Light;font-size: 20px;color: black;">$&nbsp;</font><input type="number" class="inputTextFont expTextBoxCls" style="font-color:black;" id="variableCostTxt" readonly></input>'+
								'</input></td>'+
	  
	  '<td style="width:50px"><div>=</div></td>'+
	   '<td style="font-size:16px;"><font style="font-family: Frutiger45Light;font-size: 20px;color: black;">$&nbsp;</font><input type="number" class="inputTextFont expTextBoxCls" style="font-color:black;" id="contriMarginTxt" onChange="bakery.hideNextButtonContriPage()" oninput="bakery.limitContriMarginExp(this)"></input>'+
								'</input>&nbsp;&nbsp;<input type="button" value="Evaluate" class="buttonIdCls" onClick="bakery.evaluateContriExp()"/></td>'+
	'</tr>'+
	'<tr>'+
	  '<td colspan="4"><div id="spValidation" style="word-wrap: break-word;"></td>'+		  	 
	  '<td colspan="1"><div id="evalResult"></div></td>'+	
	'</tr>'+
	'</tr>'+	
	'<tr>'+
	  '<td class="lightHeaderFrutiger" style="font-size:24px;" colspan="5">Variable items that you choose are:</br></br></td>'+	 
	'</tr>'+
	'</tr>'+	
	'<tr>'+
	  '<td colspan="5"><div id="selectionsMadeVariable" style="width:100% ; height:100%">'+
			'</div>'+
			'</td>'+
	'</tr>'+
	'</tr><tr style="height:30px"></tr>'+
'</table>';


bakery.page7='</br></br></br>'+
'<table style="height:100%; width:100%">'+
	'<tr>'+
	  '<td class="boldHeaderFrutiger" colspan="5">{{breakEven1Lbl}}</td>'+
	'</tr>'+
    '<tr>'+
	  '<td class="lightHeaderFrutiger" style="font-size:24px;" colspan="5">Break Even Unit is Total monthly fixed expense / Contribution margin</td>'+
	  
	'</tr>'+
	'</tr><tr style="height:30px"></tr>'+
	'<tr>'+
	  '<td class="boldHeaderFrutiger" style="font-size:16px;" colspan="2">{{fixedExpLbl}}</td>'+
	  '<td class="boldHeaderFrutiger" style="font-size:16px;" colspan="2">{{contriMarginLbl}}</td>'+	  
	   '<td class="boldHeaderFrutiger" style="font-size:16px;">{{brkEvenUnitLbl}}  &nbsp;&nbsp;<div  class="tooltip"><img src="images/icon-info.png"  style="width:20px"><span class="tooltiptext" style="width: 300px;">The breakeven number of units, as the name suggests, is the number of units of goods or services that a company needs to sell in order to break even, or in other words, to suffer no financial losses but also make no profit.</span></img></div></td>'+
	'</tr><tr style="height:10px"></tr>'+
	'<tr style="height:5px">'+	
	  '<td style="font-size:16px;"><font style="font-family: Frutiger45Light;font-size: 20px;color: black;">$&nbsp;</font><input type="text" class="inputTextFont expTextBoxCls" style="font-color:black;" id="fxdPriceTxt" onChange="bakery.hideNextButtonBrkEvenPage()" readonly></input>'+
								'</input></td>'+
	  '<td style="width:50px"><div style="color:white">/</div></td>'+
	  '<td style="font-size:16px;"><font style="font-family: Frutiger45Light;font-size: 20px;color: black;">$&nbsp;</font><input type="text" class="inputTextFont expTextBoxCls" style="font-color:black;" id="contriMarginTxt" readonly></input>'+
								'</input></td>'+
	  
	  '<td style="width:50px"><div style="color:white">=</div></td>'+
	   '<td class="boldHeaderFrutiger" style="font-size:16px;">&nbsp;<input type="number" class="inputTextFont expTextBoxCls" style="font-color:black;" id="breakEvenUnitTxt" onChange="bakery.hideNextButtonBrkEvenPage()" oninput="bakery.limitBrkEvenUnit(this)"></input>'+
								'</input>&nbsp;&nbsp;<input type="button" value="Evaluate" class="buttonIdCls" onClick="bakery.evaluateBreakEvenUnitExp()"/></td>'+
	'</tr>'+
	'<tr>'+
	  '<td colspan="4">&nbsp;</td>'+	 
	  '<td colspan="1"><div id="evalResult"></div></td>'+	
	'</tr>'+
	'</tr>'+	
	'<tr>'+
	  '<td class="lightHeaderFrutiger" style="font-size:24px;" colspan="5"></br></br></td>'+	 
	'</tr>'+
	'</tr>'+	
	'<tr>'+
	  '<td colspan="5">'+
	  '<div id="scroller" style="width: 1100px; height: 200px; margin: 0 auto;">'+
      ' <div class="innerScrollArea">'+
         '<ul id="populatescrollingImagesIndex">'+
		 '<table><tr><td class="lightHeaderFrutiger" style="font-size:24px;"><input type="button" value="Shop Type" class="buttonIdCls" onClick="bakery.showFinalPageDetails(\'shopDetails\')"/></td><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td><td class="lightHeaderFrutiger"'+
				'style="font-size:24px;"><input type="button" value="Location" class="buttonIdCls" onClick="bakery.showFinalPageDetails(\'locDetails\')"/></td>'+
				'<td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td><td class="lightHeaderFrutiger" style="font-size:24px;"><input type="button" value="Staff" class="buttonIdCls" onClick="bakery.showFinalPageDetails(\'empDetails\')"/></td>'+
				'<td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td><td class="lightHeaderFrutiger" style="font-size:24px;"><input type="button" value="Inventory" class="buttonIdCls" onClick="bakery.showFinalPageDetails(\'invDetails\')"/></td>'+
				'</tr></table></br></br><div id="detailImages"><img src="'+'images/cafe.svg '+'" style="height:100px" /></div>'+			
         '</ul>'+
     '</div>'+
 '</div>'+
			'</td>'+
	'</tr>'+
	'</tr><tr style="height:30px"></tr>'+
'</table>';

bakery.page8='</br></br><p id="resultDisplay" style="margin-left:50px" class="inputTextFont"></p>'+
'<div style="height:700px; width:700px;margin-left:50px ">'+
    '<canvas id="Chart"></canvas>'+
	'</br><canvas id="Chart"></canvas>'+
	'</br><input type="button" value="Start again" style="margin-left:900px" class="buttonIdCls" onClick="bakery.startGameAgain();"/>'+
'</div>';

bakery.page9='<p id="page9Text" class="inputTextFont">this is about page</p>';

bakery.page10='<p id="page10Text" class="inputTextFont">this is more info page</p>';

bakery.showcalculator='<table><tr><td class="lightHeaderFrutiger" style="font-size:12px;padding-left:0px;padding-top:50px">{{calcLbl}}<img src="images/calculator.svg" onclick="bakery.showCalculator()" id="calcImg"/></td></tr>'+
	  '<tr><td><div class="popup">'+
			  '<span class="popuptext" id="myPopup">'+
			  '           <input type="text" readonly size="10" maxlength="7" id="numberInput">'+
			'           <input id="calcButton"  type="button" class="button gray" value="7" onclick="bakery.addToDisplay(7)">'+
			'           <input id="calcButton" class="button gray" type="button" value="8" onclick="bakery.addToDisplay(8)">'+
			'           <input id="calcButton" class="button gray" type="button" value="9" onclick="bakery.addToDisplay(9)">'+
			'           <input id="calcButton" class="button pink" type="button" value="/" onclick="bakery.addToDisplay(\'/\')">'+
			'           <input id="calcButton" class="button gray" type="button" value="4" onclick="bakery.addToDisplay(4)">'+
			'           <input id="calcButton" class="button gray" type="button" value="5" onclick="bakery.addToDisplay(5)">'+
			'           <input id="calcButton" class="button gray" type="button" value="6" onclick="bakery.addToDisplay(6)">'+
			'           <input id="calcButton" class="button pink" type="button" value="*" onclick="bakery.addToDisplay(\'*\')">'+
			'           <input id="calcButton" class="button gray" type="button" value="1" onclick="bakery.addToDisplay(1)">'+
			'           <input id="calcButton" class="button gray" type="button" value="2" onclick="bakery.addToDisplay(2)">'+
			'           <input id="calcButton" class="button gray" type="button" value="3" onclick="bakery.addToDisplay(3)">'+
			'           <input id="calcButton" class="button pink" type="button" value="+" onclick="bakery.addToDisplay(\'+\')">'+
			'           <input id="calcButton" class="button orange" type="button" value="C" onclick="bakery.addToDisplay(\'C\')">'+
			'           <input id="calcButton" class="button gray" type="button" value="0" onclick="bakery.addToDisplay(0)">'+
			'           <input id="calcButton" class="button orange" type="button" value="=" onclick="bakery.addToDisplay(\'=\')">'+
			'           <input id="calcButton" class="button pink" type="button" value="-" onclick="bakery.addToDisplay(\'-\')">'+
			'           <input id="calcButton" class="button gray" type="button" value="&#x2717; " onclick="bakery.showCalculator()">'+
			'           <input id="calcButton" class="button gray" type="button" value="." onclick="bakery.addToDisplay(\'.\')">'+
			'			<input id="calcButton" class="button gray" type="button" value="Copy" style="width:50px" onclick="bakery.copyTheValue()">'+
			'			<input id="calcButton" class="button gray" type="button" value="&larr;" style="width:50px" onclick="bakery.addToDisplay(\'DEL\')">'+

			  '</span>'+
			'</div>'+
	  '</td></tr></table>';
	  
bakery.showWaitingPopup='<div id="myModal" class="modal">'+  
  '<div class="modal-content">'+  
    '<span class="close"><img src="images/bakery_no-signage.gif" style="height: 100%;width: 100%;"><div class="text-blockgif" id="bakeryNameLblDynamicGif"></div></span><div class="text-blockgif1" id="bakeryNameLblDynamicGif">Please wait while your shop runs for a month !!</div>'+

 ' </div>'+
'</div>';

bakery.moreInfoPopup='<div id="myModalmoreInfo" class="modal">'+  
  '<div class="modal-content">'+
    '<span class="close">dfgdfgdfg</span>'+
 ' </div>'+
'</div>'

	
