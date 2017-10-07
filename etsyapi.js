/**
*   Get Active Listings
*/
function getlistings(shopname, params, limit, imagesz) {
	$(document).ready(function(){
		apiKey = "your_api_key";
		etsy_url = "https://openapi.etsy.com/v2/shops/"+ shopname + "/listings/active.js?";
				 
		etsy_url += "fields="+params +"&limit="+ limit+ "&includes=MainImage&api_key=" + apiKey;
				    
		//console.log (etsy_url);
				    
		//loop through results and add the listings to the etsy-images div
		$.getJSON(etsy_url + "&callback=?", function(data){
	   		//console.log(data);
	   		
	   		$.each(data.results, function(i, result)
	   		{	
	   			shortTitle = jQuery.trim(result.title).substring(0,25).split(" ").slice(0, -1).join(" ") + "...";
	   			srcImage = result.MainImage.url_170x135; 
	   			
	   			if (imagesz=="small") {
	   				srcImage =  result.MainImage.url_75x75;
	   				shortTitle = jQuery.trim(result.title).substring(0,10).split(" ").slice(0, -1).join(" ") + "...";
	   			}
	   						   									
	  			$("<div class=image>").appendTo("#etsy-images")
	  				.append($("<a href='" + result.url + "'></a>").append("<img src='" + srcImage + "'>"))  				
	  				.append($("<div class=desc>").text(shortTitle))
	  				.append($("<div class=price>").text("$" + result.price));
	   		});
		});
	});
}
