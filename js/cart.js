var proj3_data;
var proj3_store;
var cart;
var done = false;
var tmpArray;
var cartArray

$(document).ready( function() {
   var cart = new shopping_cart("jadrn046");
   cartArray = cart.getCartArray();

   $('#count').text(cart.size()); 
   //$('#total').text(cartArray.length + " item"); 
   if(cart.size() == 0)
    {
		$('#main').show();
		$('#data').hide();
		$('#side').hide();
		var handle = document.getElementById('empty');
        handle.innerHTML = "Your Shopping cart is Empty";	
	}
	else{
		$('#main').hide();
		$('#data').show();
		$('#side').show();
		 updateDisplay();
	}
	
	function updateDisplay() {
	    proj3_store = new Array();
		cartArray = cart.getCartArray();
        for(i=0; i < cartArray.length; i++) {
		  var valueToPass = cartArray[i][0];
		  var cartQty = cartArray[i][1];
		  if( cartArray[i][1] != 0) {
			  $.get('/jadrn046/servlet/FilterCartData', {"search_it": valueToPass, "search_cart": cartQty}, handleCartData);
		     }
           }
		   if(cart.size() == 0)
               {
		       $('#main').show();
		      // $('#data').hide();
		       $('#side').hide();
		       var handle = document.getElementById('empty');
               handle.innerHTML = "Your Shopping cart is Empty";	
	           }
		   done= true;
        } 
 
 function handleCartData(response){
	 proj3_store+= response;
	 if(done) {
		   proj3_data = new Array();
		   var tmpArray = proj3_store.split('|');
           for(var i=0; i < tmpArray.length; i++) {
           innerArray = tmpArray[i].split(':');
           proj3_data[i] = innerArray;
         }
        storedata();
	 }
	 else{
		return; 
	 }
 }
  
 function storedata(){
  tmpString = ""; 
  for(var i=0; i < proj3_data.length - 1; i++) {
	   tmpString += "<section>";
	   tmpString += "<span id='camera'>"+ "<img src=\"/~jadrn046/proj1/_p_images/"+ proj3_data[i][8]+"\" + width=\"130px\"  height=\"130px\" />" + "</span>"; 
		tmpString +=   "<p id='details'><b>Manufacturer's ID: </b>"+ proj3_data[i][3] + "<br />" + "<b>Vendor: </b>"+ proj3_data[i][2] + "<br />" + "<b>Category: </b>"+ proj3_data[i][1] + "<br />" + "<b>Price: $</b>"+ proj3_data[i][7] +"</p>"; 
		tmpString += "<p id='quant'>" +"<input type='button' name='"+proj3_data[i][0]+"' value='Delete' id='delete'/>" +  "<input type='number' min='1' name='"+proj3_data[i][0]+"qty' id='qty' value='"+proj3_data[i][10]+"' />" + "</p>"; 
		tmpString += "</section>";          
       }
        var handle = document.getElementById('data');
        handle.innerHTML = tmpString;
        addHandlerToButtons();
}


function addHandlerToButtons() {  // You can't attach the handlers in a for loop
    for(var i=0; i < proj3_data.length-1; i++)
            doHandler(i);
        }
		
function doHandler(i) {
    var name = proj3_data[i][0]; // the sku 
	var qtystr = name +"qty";
    $("[name='"+name+"']").on('click', function() {
      cart.delete(proj3_data[i][0]);
	  $('#count').text(cart.size()); 
	//  $('#total').text(cartArray.length + " item");
	  done=false;
	  var handle = document.getElementById('data');
      handle.innerHTML = "";
	  updateDisplay();  
   });
   
   $("[name='"+qtystr+"']").bind("click keyup", function(event) {
	    var val = $(this).val();
		
		if(!$.isNumeric(val) || parseInt(val) <= 0 ){ 
		 event.preventDefault();
		 var handle1 = document.getElementById('message_line');
         handle1.innerHTML = "Invalid Quantity" ;
		}
		else if( parseInt(val) > parseInt(proj3_data[i][9]) ){
		 event.preventDefault();
		 var handle = document.getElementById('message_line');
         handle.innerHTML = "We have only " + proj3_data[i][9] +" left in stock" ;	
		}
		else{
			var handle = document.getElementById('message_line');
            handle.innerHTML = "";
			cart.setQuantity(name, parseInt($(this).val()));
			$('#count').text(cart.size()); 
			//$('#total').text(cartArray.length + " item");
		}
   }); 
  }
  
});
