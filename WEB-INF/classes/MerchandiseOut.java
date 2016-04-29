import java.io.*;
import java.text.*;
import java.util.*;
import javax.servlet.*;
import javax.servlet.http.*;

import sdsu.*;
import helpers.*;
import java.sql.*;


public class MerchandiseOut extends HttpServlet {


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
	ResultSet resultSet2 = null;
	ResultSet resultSet3 = null;
	response.setContentType("text/plain");
		
        String sku = request.getParameter("search_it");
	String qty = request.getParameter("search_cart");
	
	 Calendar calendar = Calendar.getInstance();
         java.sql.Date ourJavaDateObject = new java.sql.Date(calendar.getTime().getTime());
	
	String update_query = "UPDATE on_hand SET quantity = quantity - '"+qty+"', last_date='"+ourJavaDateObject+"' WHERE sku ='"+sku+"'";
	String delete_query ="DELETE FROM on_hand where quantity = '0'";
		
        int result = -1; 
	int result2 = -1; 
	int result3 = -1; 
	String query ="INSERT INTO merchandise_out (sku, quantity, date) VALUES ('"+sku+"', " +qty+", '"+ourJavaDateObject+"')";
	
	try {
	    Class.forName("com.mysql.jdbc.Driver").newInstance();
	    connection = DriverManager.getConnection(connectionURL);
	    statement = connection.createStatement(); 
	    result = statement.executeUpdate(query);
	    
	    if(result> 0){ 
	       result2 = statement.executeUpdate(update_query);
	       
	       if(result2 >0){
	         response.getWriter().write("success");
	        }
		else{
		 response.getWriter().write("error");
		}
            }
	     else{
	         response.getWriter().write("error");
	         }
		 
	  //result3 = statement.executeUpdate(delete_query);

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
