<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
 <title>Camera Online store </title>
 <link rel="stylesheet" href="../css/checkout.css" />
 <script src="http://jadran.sdsu.edu/jquery/jquery.js"></script> 
 <script src="../js/ajax_get_lib.js"></script>  
 <script src="../js/checkout.js"></script>
 <script src="../js/shopping_cart.js"></script>
 
</head>
<body>
<div class="body">
 <header class="mainheader">
  <img src="../images/logo.jpg" alt="ok">
  <nav>
   <ul>
     <li><a href="../proj3.html">Home</a></li>
     <li><a href="../html/products.html">Products</a></li>
     <li><a href="../html/contact.html">Contact</a></li>
     <li id="counter"><a href="../html/cart.html">Shopping Cart: <span id="count">0</span></a></li>
   </ul>
 </nav>

 </header>

<div id="form"> 
<fieldset>
      <form  name="personal_info" method="post" action="http://jadran.sdsu.edu/jadrn046/servlet/DispatchServlet?param=order">

         <p class="mandatory">NOTE : All fields are required unless indicated as optional</p>
 
         <p class="heading">Shipping information </p>
         <ul>
          
            <li><label>First Name:</label>
                <input type="text" name="name" size="20" /> &nbsp; &nbsp; <label>Last Name:</label>
                <input type="text" name="lname" size="20" /></li>
            
            <li><label>Address:</label>
                <input type="text" name="address" size="55"/></li>
 
            <li><label>Address: </label>
                <input type="text" name="address2" size="55" /></li> 
       
            <li><label>City:</label>
                <input type="text" name="city" size="23" /> &nbsp;&nbsp;
                
                <label>State(eg:CA,MI): </label>
                    <input type="text" name="state" size="3"  maxlength="3" />   &nbsp;&nbsp;  
                    
                <label>Zip</label>
                <input type="text" name="zip" size="5" maxlength="5" /> 
           &nbsp; &nbsp; 
           <label>Phone number: </label>
                (<input type="text" name="area_phone" size="3" maxlength="3" />) &nbsp;

                 <input type="text" name="prefix_phone" size="3" maxlength="3" /> -&nbsp;

                <input type="text" name="phone" size="4" maxlength="4" /></li> 
       </ul>
   
    
   <ul>
      
    	<li>&nbsp;&nbsp;<input type="checkbox" name="sameAddress" value="sameAddress" onclick="FillBilling(this.form)" />
<span class="color">Check this box if Billing Address and Shipping Address are the same</span><br /></li>
            


 </ul>

        <p class="heading">Billing Information</p>
     <ul >
      <li><label>First Name:</label>
                <input type="text" name="bname" size="20" /> &nbsp; &nbsp; <label>Last Name:</label>
                <input type="text" name="blname" size="20" /></li>
      <li><label>Address:</label>
                <input type="text" name="baddress" size="55"/></li>
 
            <li><label>Address:</label>
                <input type="text" name="baddress2" size="55" /></li> 


      <li><label>City:</label>
                <input type="text" name="bcity" size="20" /> &nbsp; &nbsp; <label>State:</label>
                <input type="text" name="bstate" size="2" /> &nbsp; &nbsp; <label>Zip:</label>
                <input type="text" name="bzip" size="9" /> &nbsp;&nbsp;
      
           <label>Phone number: </label>
                (<input type="text" name="barea_phone" size="3" maxlength="3" />) &nbsp;
                 <input type="text" name="bprefix_phone" size="3" maxlength="3" /> -&nbsp;
                <input type="text" name="bphone" size="4" maxlength="4" /></li> 


     </ul>

    <p class="heading">Card details :</p>
      <ul>
      <li><label>Payment Type</label>
               <input type="radio" name="ctype" value="Visa" /><span class="color">Visa</span> &nbsp; <input type="radio" name="ctype" value="Master Card"/><span class="color">MasterCard </span>&nbsp;<input type="radio" name="ctype" value="Discover" /><span class="color">Discover</span>&nbsp; <input type="radio" name="ctype" value="American Express"/><span class="color">American Express</span></li> 

      <li><label>Card Number</label>
                <input type="text" name="cnum" size="20" /> &nbsp; &nbsp; 

<label>Expiration date:</label> &nbsp;&nbsp;
                 <label>mm</label> <input type="text" name="mob" size="2" maxlength="2" /> &nbsp;&nbsp; <label>yyyy</label><input type="text" name="yob" size="4" maxlength="4"/> &nbsp;&nbsp; <label>Security code</label> <input type="text" name="soc" size="4" maxlength="3" /> </li>
      
     </ul>

 <div id="message_line">&nbsp;</div>
  <div class="button_panel">  
            <input type="reset" value="Reset" class="button" />
            <input type="submit" value="Submit"  class="sbutton" />
        </div> 

      </form>
</fieldset>
</div>


</div>
</body>
</html>
