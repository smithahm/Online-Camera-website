var proj3_data;
var proj3_store;
var cart;
var done = false;
var tmpArray;
var valueToPass;
var error = false;

$(document).ready( function() {
	cart = new shopping_cart("jadrn046");
	var cartArray = cart.getCartArray()

 $('.canbutton').on('click', function() {
     window.location.href = "http://jadran.sdsu.edu/jadrn046/proj3.html";
   });
   
  $('.placbutton').on('click', function(e) {
	   proj3_store = new Array();
        for(i=0; i < cartArray.length; i++) {
		  valueToPass = cartArray[i][0];
		  var cartQty = cartArray[i][1];
		  if( cartArray[i][1] != 0) {
			  $.get('/jadrn046/servlet/MerchandiseOut', {"search_it": valueToPass, "search_cart": cartQty}, handleMerchData);
		     }
           }
		   done=true;	   
  });
   
   function handleMerchData(response){
		if($.trim(response) == "success"){
		    cart.delete(valueToPass);
		}
		else{
			window.location.href = "/jadrn046/servlet/DispatchServlet?param=error";
		}

	    if(done) {
			changewindow();
		}
		else {
		 return;
		}
	}
	
	function changewindow(){
		for(i=0; i < cartArray.length; i++) {
			cart.delete(cartArray[i][0]);
		}
		window.location.href = "/jadrn046/servlet/DispatchServlet?param=confirm";
	}
   
 

});