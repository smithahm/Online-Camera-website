<%@ page session="false" %>
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html>
<html>
<head>
    <title>Camera store</title>
    <meta http-equiv="content-type" 
		content="text/html;charset=utf-8" />       
    
    <script type="text/javascript" src="http://jadran.sdsu.edu/jquery/jquery.js"></script> 
    <script type="text/javascript" src="/jadrn046/login.js"></script>
    <link rel="stylesheet" type="text/css" href="/jadrn046/login.css" />    
</head>

<body>

   <div id="header">Sam camera store</div>
    <div>
        <h3>Vendor's login</h3>
        <form method="post" 
	    action="/jadrn046/servlet/Login">            
        <table>
            <tr>
                <td><span class="enter" >USERNAME:</span></td>
                <td><input type="text" name="username" id="first" /></td>
            </tr>
            <tr>
                <td><span class="enter"> PASSWORD: </span></td>
                <td><input type="password" name="password" /></td>
            </tr>
            <tr>
                <td><input type="reset" id="reset"></td>
	        <td><input type="submit" value="Login" id="submit"></td>
            </tr>
        </table>
        <input type="hidden" name="action" value="login" />	
        <p class="logout">You are now Logged out</p>
        </form>
        
    </div>
    
</body>
</html>

