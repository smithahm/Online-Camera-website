function disableBackButton()
{
window.history.forward()
} 
disableBackButton(); 
window.onload=disableBackButton(); 
window.onpageshow=function(evt) { if(evt.persisted) disableBackButton() } 
window.onunload=function() { void(0) } 

var proj3_data;
var proj3_store;
var cart;
var done = false;
var tmpArray;

$(document).ready( function() {
   var cart = new shopping_cart("jadrn046");
   $('#count').text(cart.size());
    
   if(cart.size() != 0) {
		 updateDisplay();
	}
	
	function updateDisplay() {
	    proj3_store = new Array();
		var cartArray = cart.getCartArray();
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
		findPrice();
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
	   tmpString += "<span id='camera'>"+ "<img src=\"/~jadrn046/proj1/_p_images/"+ proj3_data[i][8]+"\" + width=\"110px\"  height=\"110px\" />" + "</span>"; 
		tmpString +=   "<p>" + "<b>Manufacturer's ID: </b>"+ proj3_data[i][3] + "<br />" + "<b>Vendor: </b>"+ proj3_data[i][2] + "<br />" + "<b>Category: </b>"+ proj3_data[i][1] + "<br />" + "<b>Price: $</b>"+ proj3_data[i][7]; 
		tmpString += "<br /><b>Quantity:</b>" + proj3_data[i][10] + "</p>"; 
		tmpString += "</section>";          
       }
        var handle = document.getElementById('quant');
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
	  done=false;
	  var handle = document.getElementById('data');
      handle.innerHTML = "";
	  updateDisplay();  
   });
   
  }
  
  
  function findPrice(){ 
  var total= 0;
  var ship = 0;
  var subtot = 0;
  for(var i=0; i < proj3_data.length - 1; i++) { 
    total = Number(total) + ( Number(proj3_data[i][7]) * Number(proj3_data[i][10]));
   }
   ship = (8 / 100 ) * total;
   subtot = (ship) + total+ 5;
   tmpString = "";
   tmpString += "<p class='head'>Order Summary : </p>";
   tmpString += "<ul><li>SubTotal :" + "<span class='left1'>$"+  total.toFixed(2) + "</span></li>";
   tmpString += "<li class='top'>Shipping Charge :" + "<span class='left2'>$5.00</span></li>";
   tmpString += "<li class='top'>Sales Tax(8%):" + "<span class='left3'>$" + ship.toFixed(2) + "</span></li>";
   tmpString += "<li class='top'>Total :" + "<span class='left4'>" + "$"+subtot.toFixed(2)  + "</span></li></ul>";
   var handle = document.getElementById('price');
   handle.innerHTML = tmpString;
  }

  
});

