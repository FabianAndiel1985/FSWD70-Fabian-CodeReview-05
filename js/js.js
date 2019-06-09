// Parsing Jason Data

   var mydata = JSON.parse(data);
   console.log(mydata);

   

for (i=0;i<mydata.length;i++) {
	
	document.getElementById("movie-pic"+i).src=mydata[i].pic;
	document.getElementById("movie-title"+i).innerHTML=mydata[i].title;
	document.getElementById("movie-plot"+i).innerHTML=mydata[i].description;
}



var movieLikes0StartValue = 0;
var movieLikes1StartValue = 0; 
var movieLikes2StartValue = 0; 
var movieLikes3StartValue = 0; 
var movieLikes4StartValue = 0; 
var movieLikes5StartValue = 0; 





for (i=0;i<6;i++) 
	{
		document.getElementsByClassName("likeButton")[i].addEventListener("click", function(event)
		 	{
		 	   var valueToEnhance = event.target.value;
		 	  

		 	   increaseValue(valueToEnhance);					
		 	}
 		);
	}


function increaseValue(param){
	 
		likeStringPlus = param + "StartValue" + " + " + "1";

		enhancedValue= eval(likeStringPlus.toString());
		


		if (param == "movieLikes0") {
				movieLikes0StartValue = enhancedValue; 
				document.getElementById("movieLikes0").innerHTML=movieLikes0StartValue;
				$("#w1").attr('value', movieLikes0StartValue);
			}

		else if (param == "movieLikes1") {
				movieLikes1StartValue = enhancedValue; 
				document.getElementById("movieLikes1").innerHTML=movieLikes1StartValue;
				$("#w2").attr('value', movieLikes1StartValue);
			}

		else if (param == "movieLikes2") {
				movieLikes2StartValue = enhancedValue; 
				document.getElementById("movieLikes2").innerHTML=movieLikes2StartValue;
			}

		else if (param == "movieLikes3") {
				movieLikes3StartValue = enhancedValue; 
				document.getElementById("movieLikes3").innerHTML=movieLikes3StartValue;
			}

		else if (param == "movieLikes4") {
				movieLikes4StartValue = enhancedValue; 
				document.getElementById("movieLikes4").innerHTML=movieLikes4StartValue;
			}

		else if (param == "movieLikes5") {
				movieLikes5StartValue = enhancedValue; 
				document.getElementById("movieLikes5").innerHTML=movieLikes5StartValue;
			}
						
		}  /* END OF FUNCTION */


function widthI() {
	alert(window.innerWidth);
}

				
$("#sort").on('click', function() {

















});