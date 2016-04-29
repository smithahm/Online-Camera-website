$(document).ready( function() {
   var cart = new shopping_cart("jadrn046");
   $('#count').text(cart.size());  
   
    $('.morebutton').on('click', function() {
     window.location.href = "http://jadran.sdsu.edu/jadrn046/html/products.html";
   }); 
   
});