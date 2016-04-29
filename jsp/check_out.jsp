<% if(!helpers.AuthHelper.isValidSession(request)) response.sendRedirect("/jadrn046/login.html"); %>
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
   "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">



<head>
	<meta charset="utf-8">
    <meta http-equiv="Pragma" content="no-cache">
    <meta http-equiv="cache-control" content="no-cache, no-store">
    <meta http-equiv="Expires" CONTENT="-1">   
    
    <title>Sam's Camera store</title>
    <link rel="stylesheet" type="text/css" href="../menu.css" />
    <script type="text/javascript" src="http://jadran.sdsu.edu/jquery/jquery.js"></script> 
    <script type="text/javascript" src="../checkout.js"></script> 
    <script type="text/javascript" src="../ajax_get_lib.js"></script>      	
          
</head>

<body>
 <div id="main">
    <div id="header"> Sam camera store</div>
    <div id="container"> 
      <div id="navigation">
        <ul>
            <li><a href="DispatchServlet?param=receive">Inventory Recieved</a></li> 
            <li id="recieve"><a href="DispatchServlet?param=checkout">Inventory Sentout</a></li>           
            <li><a href="/jadrn046/servlet/Logout">logout</a></li>
        </ul>
    </div> 
    
    <fieldset>
       
      <legend>Inventory Sentout Info</legend>
       <form  method="post" action="/jadrn046/servlet/DispatchServlet">
     
         <ul>
          
            <li><label>SKU :</label>
                <input type="text" name="sku"  size="20"/> &nbsp;&nbsp;&nbsp; <label>Date :</label>
                <input type="text" name="date"  size="8"/></li></ul>
		
	  <div id="fold">  

          <p> Product Details :</p>

          <table>  
            <tr><td id="logo"> </td></tr>
            <tr><td><span id="style">Vendor :  </span><span class="ven"></span></td></tr>
            <tr><td><span id="style1">Category : </span><span class="cat"></span></td></tr>
            <tr><td><span id="style2">Manufacturer's ID : </span><span class="mid"></span></td></tr>
            <tr><td><span id="style3">Retail : $</span><span class="retail"></span></td></tr>
  
          </table>
          
          </div>      
      
         <table>
           <tr><td> <label>Quantity :</label>
                <input type="text" name="qty"  size="10"/> </td></tr>
        </table>
       
 
       
  
       <div id="message_line2">&nbsp;</div>
   

        <div class="button_panel">  
            <input type="button" value="Reset" class="resetbutton" />
            <input type="submit" value="Submit"  class="button" /> 
        </div>  
             
       </form>
     </fieldset>        
  </div> 

</div> 
    
</body>
</html>

