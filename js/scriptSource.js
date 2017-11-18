$(document).ready(function() {

		var key = "";
		var list = "<tr><th>Resort</th></tr>";
		var i = 0;
		for (i = 0; i <= localStorage.length - 1; i++) {
			
			
				key = localStorage.key(i);

				if(key!='isFront'){
				list += "<tr><td>" + key + "</td></tr>";				
				}
							
		}
		if (list == "<tr><th>Resort</th></tr>") {
			list += "<tr><td><i>empty</i></td></tr>";
		}
		document.getElementById('list').innerHTML = list;
		
		
		
	
//the JSON array objects are saved in an array named resorts and it is set to variable data
  var data = { 
	"resorts": [
        {
                   "id":"resort1",
	 "destination":"Carribean",
	 "name":"Sterling Stay Destin",
                   "location":"Martinique",
                   "comfortLevel": "3 star",
                   "activities":["water skiing","scuba diving", "kitesurf", "spa","golf", "sailing"],
	 "price":2500,
	 "startDate":"2016-01-01",
	 "endDate":"2016-12-31",
	 "short_description":"The resort of Sterling Stay Destin is located on the laid-back beach-covered south coast of the island, and is perfectly placed for Martinique holidays that are both relaxing and awe-inspiring.",
	 "picture":"images/big1.jpg",
	 "long_description":"Fire up the grill in the backyard for an easy dinner or enjoy an array of culinary specialties at Destins many great restaurants just a short distance from your beach home. ",
	 "url":"resort1.html"
        },
  {
                   "id":"resort2",
	 "destination":"The Alps",
	 "name":"Playing Hooky",
                   "location":"Italy",
                   "comfortLevel": "4 star",
                   "activities":["horse riding", "sailing", "scuba diving", "kitesurf", "swimming", "waterskiing"],
	 "price":1254,
	 "startDate":"2016-02-01",
	 "endDate":"2016-10-31",
	 "short_description":"The resort of Playing Hooky is located on the laid-back Santa Rosa Beach-covered south coast of the island, and is placed for Italy holidays for relaxing and awe-inspiring.",
	 "picture":"images/hooky5.jpg",
	 "long_description":"Daily chair rentals are offered along the resort’s 600 ft. of private beach.Relax by either of the two pools and cool off with refreshments from the Pavilion Grill & Bar or Poolside Tiki Bar",
	 "url":"resort2.html"
        },
  {
                   "id":"resort3",
	 "destination":"Europe",
	 "name":"Tides at Tops",
                   "location":"France",
                   "comfortLevel": "5 star",
                   "activities":["water skiing", "tennis", "scuba diving", "kitesurf", "spa"],
	 "price":1599,
	 "startDate":"2016-01-01",
	 "endDate":"2016-12-31",
	 "short_description":"The resort of Tides is located on the laid-back beach-covered south coast of the island, and is perfectly placed for France holidays that are both relaxing and awe-inspiring.",
	 "picture":"images/tides1.jpg",
	 "long_description":"Immerse yourself in the beauty of the soft white powdery beach and clear emerald green waters steps away from the condo. Our beach was recently voted the 1 Best Beach in the nation by Southern Living magazine.",
	 "url":"resort3.html"
        },
  {
                   "id":"resort4",
	 "destination":"Africa",
	 "name":"Mamas Happy",
                   "location":"South Africa",
                   "comfortLevel": "3 star",
                   "activities":["tennis", "hiking", "scuba diving", "swimming"],
	 "price":1999,
	 "startDate":"2016-06-01",
	 "endDate":"2016-08-31",
	 "short_description":"The resort of Mamas Happy is located on the laid-back beach-covered south coast of the island, and is perfectly placed for South Africa holidays that are both relaxing and awe-inspiring.",
	 "picture":"images/mama1.jpg",
	 "long_description":"Welcome to Mama’s Happy! A beautiful upscale modern beach home with 6 bedrooms 5 bathrooms and a private pool and a 2story guest cottage located just a block to the pristine beaches of Destin.  This home has 3 different living areas providing plenty of privacy for multiple families .",
	 "url":"resort4.html"
        },  {
                   "id":"resort5",
	 "destination":"Australia",
	 "name":"Grand East",
                   "location":"Australia",
                   "comfortLevel": "4 star",
                   "activities":["horse riding", "tennis", "scuba diving", "kitesurf", "kids club"],
	 "price":2199,
	 "startDate":"2016-03-01",
	 "endDate":"2016-07-31",
	 "short_description":"The resort of Grand East is located on the laid-back beach-covered south coast of Australia, and is perfectly placed for Malaysia holidays that are both relaxing and awe-inspiring.",
	 "picture":"images/grand1.jpg",
	 "long_description":"Grand East is a wonderful condominium community in the quiet friendly neighborhood of Crystal Beach right across from the beach access with a private pool.",
	 "url":"resort5.html"
        },  {
                   "id":"resort6",
	 "destination":"North and Central America",
	 "name":"Omega Inn",
                   "location":"California",
                   "comfortLevel": "3 star",
                   "activities":["water skiing", "tennis", "scuba diving", "kitesurf", "spa"],
	 "price":1000,
	 "startDate":"2016-03-01",
	 "endDate":"2016-05-31",
	 "short_description":"The resort of Omega is located on the laid-back beach-covered south coast of the island, and is perfectly placed for America holidays that are both relaxing and awe-inspiring.",
	 "picture":"images/omega1.jpg",
	 "long_description":"Immerse yourself in the beauty of the soft white powdery beach just steps away from the condo. Our beach was voted the #1 Best Beach in the nation by Southern Living magazine and continues to be a vacation hot spot for families! Daily chair rentals are offered.",
	 "url":"resort6.html"
        },  {
                   "id":"resort7",
	 "destination":"South America",
	 "name":"Toes in Sand",
                   "location":"Brazil",
                   "comfortLevel": "5 star",
                   "activities":["swimming", "hiking", "scuba diving", "kitesurf"],
	 "price":1677,
	 "startDate":"2016-05-01",
	 "endDate":"2016-12-31",
	 "short_description":"The resort of Toes in Sand is located on the laid-back beach-covered south coast of the island, and is perfectly placed for Brazil holidays that are both relaxing and awe-inspiring.",
	 "picture":"images/toes1.jpg",
	 "long_description":"Enjoy great Gulf views while you relax on the porches or walk just couple of blocks to many restaurants and shops.",
	 "url":"resort7.html"
        },  {
                   "id":"resort8",
	 "destination":"Asia",
	 "name":"Silver Dunes",
                   "location":"Singapore",
                   "comfortLevel": "4 star",
                   "activities":["water skiing", "tennis", "scuba diving", "kitesurf", "spa"],
	 "price":1944,
	 "startDate":"2016-01-01",
	 "endDate":"2016-12-31",
	 "short_description":"The resort of Silver Dunes is located on the laid-back beach-covered south coast of the island, and is perfectly placed for Singapore holidays that are both relaxing and awe-inspiring.",
	 "picture":"images/dunes1.jpg",
	 "long_description":"Its bungalows are discreetly lodged in a tropical garden beside the white sand beach in superb Marin Bay. A magical site where you can enjoy a taste of everything, alone or with family or friends. Try water sports and the magnificent Club Med Spa.",
	 "url":"resort8.html"
        },
		{
	"id":"resort9",
	 "destination":"Asia",
	 "name":"Skipper Escape",
                   "location":"Japan",
                   "comfortLevel": "5 star",
                  "activities":["kids club","golf", "scuba diving", "flying trapeze", "tennis", "sailing", "spa"],
	"price":2102,
	"startDate":"2016-01-01",
	"endDate":"2016-12-31",
	"short_description":"The resort of Skipper Escape is located on the laid-back beach-covered south coast of the island, and is perfectly placed for Singapore holidays that are both relaxing and awe-inspiring.",
	"picture":"images/skip1.jpg",
	"long_description":"In a remote beauty spot, savour the luxury of Japan lifestyle.  The idyllic natural setting is enhanced by the sublime decor designed by Marc Hertrich and Nicolas Adnet, and the Resort's top-end comfort is perfectly reflected in its beautifully spacious rooms. The exceptional CINQ MONDES Spa and luxurious overflow pool add an ideally Zen touch. The Resort is entirely devoted to fulfilling its guests' desires and offers discreet, personal service in its swimming areas, bars and 'Table Gourmet' restaurants.",
	"url":"resort9.html"
		},
{
	"id":"resort10",
	 "destination":"Europe",
	 "name":"Casa del Sol",
                   "location":"Germany",
                   "comfortLevel": "4 star",
                  "activities":["kids club","golf", "scuba diving", "flying trapeze", "tennis", "sailing"],
	"price":1350,
	"startDate":"2016-01-01",
	"endDate":"2016-12-31",
	"short_description":"Beautifully located in one of the last remote creeks on the island, Casa del Sol welcomes the most demanding of guests into a world of supreme refinement.",
	"picture":"images/del1.jpg",
	"long_description":"Casa del Sol sits atop a small mountain in the peaceful gated preserve of Roma del Mar.  Enjoy the spectacular scenic nature of the jungle with over 800 species of birds.",
	"url":"resort10.html"
		}
]}
		
		
	
	
//----------------------------------------------------------------------------------------------------
$("#search").click(function() {
//getMinPriceValue();
doShowAll();
//$("body").css("background-image", "url('images/background/grad1.jpg')");
$("body").css("background-image", "url('')");
$("body").css("background-color", "#000000");

//search box value is retrieved
var criteria = $("#criteria").val();



$(".page-wrap").hide();
$("aside").show();
//$("#result").show();
$(".activity").hide();


//display resort details retrieved from JSON object and activity details retrieved from JSON object
var count = 0;
    var output2="<article>";
if(criteria=="All"){
for(var i in data.resorts){
count++;

if(data.resorts[i].comfortLevel=="3 star"){
output2+= "<div class='col-m-3'><section><a href='"+data.resorts[i].url+"'><img src='"+data.resorts[i].picture+"'/>" +"<h2><span><img src='images/star/star-3.png' /></span></h2></a><div class='restShortDesc'><div class='restDesc'><div class='restPrice'>   $. " + data.resorts[i].price+"</div>"+data.resorts[i].name+", "+data.resorts[i].location+"</div> " + data.resorts[i].short_description +"<button id='"+data.resorts[i].id+"'><img src='images/heart1.jpg' ></button>"+ "</div></section></div>"; 	
	
}else if(data.resorts[i].comfortLevel=="4 star"){
	output2+= "<div class='col-m-3'><section><a href='"+data.resorts[i].url+"'><img src='"+data.resorts[i].picture+"'/>" +"<h2><span><img src='images/star/star-4.png' /></span></h2></a><div class='restShortDesc'><div class='restDesc'><div class='restPrice'>   $. " + data.resorts[i].price+"</div>"+data.resorts[i].name+", "+data.resorts[i].location+"</div> " + data.resorts[i].short_description +"<button id='"+data.resorts[i].id+"'><img src='images/heart1.jpg' ></button>"+ "</div></section></div>"; 
}else if(data.resorts[i].comfortLevel=="5 star"){	
	output2+= "<div class='col-m-3'><section><a href='"+data.resorts[i].url+"'><img src='"+data.resorts[i].picture+"'/>" +"<h2><span><img src='images/star/star-5.png' /></span></h2></a><div class='restShortDesc'><div class='restDesc'><div class='restPrice'>   $. " + data.resorts[i].price+"</div>"+data.resorts[i].name+", "+data.resorts[i].location+"</div> " + data.resorts[i].short_description +"<button id='"+data.resorts[i].id+"'><img src='images/heart1.jpg' ></button>"+ "</div></section></div>"; 
}
 
}
}else{
for(var a in data.resorts){
  for (var j in data.resorts[a].activities) {
if(data.resorts[a].activities[j]==criteria){
count++;
if(data.resorts[a].comfortLevel=='3 star'){
	 output2+= "<div class='col-m-3'><section><a href='"+data.resorts[a].url+"'><img src='"+data.resorts[a].picture+"'/>" +"<h2><span><img src='images/star/star-3.png' /></span></h2></a><div class='restShortDesc'><div class='restDesc'><div class='restPrice'>   $. " + data.resorts[a].price+"</div>"+data.resorts[a].name+", "+data.resorts[a].location+"</div> " + data.resorts[a].short_description +"<button id='"+data.resorts[a].id+"'><img src='images/heart1.jpg' ></button>"+ "</div></section></div>"; 
	}else if(data.resorts[a].comfortLevel=='4 star'){
		 output2+= "<div class='col-m-3'><section><a href='"+data.resorts[a].url+"'><img src='"+data.resorts[a].picture+"'/>" +"<h2><span><img src='images/star/star-4.png' /></span></h2></a><div class='restShortDesc'><div class='restDesc'><div class='restPrice'>   $. " + data.resorts[a].price+"</div>"+data.resorts[a].name+", "+data.resorts[a].location+"</div> " + data.resorts[a].short_description +"<button id='"+data.resorts[a].id+"'><img src='images/heart1.jpg' ></button>"+ "</div></section></div>"; 
	}else if(data.resorts[a].comfortLevel=='5 star'){
		 output2+= "<div class='col-m-3'><section><a href='"+data.resorts[a].url+"'><img src='"+data.resorts[a].picture+"'/>" +"<h2><span><img src='images/star/star-5.png' /></span></h2></a><div class='restShortDesc'><div class='restDesc'><div class='restPrice'>   $. " + data.resorts[a].price+"</div>"+data.resorts[a].name+", "+data.resorts[a].location+"</div> " + data.resorts[a].short_description +"<button id='"+data.resorts[a].id+"'><img src='images/heart1.jpg' ></button>"+ "</div></section></div>"; 
	}

}
  }
 if(data.resorts[a].name==criteria || data.resorts[a].destination==criteria || data.resorts[a].location==criteria || data.resorts[a].comfortLevel==criteria ||data.resorts[a].startDate==criteria|| data.resorts[a].price==criteria||data.resorts[a].endDate==criteria ){
count++;
if(data.resorts[a].comfortLevel=='3 star'){
	output2+= "<div class='col-m-3'><section><a href='"+data.resorts[a].url+"'><img src='"+data.resorts[a].picture+"'/>" +"<h2><span><img src='images/star/star-3.png' /></span></h2></a><div class='restShortDesc'><div class='restDesc'><div class='restPrice'>   $. " + data.resorts[a].price+"</div>"+data.resorts[a].name+", "+data.resorts[a].location+"</div> " + data.resorts[a].short_description +"<button id='"+data.resorts[a].id+"'><img src='images/heart1.jpg' ></button>"+ "</div></section></div>"; 

}else if(data.resorts[a].comfortLevel=='4 star'){
	output2+= "<div class='col-m-3'><section><a href='"+data.resorts[a].url+"'><img src='"+data.resorts[a].picture+"'/>" +"<h2><span><img src='images/star/star-4.png' /></span></h2></a><div class='restShortDesc'><div class='restDesc'><div class='restPrice'>   $. " + data.resorts[a].price+"</div>"+data.resorts[a].name+", "+data.resorts[a].location+"</div> " + data.resorts[a].short_description +"<button id='"+data.resorts[a].id+"'><img src='images/heart1.jpg' ></button>"+ "</div></section></div>"; 

}else if(data.resorts[a].comfortLevel=='5 star'){
	output2+= "<div class='col-m-3'><section><a href='"+data.resorts[a].url+"'><img src='"+data.resorts[a].picture+"'/>" +"<h2><span><img src='images/star/star-5.png' /></span></h2></a><div class='restShortDesc'><div class='restDesc'><div class='restPrice'>   $. " + data.resorts[a].price+"</div>"+data.resorts[a].name+", "+data.resorts[a].location+"</div> " + data.resorts[a].short_description +"<button id='"+data.resorts[a].id+"'><img src='images/heart1.jpg' ></button>"+ "</div></section></div>"; 

}
 
 }
}
}
    output2+="</article>";
	
  document.getElementById("display").innerHTML=output2;
document.getElementById("result").innerHTML=count+" Results match with '"+criteria+"'";

//search box value is set empty
$("#criteria").val("");


// when the heart image button is clicked the resort added to wishlist

var name;
$(".restShortDesc button").click(function() {
for(var x in data.resorts){
if(data.resorts[x].id==this.id){
	name=data.resorts[x].name;
SaveItem(name);
}
}  
 //alert("Id "+this.id); // or alert($(this).attr('id'));
swal({
	title: " Added To Wishlist!",
	text: "Resort added to Wish List.",	
	imageUrl: 'images/heart1.jpg'
	});
});

// when the remove button is clicked the resort entered in the text box is removed from local storage or wishlist ----------------------------------------------
$("#remove").click(function(){
	var name = document.forms.ShoppingList.name.value;
	localStorage.removeItem(name);
	doShowAll();
});


// save resort to local storage or wishlist-----------------------------------------------------------------------------------------
function SaveItem() {		
	localStorage.setItem(name, 1);
	doShowAll();	
}




});




//  draw the table----------------------------------------------------------------------------------------

function doShowAll() {
	$("#resortInput").val('');
	if (CheckBrowser()) {
		var key = "";
		var list = "<tr><th>Resort</th></tr>";
		var i = 0;
		for (i = 0; i <= localStorage.length - 1; i++) {
			if(localStorage.key(i)!='isFront'){
				key = localStorage.key(i);				
				list += "<tr><td>" + key + "</td></tr>";
			}
		}
		if (list == "<tr><th>Resort</th></tr>") {
			list += "<tr><td><i>empty</i></td></tr>";
		}
		document.getElementById('list').innerHTML = list;
	} else {
		alert('Cannot store shopping list as your browser do not support local storage');
	}
}


//-------------------------------------------------------------------------------------------------------
//Destinations image click events


$("#asia").click(function(){

		clickHandler('Asia');	
   
});




$("#africa").click(function(){

		clickHandler('Africa');	
 
});


$("#australia").click(function(){
	
		clickHandler('Australia');	
   
});


$("#europe").click(function(){
		
		clickHandler('Europe');	
  
});




$("#caribbean").click(function(){
	
		clickHandler('Carribean');	
  
});



$("#northAmerica").click(function(){
		
		clickHandler('North and Central America');	
  
});



$("#southAmerica").click(function(){
	
		clickHandler('South America');	
  
});




//-------------------------------------------------------------------------------------------------------

function clickHandler(e) {
$("aside").show();	
$(".page-wrap").hide();
$(".activity").hide();
$("body").css("background-image", "url('')");
$("body").css("background-color", "#000000");

	if(e=='Asia'){
		var q=0;
 var output3="<article>";
		for(var q in data.resorts){
		if(data.resorts[q].destination=='Asia'){
			if(data.resorts[q].comfortLevel=='3 star'){
				output3+= "<div class='col-m-3'><section><a href='"+data.resorts[q].url+"'><img src='"+data.resorts[q].picture+"'/>" +"<h2><span><img src='images/star/star-3.png' /></span></h2></a><div class='restShortDesc'><div class='restDesc'><div class='restPrice'>   $. " + data.resorts[q].price+"</div>"+data.resorts[q].name+", "+data.resorts[q].location+"</div> " + data.resorts[q].short_description +"<button id='"+data.resorts[q].id+"'><img src='images/heart1.jpg' ></button>"+ "</div></section></div>"; 
		
			}else if(data.resorts[q].comfortLevel=='4 star'){
				output3+= "<div class='col-m-3'><section><a href='"+data.resorts[q].url+"'><img src='"+data.resorts[q].picture+"'/>" +"<h2><span><img src='images/star/star-4.png' /></span></h2></a><div class='restShortDesc'><div class='restDesc'><div class='restPrice'>   $. " + data.resorts[q].price+"</div>"+data.resorts[q].name+", "+data.resorts[q].location+"</div> " + data.resorts[q].short_description +"<button id='"+data.resorts[q].id+"'><img src='images/heart1.jpg' ></button>"+ "</div></section></div>"; 
		
			}else if(data.resorts[q].comfortLevel=='5 star'){				
				output3+= "<div class='col-m-3'><section><a href='"+data.resorts[q].url+"'><img src='"+data.resorts[q].picture+"'/>" +"<h2><span><img src='images/star/star-5.png' /></span></h2></a><div class='restShortDesc'><div class='restDesc'><div class='restPrice'>   $. " + data.resorts[q].price+"</div>"+data.resorts[q].name+", "+data.resorts[q].location+"</div> " + data.resorts[q].short_description +"<button id='"+data.resorts[q].id+"'><img src='images/heart1.jpg' ></button>"+ "</div></section></div>"; 
		
			}
	
		output3+="</article>";
 document.getElementById("display").innerHTML=output3; 

		}
	}
	}else if(e=='Africa'){
		var q=0;
 var output3="<article>";
		for(var q in data.resorts){
		if(data.resorts[q].destination=='Africa'){
			
		if(data.resorts[q].comfortLevel=='3 star'){
				output3+= "<div class='col-m-3'><section><a href='"+data.resorts[q].url+"'><img src='"+data.resorts[q].picture+"'/>" +"<h2><span><img src='images/star/star-3.png' /></span></h2></a><div class='restShortDesc'><div class='restDesc'><div class='restPrice'>   $. " + data.resorts[q].price+"</div>"+data.resorts[q].name+", "+data.resorts[q].location+"</div> " + data.resorts[q].short_description +"<button id='"+data.resorts[q].id+"'><img src='images/heart1.jpg' ></button>"+ "</div></section></div>"; 
		
			}else if(data.resorts[q].comfortLevel=='4 star'){
				output3+= "<div class='col-m-3'><section><a href='"+data.resorts[q].url+"'><img src='"+data.resorts[q].picture+"'/>" +"<h2><span><img src='images/star/star-4.png' /></span></h2></a><div class='restShortDesc'><div class='restDesc'><div class='restPrice'>   $. " + data.resorts[q].price+"</div>"+data.resorts[q].name+", "+data.resorts[q].location+"</div> " + data.resorts[q].short_description +"<button id='"+data.resorts[q].id+"'><img src='images/heart1.jpg' ></button>"+ "</div></section></div>"; 
		
			}else if(data.resorts[q].comfortLevel=='5 star'){				
				output3+= "<div class='col-m-3'><section><a href='"+data.resorts[q].url+"'><img src='"+data.resorts[q].picture+"'/>" +"<h2><span><img src='images/star/star-5.png' /></span></h2></a><div class='restShortDesc'><div class='restDesc'><div class='restPrice'>   $. " + data.resorts[q].price+"</div>"+data.resorts[q].name+", "+data.resorts[q].location+"</div> " + data.resorts[q].short_description +"<button id='"+data.resorts[q].id+"'><img src='images/heart1.jpg' ></button>"+ "</div></section></div>"; 
		
			}
		output3+="</article>";
  document.getElementById("display").innerHTML=output3;
		}
	}
	}else if(e=='Australia'){
		var q=0;
 var output3="<article>";
		for(var q in data.resorts){
		if(data.resorts[q].destination=='Australia'){
			
	if(data.resorts[q].comfortLevel=='3 star'){
				output3+= "<div class='col-m-3'><section><a href='"+data.resorts[q].url+"'><img src='"+data.resorts[q].picture+"'/>" +"<h2><span><img src='images/star/star-3.png' /></span></h2></a><div class='restShortDesc'><div class='restDesc'><div class='restPrice'>   $. " + data.resorts[q].price+"</div>"+data.resorts[q].name+", "+data.resorts[q].location+"</div> " + data.resorts[q].short_description +"<button id='"+data.resorts[q].id+"'><img src='images/heart1.jpg' ></button>"+ "</div></section></div>"; 
		
			}else if(data.resorts[q].comfortLevel=='4 star'){
				output3+= "<div class='col-m-3'><section><a href='"+data.resorts[q].url+"'><img src='"+data.resorts[q].picture+"'/>" +"<h2><span><img src='images/star/star-4.png' /></span></h2></a><div class='restShortDesc'><div class='restDesc'><div class='restPrice'>   $. " + data.resorts[q].price+"</div>"+data.resorts[q].name+", "+data.resorts[q].location+"</div> " + data.resorts[q].short_description +"<button id='"+data.resorts[q].id+"'><img src='images/heart1.jpg' ></button>"+ "</div></section></div>"; 
		
			}else if(data.resorts[q].comfortLevel=='5 star'){				
				output3+= "<div class='col-m-3'><section><a href='"+data.resorts[q].url+"'><img src='"+data.resorts[q].picture+"'/>" +"<h2><span><img src='images/star/star-5.png' /></span></h2></a><div class='restShortDesc'><div class='restDesc'><div class='restPrice'>   $. " + data.resorts[q].price+"</div>"+data.resorts[q].name+", "+data.resorts[q].location+"</div> " + data.resorts[q].short_description +"<button id='"+data.resorts[q].id+"'><img src='images/heart1.jpg' ></button>"+ "</div></section></div>"; 
		
			}
		output3+="</article>";
  document.getElementById("display").innerHTML=output3;
		}
	}
	}else if(e=='Europe'){
		var q=0;
 var output3="<article>";
		for(var q in data.resorts){
		if(data.resorts[q].destination=='Europe'){
		
	if(data.resorts[q].comfortLevel=='3 star'){
				output3+= "<div class='col-m-3'><section><a href='"+data.resorts[q].url+"'><img src='"+data.resorts[q].picture+"'/>" +"<h2><span><img src='images/star/star-3.png' /></span></h2></a><div class='restShortDesc'><div class='restDesc'><div class='restPrice'>   $. " + data.resorts[q].price+"</div>"+data.resorts[q].name+", "+data.resorts[q].location+"</div> " + data.resorts[q].short_description +"<button id='"+data.resorts[q].id+"'><img src='images/heart1.jpg' ></button>"+ "</div></section></div>"; 
		
			}else if(data.resorts[q].comfortLevel=='4 star'){
				output3+= "<div class='col-m-3'><section><a href='"+data.resorts[q].url+"'><img src='"+data.resorts[q].picture+"'/>" +"<h2><span><img src='images/star/star-4.png' /></span></h2></a><div class='restShortDesc'><div class='restDesc'><div class='restPrice'>   $. " + data.resorts[q].price+"</div>"+data.resorts[q].name+", "+data.resorts[q].location+"</div> " + data.resorts[q].short_description +"<button id='"+data.resorts[q].id+"'><img src='images/heart1.jpg' ></button>"+ "</div></section></div>"; 
		
			}else if(data.resorts[q].comfortLevel=='5 star'){				
				output3+= "<div class='col-m-3'><section><a href='"+data.resorts[q].url+"'><img src='"+data.resorts[q].picture+"'/>" +"<h2><span><img src='images/star/star-5.png' /></span></h2></a><div class='restShortDesc'><div class='restDesc'><div class='restPrice'>   $. " + data.resorts[q].price+"</div>"+data.resorts[q].name+", "+data.resorts[q].location+"</div> " + data.resorts[q].short_description +"<button id='"+data.resorts[q].id+"'><img src='images/heart1.jpg' ></button>"+ "</div></section></div>"; 
		
			}
		output3+="</article>";
  document.getElementById("display").innerHTML=output3;
		
		}		
	}
	
	}else if(e=='Carribean'){
		var q=0;
 var output3="<article>";
		for(var q in data.resorts){
		if(data.resorts[q].destination=='Carribean'){
			
	if(data.resorts[q].comfortLevel=='3 star'){
				output3+= "<div class='col-m-3'><section><a href='"+data.resorts[q].url+"'><img src='"+data.resorts[q].picture+"'/>" +"<h2><span><img src='images/star/star-3.png' /></span></h2></a><div class='restShortDesc'><div class='restDesc'><div class='restPrice'>   $. " + data.resorts[q].price+"</div>"+data.resorts[q].name+", "+data.resorts[q].location+"</div> " + data.resorts[q].short_description +"<button id='"+data.resorts[q].id+"'><img src='images/heart1.jpg' ></button>"+ "</div></section></div>"; 
		
			}else if(data.resorts[q].comfortLevel=='4 star'){
				output3+= "<div class='col-m-3'><section><a href='"+data.resorts[q].url+"'><img src='"+data.resorts[q].picture+"'/>" +"<h2><span><img src='images/star/star-4.png' /></span></h2></a><div class='restShortDesc'><div class='restDesc'><div class='restPrice'>   $. " + data.resorts[q].price+"</div>"+data.resorts[q].name+", "+data.resorts[q].location+"</div> " + data.resorts[q].short_description +"<button id='"+data.resorts[q].id+"'><img src='images/heart1.jpg' ></button>"+ "</div></section></div>"; 
		
			}else if(data.resorts[q].comfortLevel=='5 star'){				
				output3+= "<div class='col-m-3'><section><a href='"+data.resorts[q].url+"'><img src='"+data.resorts[q].picture+"'/>" +"<h2><span><img src='images/star/star-5.png' /></span></h2></a><div class='restShortDesc'><div class='restDesc'><div class='restPrice'>   $. " + data.resorts[q].price+"</div>"+data.resorts[q].name+", "+data.resorts[q].location+"</div> " + data.resorts[q].short_description +"<button id='"+data.resorts[q].id+"'><img src='images/heart1.jpg' ></button>"+ "</div></section></div>"; 
		
			}
		output3+="</article>";
  document.getElementById("display").innerHTML=output3;
		}
	}
	}else if(e=='North and Central America'){
		var q=0;
 var output3="<article>";
		for(var q in data.resorts){
		if(data.resorts[q].destination=='North and Central America'){
			
	if(data.resorts[q].comfortLevel=='3 star'){
				output3+= "<div class='col-m-3'><section><a href='"+data.resorts[q].url+"'><img src='"+data.resorts[q].picture+"'/>" +"<h2><span><img src='images/star/star-3.png' /></span></h2></a><div class='restShortDesc'><div class='restDesc'><div class='restPrice'>   $. " + data.resorts[q].price+"</div>"+data.resorts[q].name+", "+data.resorts[q].location+"</div> " + data.resorts[q].short_description +"<button id='"+data.resorts[q].id+"'><img src='images/heart1.jpg' ></button>"+ "</div></section></div>"; 
		
			}else if(data.resorts[q].comfortLevel=='4 star'){
				output3+= "<div class='col-m-3'><section><a href='"+data.resorts[q].url+"'><img src='"+data.resorts[q].picture+"'/>" +"<h2><span><img src='images/star/star-4.png' /></span></h2></a><div class='restShortDesc'><div class='restDesc'><div class='restPrice'>   $. " + data.resorts[q].price+"</div>"+data.resorts[q].name+", "+data.resorts[q].location+"</div> " + data.resorts[q].short_description +"<button id='"+data.resorts[q].id+"'><img src='images/heart1.jpg' ></button>"+ "</div></section></div>"; 
		
			}else if(data.resorts[q].comfortLevel=='5 star'){				
				output3+= "<div class='col-m-3'><section><a href='"+data.resorts[q].url+"'><img src='"+data.resorts[q].picture+"'/>" +"<h2><span><img src='images/star/star-5.png' /></span></h2></a><div class='restShortDesc'><div class='restDesc'><div class='restPrice'>   $. " + data.resorts[q].price+"</div>"+data.resorts[q].name+", "+data.resorts[q].location+"</div> " + data.resorts[q].short_description +"<button id='"+data.resorts[q].id+"'><img src='images/heart1.jpg' ></button>"+ "</div></section></div>"; 
		
			}
		output3+="</article>";
  document.getElementById("display").innerHTML=output3;
		}
	}
	}else if(e=='South America'){
		var q=0;
 var output3="<article>";
		for(var q in data.resorts){
		if(data.resorts[q].destination=='South America'){
		
	if(data.resorts[q].comfortLevel=='3 star'){
				output3+= "<div class='col-m-3'><section><a href='"+data.resorts[q].url+"'><img src='"+data.resorts[q].picture+"'/>" +"<h2><span><img src='images/star/star-3.png' /></span></h2></a><div class='restShortDesc'><div class='restDesc'><div class='restPrice'>   $. " + data.resorts[q].price+"</div>"+data.resorts[q].name+", "+data.resorts[q].location+"</div> " + data.resorts[q].short_description +"<button id='"+data.resorts[q].id+"'><img src='images/heart1.jpg' ></button>"+ "</div></section></div>"; 
		
			}else if(data.resorts[q].comfortLevel=='4 star'){
				output3+= "<div class='col-m-3'><section><a href='"+data.resorts[q].url+"'><img src='"+data.resorts[q].picture+"'/>" +"<h2><span><img src='images/star/star-4.png' /></span></h2></a><div class='restShortDesc'><div class='restDesc'><div class='restPrice'>   $. " + data.resorts[q].price+"</div>"+data.resorts[q].name+", "+data.resorts[q].location+"</div> " + data.resorts[q].short_description +"<button id='"+data.resorts[q].id+"'><img src='images/heart1.jpg' ></button>"+ "</div></section></div>"; 
		
			}else if(data.resorts[q].comfortLevel=='5 star'){				
				output3+= "<div class='col-m-3'><section><a href='"+data.resorts[q].url+"'><img src='"+data.resorts[q].picture+"'/>" +"<h2><span><img src='images/star/star-5.png' /></span></h2></a><div class='restShortDesc'><div class='restDesc'><div class='restPrice'>   $. " + data.resorts[q].price+"</div>"+data.resorts[q].name+", "+data.resorts[q].location+"</div> " + data.resorts[q].short_description +"<button id='"+data.resorts[q].id+"'><img src='images/heart1.jpg' ></button>"+ "</div></section></div>"; 
		
			}
		output3+="</article>";
  document.getElementById("display").innerHTML=output3;
		}
	}
	}else{
		
		  document.getElementById("result").innerHTML="Empty Results..";
	}
}
//----------------------------------------------------------------------------------------------------------------------------------------------
function getMinPriceValue(){
	alert(data.resorts[0].price);
for(var a in data.resorts){

}	
}


//----------------------------------------------------------------------------------------------------------------------------------------------
//check whether the browser supports for local storage------------------------------------------------------------------------------------------

function CheckBrowser() {
	if ('localStorage' in window && window['localStorage'] !== null) {
		// we can use localStorage object to store data
		return true;
	} else {
			alert("Kindly note that this browser doesn't support for local storage introduced in html5!");
			return false;
	}
}




//add wishlist to search page---------------------------------------------------------------------------------------------------------------------

$("#btnWishList").click(function() {
localStorage.setItem( 'isFront','true' );
$("#btnWishList").hide();
$("#btnHideWishList").show();
alert(" Wish-list added to search page! Refresh for search page.");
doShowAll();
});


// wish-list remove from search page------------------------------------------------------------------------------------------------
$("#btnHideWishList").click(function() {
localStorage.setItem( 'isFront','false' );
$("#btnHideWishList").hide();
$("#btnWishList").show();
alert("Wishlist removed from search page!");
doShowAll();
});



// clear the local storage key and item ------------------------------------------------------------------------------------------
$("#clear").click(function(){
localStorage.clear();
	doShowAll();	
});


});