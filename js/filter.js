var proj3_fdata;
var proj3_pdata;
var proj3_sdata;
var firstval;
var secondval;
var valueToPass;
var search_this;
var qtyexceeded = false;

$(document).ready(function() {
    proj3_fdata = new Array();
	proj3_pdata = new Array();
	proj3_sdata = new Array();
 
  $('.brand').click(function(e){
  proj3_fdata = new Array();
  e.preventDefault();
  valueToPass = $(this).text();
  $.get('/jadrn046/servlet/FilterDB', {"search_it": valueToPass}, handleFData);
});

$('.price').click(function(e){
  proj3_pdata = new Array();
  e.preventDefault();
  var valueToPass = $(this).text();
  var tmpArray = valueToPass .split('-');
   firstval = tmpArray[0].substring(1);
   secondval = tmpArray[1].substring(1);
  $.get('/jadrn046/servlet/FilterPrice', {"first_value": firstval , "second_value":secondval}, handlePriceData);
 });
 
 $("#button_find").click(function(event){
	event.preventDefault();
	search_ajax_way();
	});

	$("#search_query").keyup(function(event){
	event.preventDefault();
	search_ajax_way();
	});

 function search_ajax_way(){
	  proj3_sdata = new Array();
      $("#search_results").show();
      search_this=$("#search_query").val();
      $.get('/jadrn046/servlet/SearchDB', {"search_it":search_this}, handleDBData);
    }

function handlePriceData(response){
	if($.trim(response) == "NF") {
		$('#display').hide();
		$('#noMatch').show();
		$('#DSLR').hide();
		$('#found').hide();
		tmpString = "";
		tmpString = "Sorry, No results found!";
		var handle = document.getElementById('noMatch');
        handle.innerHTML = tmpString;
	}
	else{
		$('#found').show();
		var handle = document.getElementById('found');
        handle.innerHTML = "Price Range $" + firstval + " to $" +secondval;
		$('#display').show();
		$('#DSLR').hide();
		$('#noMatch').hide();
        $('#onlyFilter').hide();
        var tmpArray = response.split('|');
        for(var i=0; i < tmpArray.length; i++) {
        innerArray = tmpArray[i].split(':');
        proj3_pdata[i] = innerArray;
		
       }
        storePdata();	
	}
}

function handleFData(response){
	if($.trim(response) == "NF") {
		$('#display').hide();
		$('#noMatch').show();
		$('#DSLR').hide();
		$('#found').hide();
		tmpString = "";
		tmpString = "Sorry, No results found for " + "'" + valueToPass + "'";
		var handle = document.getElementById('noMatch');
        handle.innerHTML = tmpString;
	}
	else{
	  $('#found').show();
      var handle = document.getElementById('found');
      handle.innerHTML = "'" + valueToPass + "'";
     $('#display').show();
	 $('#DSLR').hide();
	 $('#noMatch').hide();
     $('#onlyFilter').hide();
     var tmpArray = response.split('|');
     for(var i=0; i < tmpArray.length; i++) {
        innerArray = tmpArray[i].split(':');
        proj3_fdata[i] = innerArray;
        }
      storeFdata();
	}
}

function handleDBData(response){
	if($.trim(response) == "NF") {
		$('#display').hide();
		$('#noMatch').show();
		$('#DSLR').hide();
		$('#found').hide();
		tmpString = "";
		tmpString = "Sorry, No results found for " + "'" + search_this + "'";
		var handle = document.getElementById('noMatch');
        handle.innerHTML = tmpString;
	}
	else{
	 $('#found').show();
	 var handle = document.getElementById('found');
     handle.innerHTML = "Results found for " + "'" + search_this + "'";
     $('#display').show();
	 $('#DSLR').hide();
	 $('#noMatch').hide();
     $('#onlyFilter').hide();
     var tmpArray = response.split('|');
     for(var i=0; i < tmpArray.length; i++) {
        innerArray = tmpArray[i].split(':');
        proj3_sdata[i] = innerArray;
        }
      storeSdata();
	}
}


function storeFdata(){
  tmpString = ""; 
  for(var i=0; i < proj3_fdata.length - 1; i++) {
        tmpString += "<section>";
        tmpString += "<a href='#' name='"+ proj3_fdata[i][0]+"' id='click'><img src=\"/~jadrn046/proj1/_p_images/"+ proj3_fdata[i][8]+"\"  /></a>";
        tmpString += "<br />";
        tmpString += "<b>"+ proj3_fdata[i][3] + "</b><br />";
        tmpString += "<b>Price: $</b>"+ proj3_fdata[i][7] + "<br />";
		if(proj3_fdata[i][9] == "In Stock"){   
        tmpString += "<b><span id='red'>"+ proj3_fdata[i][9] + "</span></b><br/>";
		}
		else{
			tmpString += "<b><span id='green'>"+ proj3_fdata[i][9] + "</span></b><br/>";
		}
        tmpString += "</section>";                            
       }
        var handle = document.getElementById('display');
        handle.innerHTML = tmpString;
        addHandlerToFButtons();
}

function storeSdata(){
  tmpString = ""; 
  for(var i=0; i < proj3_sdata.length - 1; i++) {
        tmpString += "<section>";
        tmpString += "<a href='#' name='"+ proj3_sdata[i][0]+"' id='click'><img src=\"/~jadrn046/proj1/_p_images/"+ proj3_sdata[i][8]+"\"  /></a>";
        tmpString += "<br />";
        tmpString += "<b>"+ proj3_sdata[i][3] + "</b><br />";
        tmpString += "<b>Price: $</b>"+ proj3_sdata[i][7] + "<br />";
        if(proj3_sdata[i][9] == "In Stock"){   
        tmpString += "<b><span id='red'>"+ proj3_sdata[i][9] + "</span></b><br/>";
		}
		else{
			tmpString += "<b><span id='green'>"+ proj3_sdata[i][9] + "</span></b><br/>";
		}
        tmpString += "</section>";                            
       }
        var handle = document.getElementById('display');
        handle.innerHTML = tmpString;
        addHandlerToSButtons();
}


function addHandlerToFButtons() {  // You can't attach the handlers in a for loop
    for(var i=0; i < proj3_fdata.length-1; i++)
            doFHandler(i);
        }

function addHandlerToSButtons() {  // You can't attach the handlers in a for loop
    for(var i=0; i < proj3_sdata.length-1; i++)
            doSHandler(i);
        }


function doSHandler(i) {
    var name = proj3_sdata[i][0]; // the sku
   $("[name='"+name+"']").on('click', function() {
    $.category = proj3_sdata[i][1];
    $.vendor = proj3_sdata[i][2];
    $.mid = proj3_sdata[i][3];
    $.retail = proj3_sdata[i][7];
    $.image = proj3_sdata[i][8];
    $.description = proj3_sdata[i][4];
    $.features = proj3_sdata[i][5];  
    tmpString = "";
    imgString = ""; 
    imgString += "<img src=\"/~jadrn046/proj1/_p_images/"+ $.image +"\"  width=\"220px\"  height=\"220px\"  />"; 
    tmpString += "<br />";
    tmpString += "<b>"+ $.mid + "</b><br />";
    tmpString += "<b>Vendor: </b>"+ $.vendor + "<br/>";
    tmpString += "<b>Price: $</b>"+ $.retail + "<br /><br/>";
    tmpString += "<b>Product Description: </b>"+ $.description + "<br/><br/>";  
    tmpString += "<b>Features: </b><br />"+ $.features + "<br/><br />"; 
	   
    if(proj3_sdata[i][9] == "In Stock"){   
    tmpString += "<b>Quantity: </b><input type='number' min='1' name='"+proj3_sdata[i][0]+"qty' id='qty' />";
	tmpString += "<input type='button' name='"+proj3_sdata[i][0]+"' value='Add To Cart'  id='addButton' />";
	tmpString += "<div id='error'></div>";
	}
	else{
	 tmpString += "<span id='avail'>" + "Currently not in Stock" + "</span>";
	 tmpString += "<div id='error'></div>";
	 }            
    var handle = document.getElementById('data');
    handle.innerHTML = tmpString;

    var handle1 = document.getElementById('image');
    handle1.innerHTML = imgString;
    $("#dialog-modal").dialog('open');
    addtoSCart();                   
  });

  }

function doFHandler(i) {
    var name = proj3_fdata[i][0]; // the sku
   $("[name='"+name+"']").on('click', function() {
    $.category = proj3_fdata[i][1];
    $.vendor = proj3_fdata[i][2];
    $.mid = proj3_fdata[i][3];
    $.retail = proj3_fdata[i][7];
    $.image = proj3_fdata[i][8];
    $.description = proj3_fdata[i][4];
    $.features = proj3_fdata[i][5];
   
    tmpString = "";
    imgString = ""; 
    imgString += "<img src=\"/~jadrn046/proj1/_p_images/"+ $.image +"\"  width=\"220px\"  height=\"220px\"  />"; 
    tmpString += "<br />";
    tmpString += "<b>"+ $.mid + "</b><br />";
    tmpString += "<b>Vendor: </b>"+ $.vendor + "<br/>";
    tmpString += "<b>Price: $</b>"+ $.retail + "<br /><br />";
    tmpString += "<b>Product Description: </b>"+ $.description + "<br/><br/>";  
    tmpString += "<b>Features: </b><br />"+ $.features + "<br/><br />"; 
	   
    if(proj3_fdata[i][9] == "In Stock"){   
    tmpString += "<b>Quantity: </b><input type='number' min='1' name='"+proj3_fdata[i][0]+"qty' id='qty' />";
	tmpString += "<input type='button' name='"+proj3_fdata[i][0]+"' value='Add To Cart'  id='addButton' />";
	tmpString += "<div id='error'></div>";
	}
	else{
	 tmpString += "<span id='avail'>" + "Currently not in Stock" + "</span>";
	 }            
    var handle = document.getElementById('data');
    handle.innerHTML = tmpString;

    var handle1 = document.getElementById('image');
    handle1.innerHTML = imgString;
    $("#dialog-modal").dialog('open');
    addtoFCart();                   
  });

  }

function addtoFCart() {  // You can't attach the handlers in a for loop
    for(var i=0; i < proj3_fdata.length-1; i++)
            doFCart(i);
        }

function doFCart(i) {
    var name = proj3_fdata[i][0]; // the sku 
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
		else if( parseInt(val) > parseInt(proj3_fdata[i][10])){
		 event.preventDefault();
		 var handle1 = document.getElementById('error');
         handle1.innerHTML = "We have only " + proj3_fdata[i][10] +" left in stock" ;	
		}
		else{
	     var handle1 = document.getElementById('error');
         handle1.innerHTML = "";
		}
   });
   
}


