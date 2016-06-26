# etsylistings

## Synopsis
A simple javascript using jquery and the Etsy api to create a gallery of your Etsy listings from your shop.
An Etsy api key is needed to use the Etsy api and is tracked by application. Etsy uses it in order to track overal api usage. For write access and access of private user data, an OAuth access token is also required, however this script only accesses a shop owner's public listings, which is not private data and hence no OAuth is neccessary.

## Code Example
see: etsyapi.html

## Motivation
If you are an Ety shop owner with your own personal website, you may want to integrate your Etsy listings into your website.  Unlike Etsy mini, this tool allows you to integrate all your listings and is flexible for styling.

## Installation
1. Get your own Etsy Api Key at: https://www.etsy.com/developers/documentation/getting_started/register
2. Update the js file and replace 'apiKey' with the value of your api key from step 1.
3. Deploy the js file on your website server
4. create an html doc or add a code snippet to an existing doc, that calls the js function:  function getlistings(shopname, params, limit, imagesz)
Example:
```html
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.2/jquery.min.js"></script>
	<script>	
		$.getScript("etsyapi.js",function(){
			getlistings("bellasjardin","title,price,url",12,"small");
		});			
	</script>
	<div class="img" id="etsy-images"></div>
```
Usage:
   - you must include the jquery library
   - you must include the div class with id "etsy-images"
   - function parameters:  shopname (your Etsy shop name), params (fields to be included in the result), limit (number of listings to be returned), imagesz ('small' or 'large')

Note: To identify additional fields, you may call the api without the 'fields' parameter to return all fields in the result.  Then modify your 'fields' parameter to include the desired fields.  
For example, enter this url, replacing 'shopname' and 'your_key' in your browser, then inspect the result.  https://openapi.etsy.com/v2/shops/shopname/listings/active?&limit=100&includes=MainImage&api_key=your_key


## API Reference
https://www.etsy.com/developers/documentation/reference/listing#method_findalllistingactive

## Tests
see sample usage at the following website.
1. Small images and 15 listings:   http://www.bellasjardin.com/
2. Large images and all listings:  http://www.bellasjardin.com/etsy-shop/


## Contributors
Evan Uribe

## License
