# etsylistings

## Synopsis
javascript using jquery and the Etsy api to create a galary of your Etsy listings.

## Code Example
see: etsyapi.html

## Motivation
If you an Ety shop owner with your own personal website, you may want to integrate your Etsy listings into your website.  Unlike Etsy mini, this tool allows you to integrate all your listings and is flexible for styling.

## Installation
1. Get you own Etsy Api Key at: https://www.etsy.com/developers/documentation/getting_started/register
2. update the js file and replace 'apiKey' with the value of your api key from step 1.
3. create an html doc that calls the js function:  function getlistings(shopname, params, limit, imagesz)
Example:
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.2/jquery.min.js"></script>
	<script>	
		$.getScript("etsyapi.js",function(){
			getlistings("bellasjardin","title,price,url",12,"small");
		});			
	</script>
	<div class="img" id="etsy-images"></div>
Notes:
   - you must include the jquery library
   - you must include the div class with the id 'etsy-images'
   - function parameters:  shopname (your Etsy shop name), params (fields to be included in the result), limit (number of listings to be returned), imagesz ('small' or 'large')

## API Reference
https://www.etsy.com/developers/documentation/reference/listing#method_findalllistingactive

## Tests

## Contributors

## License