function addtoSCart() {  // You can't attach the handlers in a for loop
    for(var i=0; i < proj3_sdata.length-1; i++)
            doSCart(i);
        }

function doSCart(i) {
    var name = proj3_sdata[i][0]; // the sku 
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
		else if( parseInt(val) > parseInt(proj3_sdata[i][10])){
		 event.preventDefault();
		 var handle1 = document.getElementById('error');
         handle1.innerHTML = "We have only " + proj3_sdata[i][10] +" left in stock" ;	
		}
		else{
	     var handle1 = document.getElementById('error');
         handle1.innerHTML = "";
		}
   });
   
}



function storePdata(){
  tmpString = ""; 
  for(var i=0; i < proj3_pdata.length - 1; i++) {
        tmpString += "<section>";
        tmpString += "<a href='#' name='"+ proj3_pdata[i][0]+"' id='click'><img src=\"/~jadrn046/proj1/_p_images/"+ proj3_pdata[i][8]+"\"  /></a>" 
        tmpString += "<br />";
        tmpString += "<b>"+ proj3_pdata[i][3] + "</b><br />";
        tmpString += "<b>Retail Price: </b>"+ proj3_pdata[i][7] + "<br />";
        if(proj3_pdata[i][9] == "In Stock"){   
        tmpString += "<b><span id='red'>"+ proj3_pdata[i][9] + "</span></b><br/>";
		}
		else{
			tmpString += "<b><span id='green'>"+ proj3_pdata[i][9] + "</span></b><br/>";
		}
        tmpString += "</section>";                            
       }
        var handle = document.getElementById('display');
        handle.innerHTML = tmpString;
        addHandlerToPButtons();
}


