<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
   "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">



<head>
    <title>Camera store</title>
    <meta http-equiv="content-type" 
		content="text/html;charset=utf-8" />
    <meta http-equiv="Pragma" content="no-cache" />
    <meta http-equiv="expires" content="0" />        
    
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
        <p class="login_err">ERROR! not Authorized, please enter your login details</p>	
        </form>
        
    </div>
    
</body>
</html>

