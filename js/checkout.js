function isEmpty(fieldValue) {
        return $.trim(fieldValue).length == 0;    
        } 

function isValidCity(city) {
        var pattern = /[0-9~!@#$%^&*()_+=:;",]/g;
     if(city.search(pattern) != -1)
           return false;
     else 
        return true;
    }

//To validate State
function isValidState(state) {                                
        var stateList = new Array("AK","AL","AR","AZ","CA","CO","CT","DC",
        "DC2","DE","FL","GA","GU","HI","IA","ID","IL","IN","KS","KY","LA",
        "MA","MD","ME","MH","MI","MN","MO","MS","MT","NC","ND","NE","NH",
        "NJ","NM","NV","NY","OH","OK","OR","PA","PR","RI","SC","SD","TN",
        "TX","UT","VA","VT","WA","WI","WV","WY");
        for(var i=0; i < stateList.length; i++) 
            if(stateList[i] == $.trim(state))
                return true;
        return false;
        } 

//To validate the date
function isValidDate(month, year) {
    
    var checkDate = new Date(year, month-1);    
    var checkMonth = checkDate.getMonth()+1;
    var checkYear = checkDate.getFullYear();
    
    if(month == checkMonth && year == checkYear)
        return true;
    else
        return false;          
        
}


$(document).ready( function() {
   var cart = new shopping_cart("jadrn046"); 
   var elementHandle = new Array();  
   var errorStatus = $('#message_line');
   $('#orderPage').hide();

  elementHandle[0] = $('[name="name"]');
  elementHandle[1] = $('[name="lname"]');
  elementHandle[2] = $('[name="address"]');
  elementHandle[3] = $('[name="address2"]');
  elementHandle[4] = $('[name="city"]');
  elementHandle[5] = $('[name="state"]');
  elementHandle[6] = $('[name="zip"]');
  elementHandle[7] = $('[name="area_phone"]');
  elementHandle[8] = $('[name="prefix_phone"]');
  elementHandle[9] = $('[name="phone"]');
  elementHandle[10] = $('[name="bname"]');
  elementHandle[11] = $('[name="blname"]');
  elementHandle[12] = $('[name="baddress"]');
  elementHandle[13] = $('[name="baddress2"]');
  elementHandle[14] = $('[name="bcity"]');
  elementHandle[15] = $('[name="bstate"]');
  elementHandle[16] = $('[name="bzip"]');
  elementHandle[17] = $('[name="barea_phone"]');
  elementHandle[18] = $('[name="bprefix_phone"]');
  elementHandle[19] = $('[name="bphone"]');
  elementHandle[20] = $('[name="mob"]');
  elementHandle[21] = $('[name="yob"]');
  elementHandle[22] = $('[name="soc"]');


   $('#count').text(cart.size());
   elementHandle[0].focus();     

   function isValidData(){

       if(isEmpty(elementHandle[0].val())) {
            elementHandle[0].addClass("error");
            errorStatus.text("Please enter your first name");
            elementHandle[0].focus();
            return false;
            }

       if(isEmpty(elementHandle[1].val())) {
            elementHandle[1].addClass("error");
            errorStatus.text("Please enter your last name");
            elementHandle[1].focus();
            error_state = true;
            return false;
            }

      if(isEmpty(elementHandle[2].val())) {
            elementHandle[2].addClass("error");
            errorStatus.text("Please enter your address");
            elementHandle[2].focus();
            return false;
            }

     //City validation. Checks for Empty value
  if(isEmpty(elementHandle[4].val())) {
            elementHandle[4].addClass("error");
            errorStatus.text("Please enter your City");
            elementHandle[4].focus();
            return false;
            }

 //City validation. Only hiphen, `, 'apostrophe characters are allowed along with Alphabets
  if(!isValidCity(elementHandle[4].val())) {
            elementHandle[4].addClass("error");
            errorStatus.text("City appears to have invalid characters.");
            elementHandle[4].focus();
            return false;
            }

  //State Validation
   if(isEmpty(elementHandle[5].val())) {
            elementHandle[5].addClass("error");
            errorStatus.text("Please enter your state");
            elementHandle[5].focus();            
            return false;
            }
   if(!isValidState(elementHandle[5].val())) {
            elementHandle[5].addClass("error");
            errorStatus.text("The state appears to be invalid, "+
            "please use the two letter state abbreviation");
            elementHandle[5].focus();            
            return false;
            }

 //ZIp Code validation
    if(isEmpty(elementHandle[6].val())) {
            elementHandle[6].addClass("error");
            errorStatus.text("Please enter your zip code");
            elementHandle[6].focus();            
            return false;
            }
    if(!$.isNumeric(elementHandle[6].val())) {
            elementHandle[6].addClass("error");
            errorStatus.text("The zip code appears to be invalid, "+
            "numbers only please. ");
            elementHandle[6].focus();            
            return false;
            }
    if(elementHandle[6].val().length != 5) {
            elementHandle[6].addClass("error");
            errorStatus.text("The zip code must have exactly five digits")
            elementHandle[6].focus();            
            return false;
            }

   //phone number validation
   if(isEmpty(elementHandle[7].val())) {
            elementHandle[7].addClass("error");
            errorStatus.text("Please enter your phone area code");
            elementHandle[7].focus();            
            return false;
            }            
   if(!$.isNumeric(elementHandle[7].val())) {
            elementHandle[7].addClass("error");
            errorStatus.text("The phone area code appears to be invalid, "+
            "numbers only please. ");
            elementHandle[7].focus();            
            return false;
            }
   if(elementHandle[7].val().length != 3) {
            elementHandle[7].addClass("error");
            errorStatus.text("The phone area code must have exactly three digits")
            elementHandle[7].focus();            
            return false;
            }   

   if(isEmpty(elementHandle[8].val())) {
            elementHandle[8].addClass("error");
            errorStatus.text("Please enter your phone number prefix");
            elementHandle[8].focus();            
            return false;
            }           
   if(!$.isNumeric(elementHandle[8].val())) {
            elementHandle[8].addClass("error");
            errorStatus.text("The phone number prefix appears to be invalid, "+
            "numbers only please. ");
            elementHandle[8].focus();            
            return false;
            }
   if(elementHandle[8].val().length != 3) {
            elementHandle[8].addClass("error");
            errorStatus.text("The phone number prefix must have exactly three digits")
            elementHandle[8].focus();            
            return false;
            }

   if(isEmpty(elementHandle[9].val())) {
            elementHandle[9].addClass("error");
            errorStatus.text("Please enter your phone number");
            elementHandle[9].focus();            
            return false;
            }            
   if(!$.isNumeric(elementHandle[9].val())) {
            elementHandle[9].addClass("error");
            errorStatus.text("The phone number appears to be invalid, "+
            "numbers only please. ");
            elementHandle[9].focus();            
            return false;
            }
   if(elementHandle[9].val().length != 4) {
            elementHandle[9].addClass("error");
            errorStatus.text("The phone number must have exactly four digits")
            elementHandle[9].focus();            
            return false;
            }

      

 
     return true;
  }

function checkShippingAddress(){
      
    if($('[name="sameAddress"]')[0].checked == false) {

    if(isEmpty(elementHandle[10].val())) {
            elementHandle[10].addClass("error");
            errorStatus.text("Please enter your first name");
            elementHandle[10].focus();
            return false;
            }

       if(isEmpty(elementHandle[11].val())) {
            elementHandle[11].addClass("error");
            errorStatus.text("Please enter your last name");
            elementHandle[11].focus();
            error_state = true;
            return false;
            }

      if(isEmpty(elementHandle[12].val())) {
            elementHandle[12].addClass("error");
            errorStatus.text("Please enter your address");
            elementHandle[12].focus();
            return false;
            }

     //City validation. Checks for Empty value
  if(isEmpty(elementHandle[14].val())) {
            elementHandle[14].addClass("error");
            errorStatus.text("Please enter your City");
            elementHandle[14].focus();
            return false;
            }

 //City validation. Only hiphen, `, 'apostrophe characters are allowed along with Alphabets
  if(!isValidCity(elementHandle[14].val())) {
            elementHandle[14].addClass("error");
            errorStatus.text("City appears to have invalid characters.");
            elementHandle[14].focus();
            return false;
            }

  //State Validation
   if(isEmpty(elementHandle[15].val())) {
            elementHandle[15].addClass("error");
            errorStatus.text("Please enter your state");
            elementHandle[15].focus();            
            return false;
            }
   if(!isValidState(elementHandle[15].val())) {
            elementHandle[15].addClass("error");
            errorStatus.text("The state appears to be invalid, "+
            "please use the two letter state abbreviation");
            elementHandle[15].focus();            
            return false;
            }

 //ZIp Code validation
    if(isEmpty(elementHandle[16].val())) {
            elementHandle[16].addClass("error");
            errorStatus.text("Please enter your zip code");
            elementHandle[16].focus();            
            return false;
            }
    if(!$.isNumeric(elementHandle[16].val())) {
            elementHandle[16].addClass("error");
            errorStatus.text("The zip code appears to be invalid, "+
            "numbers only please. ");
            elementHandle[16].focus();            
            return false;
            }
    if(elementHandle[16].val().length != 5) {
            elementHandle[16].addClass("error");
            errorStatus.text("The zip code must have exactly five digits")
            elementHandle[16].focus();            
            return false;
            }

   //phone number validation
   if(isEmpty(elementHandle[17].val())) {
            elementHandle[17].addClass("error");
            errorStatus.text("Please enter your phone area code");
            elementHandle[17].focus();            
            return false;
            }            
   if(!$.isNumeric(elementHandle[17].val())) {
            elementHandle[17].addClass("error");
            errorStatus.text("The phone area code appears to be invalid, "+
            "numbers only please. ");
            elementHandle[17].focus();            
            return false;
            }
   if(elementHandle[17].val().length != 3) {
            elementHandle[17].addClass("error");
            errorStatus.text("The phone area code must have exactly three digits")
            elementHandle[17].focus();            
            return false;
            }   

   if(isEmpty(elementHandle[18].val())) {
            elementHandle[18].addClass("error");
            errorStatus.text("Please enter your phone number prefix");
            elementHandle[18].focus();            
            return false;
            }           
   if(!$.isNumeric(elementHandle[18].val())) {
            elementHandle[18].addClass("error");
            errorStatus.text("The phone number prefix appears to be invalid, "+
            "numbers only please. ");
            elementHandle[18].focus();            
            return false;
            }
   if(elementHandle[18].val().length != 3) {
            elementHandle[18].addClass("error");
            errorStatus.text("The phone number prefix must have exactly three digits")
            elementHandle[18].focus();            
            return false;
            }

   if(isEmpty(elementHandle[19].val())) {
            elementHandle[19].addClass("error");
            errorStatus.text("Please enter your phone number");
            elementHandle[19].focus();            
            return false;
            }            
   if(!$.isNumeric(elementHandle[19].val())) {
            elementHandle[19].addClass("error");
            errorStatus.text("The phone number appears to be invalid, "+
            "numbers only please. ");
            elementHandle[19].focus();            
            return false;
            }
   if(elementHandle[19].val().length != 4) {
            elementHandle[19].addClass("error");
            errorStatus.text("The phone number must have exactly four digits")
            elementHandle[19].focus();            
            return false;
            }
    }
	if(isEmpty(elementHandle[22].val())) {
            elementHandle[22].addClass("error");
            errorStatus.text("Please enter your security code");
            elementHandle[22].focus();            
            return false;
            }            
   if(!$.isNumeric(elementHandle[22].val())) {
            elementHandle[22].addClass("error");
            errorStatus.text("The security code appears to be invalid, "+
            "numbers only please. ");
            elementHandle[22].focus();            
            return false;
            }
			
    if($('[name="ctype"]')[0].checked == false && $('[name="ctype"]')[1].checked == false && $('[name="ctype"]')[2].checked == false && $('[name="ctype"]')[3].checked == false ) {
            $('[name="ctype"]').addClass("error");
            errorStatus.text("Please select card type");
            $('[name="ctype"]').focus();
            return false;
            }


  if(isEmpty($('[name="cnum"]').val())) {
            $('[name="cnum"]').addClass("error");
            errorStatus.text("Please enter your credit card Number");
            $('[name="cnum"]').focus();
            error_state = true;
            return false;
            }

 if(!$.isNumeric($('[name="cnum"]').val())) {
            $('[name="cnum"]').addClass("error");
            errorStatus.text("The card number appears to be invalid, "+
            "numbers only please.");
            $('[name="cnum"]').focus();            
            return false;
            }

 if($('[name="cnum"]').val().length != 16) {
            $('[name="cnum"]').addClass("error");
            errorStatus.text("The card number must have exactly 16 digits")
            $('[name="cnum"]').focus();            
            return false;
            }

 
    //To check Month
  if(isEmpty(elementHandle[20].val())) {
            elementHandle[20].addClass("error");
            errorStatus.text("Please enter month of card expiration");
            elementHandle[20].focus();
            return false;
            }

      //To check Year
   if(isEmpty(elementHandle[21].val())) {
            elementHandle[21].addClass("error");
            errorStatus.text("Please enter card expiration year");
            elementHandle[21].focus();
            return false;
            }

    //to validate date
   if(!isValidDate(elementHandle[20].val(), elementHandle[21].val())) {
            elementHandle[20].addClass("error");
            errorStatus.text("Date appears to be invalid");
            elementHandle[20].focus();
            return false;
            }
  
     return true;
  }

$('form').on('submit', function(e) {
        for(var i=0; i < 19; i++)
          elementHandle[i].removeClass("error");
          errorStatus.text("");
        if(isValidData() && checkShippingAddress()) {
             return true;
        }
       else{
        return false;
     }
  });

$(':reset').on('click', function() {
        for(var i=0; i < 19; i++)
            elementHandle[i].removeClass("error");
        errorStatus.text("");
        });
	



//To Uppercase
   elementHandle[5].on('keyup', function() {
        elementHandle[5].val(elementHandle[5].val().toUpperCase());
        });
  
  elementHandle[15].on('keyup', function() {
        elementHandle[15].val(elementHandle[15].val().toUpperCase());
        });
        
  //Phone number key up 
  elementHandle[7].on('keyup', function() {
        if(elementHandle[7].val().length == 3)
            elementHandle[8].focus();
            });
            
  elementHandle[8].on('keyup', function() {
        if(elementHandle[8].val().length == 3)
            elementHandle[9].focus();
            }); 

  //Cell phone
  elementHandle[17].on('keyup', function() {
        if(elementHandle[17].val().length == 3)
            elementHandle[18].focus();
            });
            
  elementHandle[18].on('keyup', function() {
        if(elementHandle[18].val().length == 3)
            elementHandle[19].focus();
            });


 //Parents First name 
  elementHandle[0].on('blur', function() {
        if(isEmpty(elementHandle[0].val()))
            return;
        $(this).removeClass("error");
        errorStatus.text("");
        });

  //Parents Last name 
  elementHandle[1].on('blur', function() {
        if(isEmpty(elementHandle[1].val()))
            return;
        $(this).removeClass("error");
        errorStatus.text("");
        });

  //Addr1 field validation
  elementHandle[2].on('blur', function() {
        if(isEmpty(elementHandle[2].val()))
            return;
        
        $(this).removeClass("error");
        errorStatus.text("");
        });

  //City field
  elementHandle[4].on('blur', function() {
        if(isEmpty(elementHandle[4].val()))
            return;
        if(isValidCity(elementHandle[4].val()))
           {
             $(this).removeClass("error");
             errorStatus.text("");
           }
        });

  //State field
  elementHandle[5].on('blur', function() {
        if(isEmpty(elementHandle[5].val()))
            return;
        if(isValidState(elementHandle[5].val()))
           {
             $(this).removeClass("error");
             errorStatus.text("");
           }
        });

  //Zip code 
  elementHandle[6].on('blur', function() {
        if(isEmpty(elementHandle[6].val()))
            return;
        if($.isNumeric(elementHandle[6].val()))
           { if(elementHandle[6].val().length == 5)
              {
                $(this).removeClass("error");
                errorStatus.text("");
              }
           }
        });

 //Home Area phone field
  elementHandle[7].on('blur', function() {
        if(isEmpty(elementHandle[7].val()))
            return;
        if($.isNumeric(elementHandle[7].val()))
            { if(elementHandle[7].val().length == 3)
              {
                $(this).removeClass("error");
                errorStatus.text("");
              }
            }
        });
  
  //Security code
  elementHandle[22].on('blur', function() {
        if(isEmpty(elementHandle[22].val()))
            return;
        if($.isNumeric(elementHandle[22].val()))
            {
             $(this).removeClass("error");
             errorStatus.text("");
            }
         
      });

  //Home phone prefix number
  elementHandle[8].on('blur', function() {
        if(isEmpty(elementHandle[8].val()))
            return;
        if($.isNumeric(elementHandle[8].val()))
           { if(elementHandle[8].val().length == 3)
            {
             $(this).removeClass("error");
             errorStatus.text("");
            }
         }
      });
 
 //Home phone number
  elementHandle[9].on('blur', function() {
        if(isEmpty(elementHandle[9].val()))
            return;
        if($.isNumeric(elementHandle[9].val()))
           {  if(elementHandle[9].val().length == 4)
             {
               $(this).removeClass("error");
               errorStatus.text("");
             }
           }
        });

// Check for month
 elementHandle[20].on('blur', function() {
        if(isEmpty(elementHandle[20].val()))
            return;
        $(this).removeClass("error");
        errorStatus.text("");
        });

 
  // Check for year,age and valid date
 elementHandle[21].on('blur', function() {
        if(isEmpty(elementHandle[21].val()))
            return;
        if(isValidDate(elementHandle[20].val(), elementHandle[21].val())) {
		$(this).removeClass("error");
        	errorStatus.text("");
         }
     }); 

  $('[name="cnum"]').on('blur', function() {
        if(isEmpty($('[name="cnum"]').val()))
            return;
        if($.isNumeric($('[name="cnum"]').val()))
           { if($('[name="cnum"]').val().length == 16)
            {
             $(this).removeClass("error");
             errorStatus.text("");
            }
           }
        });


   //Card Type validation
  $('[name="ctype"]').on('blur', function() {
        if($('[name="ctype"]')[0].checked == true || $('[name="ctype"]')[1].checked == true || $('[name="ctype"]')[2].checked == true || $('[name="ctype"]')[3].checked == true ){
             $(this).removeClass("error");
             errorStatus.text(""); 
           }
        });


  //Parents First name 
  elementHandle[10].on('blur', function() {
        if(isEmpty(elementHandle[10].val()))
            return;
        $(this).removeClass("error");
        errorStatus.text("");
        });

  //Parents Last name 
  elementHandle[11].on('blur', function() {
        if(isEmpty(elementHandle[11].val()))
            return;
        $(this).removeClass("error");
        errorStatus.text("");
        });

  //Addr1 field validation
  elementHandle[12].on('blur', function() {
        if(isEmpty(elementHandle[12].val()))
            return;
        
        $(this).removeClass("error");
        errorStatus.text("");
        });

  //City field
  elementHandle[14].on('blur', function() {
        if(isEmpty(elementHandle[14].val()))
            return;
        if(isValidCity(elementHandle[14].val()))
           {
             $(this).removeClass("error");
             errorStatus.text("");
           }
        });

  //State field
  elementHandle[15].on('blur', function() {
        if(isEmpty(elementHandle[15].val()))
            return;
        if(isValidState(elementHandle[15].val()))
           {
             $(this).removeClass("error");
             errorStatus.text("");
           }
        });

  //Zip code 
  elementHandle[16].on('blur', function() {
        if(isEmpty(elementHandle[16].val()))
            return;
        if($.isNumeric(elementHandle[16].val()))
           { if(elementHandle[16].val().length == 5)
              {
                $(this).removeClass("error");
                errorStatus.text("");
              }
           }
        });

 //Home Area phone field
  elementHandle[17].on('blur', function() {
        if(isEmpty(elementHandle[17].val()))
            return;
        if($.isNumeric(elementHandle[17].val()))
            { if(elementHandle[17].val().length == 3)
              {
                $(this).removeClass("error");
                errorStatus.text("");
              }
            }
        });

  //Home phone prefix number
  elementHandle[18].on('blur', function() {
        if(isEmpty(elementHandle[18].val()))
            return;
        if($.isNumeric(elementHandle[18].val()))
           { if(elementHandle[18].val().length == 3)
            {
             $(this).removeClass("error");
             errorStatus.text("");
            }
         }
      });
 
 //Home phone number
  elementHandle[19].on('blur', function() {
        if(isEmpty(elementHandle[19].val()))
            return;
        if($.isNumeric(elementHandle[19].val()))
           {  if(elementHandle[19].val().length == 4)
             {
               $(this).removeClass("error");
               errorStatus.text("");
             }
           }
        });
  

});


 function FillBilling(f) {
     if(f.sameAddress.checked == true) {
    f.bname.value = f.name.value;
    f.blname.value = f.lname.value;
    f.baddress.value = f.address.value;
    f.baddress2.value = f.address2.value;
    f.bcity.value = f.city.value;
    f.bstate.value = f.state.value;
    f.bzip.value = f.zip.value;
    f.bphone.value = f.phone.value;
    f.barea_phone.value = f.area_phone.value;
    f.bprefix_phone.value = f.prefix_phone.value;
  }

  else{
    f.bname.value = "";
    f.blname.value = "";
    f.baddress.value = "";
    f.baddress2.value = "";
    f.bcity.value = "";
    f.bstate.value = "";
    f.bzip.value = "";
    f.bphone.value ="";
    f.barea_phone.value ="";
    f.bprefix_phone.value ="";
   }
}