function addHandlerToPButtons() {  // You can't attach the handlers in a for loop
    for(var i=0; i < proj3_pdata.length-1; i++)
            doPHandler(i);
        }



function doPHandler(i) {
    var name = proj3_pdata[i][0]; // the sku 
   $("[name='"+name+"']").on('click', function() {
    $.category = proj3_pdata[i][1];
    $.vendor = proj3_pdata[i][2];
    $.mid = proj3_pdata[i][3];
    $.retail = proj3_pdata[i][7];
    $.image = proj3_pdata[i][8];
    $.description = proj3_pdata[i][4];
    $.features = proj3_pdata[i][5];
    tmpString = "";
    imgString = ""; 
    imgString += "<img src=\"/~jadrn046/proj1/_p_images/"+ $.image +"\"  width=\"220px\"  height=\"220px\"  />"; 
    tmpString += "<br />";
    tmpString += "<b>"+ $.mid + "</b><br />";
    tmpString += "<b>Vendor: </b>"+ $.vendor + "<br/>";
    tmpString += "<b>Price: $</b>"+ $.retail + "<br /><br />";
    tmpString += "<b>Product Description: </b>"+ $.description + "<br/><br />";  
    tmpString += "<b>Features: </b><br />"+ $.features + "<br/><br/>";    
    if(proj3_pdata[i][9] == "In Stock"){   
    tmpString += "<b>Quantity: </b><input type='number' min='1' name='"+proj3_pdata[i][0]+"qty' id='qty' />";
	tmpString += "<input type='button' name='"+proj3_pdata[i][0]+"' value='Add To Cart'  id='addButton' />";
	tmpString += "<div id='error'></div>";
	}
	else{
	 tmpString += "<span id='avail'>" + "Currently not in Stock" + "</span>";
	 }            
    var handle = document.getElementById('data');
    handle.innerHTML = tmpString;
    var handle1 = document.getElementById('image');
    handle1.innerHTML = imgString;
    $("#dialog-modal").dialog('open');
    addtoPCart();                   
  });

  }

function addtoPCart() {  // You can't attach the handlers in a for loop
    for(var i=0; i < proj3_pdata.length-1; i++)
            doPCart(i);
        }

function doPCart(i) {
    var name = proj3_pdata[i][0]; // the sku 
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
		else if( parseInt(val) > parseInt(proj3_pdata[i][10])){
		 event.preventDefault();
		 var handle1 = document.getElementById('error');
         handle1.innerHTML = "We have only " + proj3_pdata[i][10] +" left in stock" ;	
		}
		else{
	     var handle1 = document.getElementById('error');
         handle1.innerHTML = "";
		}
    });
  }
 
});