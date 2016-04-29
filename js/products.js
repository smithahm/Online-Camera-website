var proj3_data;
var proj3_data1;
var name;
var cart;
proj3_data = new Array();

$(document).ready(function() {
    cart = new shopping_cart("jadrn046");
	$('#count').text(cart.size());
    $('#found').hide();
	$('#noMatch').hide();
    $("#dialog-modal" ).dialog({
            height: 530,
            width: 820,
            modal: true,
            autoOpen: false 
  });
  
  $.get("http://jadran.sdsu.edu/jadrn046/servlet/CheckDSLR", handleDSLR);


function handleDSLR(response){ 
  var tmpArray = response.split('|');
    for(var i=0; i < tmpArray.length; i++) {
        innerArray = tmpArray[i].split(':');
        proj3_data[i] = innerArray;
        }
      storedata();
}


function storedata(){
  tmpString = ""; 
  for(var i=0; i < proj3_data.length - 1; i++) {
        tmpString += "<section>";
        tmpString += "<a id='click' name='" +proj3_data[i][0]+ "'><img src=\"/~jadrn046/proj1/_p_images/"+ proj3_data[i][8]+"\"  /></a>"; 
        tmpString += "<br />";
        tmpString += "<b>"+ proj3_data[i][3] + "</b><br />";
        tmpString += "<b>Price: $</b>"+ proj3_data[i][7] + "<br />";
        if(proj3_data[i][9] == "In Stock"){   
        tmpString += "<b><span id='red'>"+ proj3_data[i][9] + "</span></b><br/>";
		}
		else{
			tmpString += "<b><span id='green'>"+ proj3_data[i][9] + "</span></b><br/>";
		}
        tmpString += "</section>";                            
       }
	   //alert(tmpString);
        var handle = document.getElementById('DSLR');
        handle.innerHTML = tmpString;
        addHandlerToButtons();
}


function addHandlerToButtons() {  // You can't attach the handlers in a for loop
    for(var i=0; i < proj3_data.length-1; i++)
            doHandler(i);
        }

function doHandler(i) {
    var name = proj3_data[i][0]; // the sku 
   $("[name='"+name+"']").on('click', function() {
    $.category = proj3_data[i][1];
    $.vendor = proj3_data[i][2];
    $.mid = proj3_data[i][3];
    $.retail = proj3_data[i][7];
    $.image = proj3_data[i][8];
    $.description = proj3_data[i][4];
    $.features = proj3_data[i][5];
    tmpString = "";
    imgString = ""; 
    imgString += "<a class='image-cont'><img src=\"/~jadrn046/proj1/_p_images/"+ $.image +"\"  width=\"190px\"  height=\"190px\"  /></a>";
    tmpString += "<br />";
    tmpString += "<b>"+ $.mid + "</b><br />";
    tmpString += "<b>Vendor: </b>"+ $.vendor + "<br/>";
    tmpString += "<b>Price: $</b>"+ $.retail + "<br /><br/>";
    tmpString += "<b>Product Description: </b>"+ $.description + "<br/><br/>";  
    tmpString += "<b>Features: </b><br />"+  proj3_data[i][5] + "<br/><br/>"; 
	if(proj3_data[i][9] == "In Stock"){   
	tmpString += "<b>Quantity: </b><input type='number' min='1' name='"+proj3_data[i][0]+"qty' id='qty' />";
    tmpString += "<input type='button' name='"+proj3_data[i][0]+"' value='Add To Cart'  id='addButton' /><br />";
	tmpString += "<div id='error'></div>";
	}
	else{
	 tmpString += "<span id='avail'>" + "Currently not in stock" + "</span>";
	 }
	 
	var handle = document.getElementById('data');
    handle.innerHTML = tmpString;
    var handle1 = document.getElementById('image');
    handle1.innerHTML = imgString;
    $("#dialog-modal").dialog('open'); 
	addtoCart();
              
    });

  }

function addtoCart() {  // You can't attach the handlers in a for loop
    for(var i=0; i < proj3_data.length-1; i++)
            doCart(i);
        }

function doCart(i) {
    var name = proj3_data[i][0]; // the sku 
	var cartname = proj3_data[i][0] + "check";
    var qtystr = name +"qty";
  $("[name='"+name+"']").on('click', function() {
        var qtyStr = name+"qty"; 
        var qty = $("[name='"+qtyStr+"']").val(); 
	    if(!qty) qty = 0;
        cart.add(name, qty);
        $('#count').text(cart.size());       
    });
	
   $("[name='"+qtystr+"']").bind("click keyup", function(event) {
	    var val = $(this).val();
		
	  if(!$.isNumeric(val) || parseInt(val) <= 0 ){ 
		 event.preventDefault();
		 var handle1 = document.getElementById('error');
         handle1.innerHTML = "Invalid Quantity" ;
		}
		else if( parseInt(val) > parseInt(proj3_data[i][10])){ 
		 event.preventDefault();
		 var handle1 = document.getElementById('error');
         handle1.innerHTML = "We have only " + proj3_data[i][10] +" left in stock" ;
		}
		else{
	     var handle1 = document.getElementById('error');
         handle1.innerHTML = "";
		}
   }); 
   
   $("[name='"+cartname+"']").on('click', function() {
        window.location.href = "http://jadran.sdsu.edu/jadrn046/html/cart.html";    
    });
	 
  }
});
   