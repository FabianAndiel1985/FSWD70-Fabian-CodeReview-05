// Parsing Jason Data

   var mydata = JSON.parse(data);
   console.log(mydata);
/*
   WIEDER ÄNDERN AUF MY DATA.LENGTH*/

for (i=0;i<2;i++) {
	
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



/*wieder ändern auf 6*/

for (i=0;i<2;i++) 
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
						
		}  /* END OF FUNCTION */




	document.getElementById("sort").addEventListener("click", function() 
		{
			myArray = [$("#w1"),$("#w2")];

			console.log(myArray);

				myArray.sort(function (a, b) {
			    
			    // convert to integers from strings
			    a = parseInt($(a).attr("value"), 10);
			    b = parseInt($(b).attr("value"), 10);
			    // compare
			    if(a > b) {
			        return 1;
			    } else if(a < b) {
			        return -1;
			    } else {
			        return 0;
			    }
			});

			$("#container").append(myArray);

		}
	)	













				
// $("#sort").on('click', function() {


// 	myArray = [$("#w1"),$("#w2")];

// 	// console.log(myArray);

// 	myArray.sort(function (a, b) {
    
//     // convert to integers from strings
//     a = parseInt($(a).attr("value"), 10);
//     b = parseInt($(b).attr("value"), 10);
//     // compare
//     if(a > b) {
//         return 1;
//     } else if(a < b) {
//         return -1;
//     } else {
//         return 0;
//     }
// });

// $("#container").append(myArray);

// });