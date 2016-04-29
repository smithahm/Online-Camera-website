import java.io.*;
import java.text.*;
import java.util.*;
import javax.servlet.*;
import javax.servlet.http.*;

import sdsu.*;
import helpers.*;
import java.sql.*;


public class DBPost extends HttpServlet {


    public void doGet(HttpServletRequest request,
                      HttpServletResponse response)
        throws IOException, ServletException
    {
    HttpSession session = request.getSession(false);
    if(session == null) {    
        ServletContext context = getServletContext();       
        RequestDispatcher dispatcher 
            = request.getRequestDispatcher("/jsp/login_err.jsp");   
        dispatcher.forward(request, response);              
        }
	
        String user = "jadrn046";
        String password = "plastic";
        String database = "jadrn046";
		String connectionURL = "jdbc:mysql://opatija:3306/" + database +
            "?user=" + user + "&password=" + password;		
	Connection connection = null;
        Statement statement = null;
	
	ResultSet resultSet = null;
	Statement statement2 = null;
	ResultSet resultSet2 = null;
		
        String sku = request.getParameter("sku");
	String qty = request.getParameter("qty");
	String date = request.getParameter("date");
	String select_query = "SELECT * from on_hand WHERE sku = '"+sku+"'";
	String update_query = "UPDATE on_hand SET quantity = quantity + '"+qty+"', last_date='"+date+"' WHERE sku ='"+sku+"'";
	String insert_query = "INSERT INTO on_hand (sku, quantity, last_date) VALUES ('"+sku+"', " +qty+", '"+date+"')";
		
        int result = -1; 
	int result2 = -1; 
	int result3 = -1; 
	String query ="INSERT INTO merchandise_in (sku, quantity, date) VALUES ('"+sku+"', " +qty+", '"+date+"')";
	
	try {
	    Class.forName("com.mysql.jdbc.Driver").newInstance();
	    connection = DriverManager.getConnection(connectionURL);
	    statement = connection.createStatement(); 
	    result = statement.executeUpdate(query);
	    
	    if(result> 0){ 
	          resultSet = statement.executeQuery(select_query);
		  
	    if(resultSet.next()){ 
	       result2 = statement.executeUpdate(update_query);
	       response.getWriter().write("success");
	      }
	    else{
	        result3 = statement.executeUpdate(insert_query);
		response.getWriter().write("success");
	       }
	    }
	    else{
	     response.getWriter().write("error");
	    }
	   

         }
	catch(Exception e) {
	    e.printStackTrace();
	    }
// IMPORTANT, you must make sure that the statement and connection
// are closed, or a memory leak occurs in Tomcat.            
        finally {
            try {
                statement.close();                
        		connection.close();
                }
            catch(SQLException e) {}  // don't do anything if the connection is not open.
        }
	
        
    
   }
   
   
    public void doPost(HttpServletRequest request,
                      HttpServletResponse response)
        throws IOException, ServletException
    {
    	doGet(request, response);
    }  
}
