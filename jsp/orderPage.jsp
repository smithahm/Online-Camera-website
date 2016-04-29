<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
 <title>Camera Online store </title>
 <link rel="stylesheet" href="../css/order.css" />
 <script src="http://jadran.sdsu.edu/jquery/jquery.js"></script> 
 <script src="../js/ajax_get_lib.js"></script>  
 <script src="../js/order.js"></script>
 <script src="../js/place.js"></script>
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

<div id="order">
<p> <span class="head">Shippping to : </span><%=  request.getParameter("name") %> <%=  request.getParameter("lname") %>, <%=  request.getParameter("address") %> <%=  request.getParameter("address2") %>, <%=  request.getParameter("city") %>, <%=  request.getParameter("state") %>, <%=  request.getParameter("zip") %>, 
<%= request.getParameter("area_phone") %> <%=  request.getParameter("prefix_phone") %> <%=  request.getParameter("phone") %> </p>
</div>

<div id="price">
</div>

<p class="head">Ordered Items: </p>
<div id="quant">
</div>

<aside id="second">
      <input type="button" value="Cancel" class="canbutton" />
      <input type="button" value="Place your order"  class="placbutton" /> 
</aside>

</div>
</body>
</html>