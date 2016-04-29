import java.io.*;
import java.text.*;
import java.util.*;
import javax.servlet.*;
import javax.servlet.http.*;

import sdsu.*;
import helpers.*;
import java.sql.*;

public class DBTest extends HttpServlet {


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
      
        String query = "SELECT quantity FROM on_hand where sku='"+sku+"'"; 
	response.setContentType("text/html");
	PrintWriter out = response.getWriter();
	String query2 = "SELECT sku, category.name,vendor.name,vendorModel,retail,image from product,category,vendor WHERE sku='"+sku+"' AND category.categoryID = product.catID AND vendor.vendorID=product.venID";
	    
	StringBuffer toReturn = new StringBuffer();
    

	    try {
		Class.forName("com.mysql.jdbc.Driver").newInstance();
		connection = DriverManager.getConnection(connectionURL);
		statement = connection.createStatement();
		resultSet = statement.executeQuery(query2);
            
                ResultSetMetaData md = resultSet.getMetaData();
                int numCols = md.getColumnCount();
		
	      if(resultSet.next()){
	         toReturn.append( resultSet.getString(1));
		 toReturn.append( "|");
		 toReturn.append( resultSet.getString(2));
		 toReturn.append( "|");
		 toReturn.append( resultSet.getString(3));
		 toReturn.append( "|");
		 toReturn.append( resultSet.getString(4));
		 toReturn.append( "|");
		 toReturn.append( resultSet.getString(5));
		 toReturn.append( "|");
		 toReturn.append( resultSet.getString(6));
		 
	         statement2 = connection.createStatement();
		 resultSet2 = statement2.executeQuery(query);
		 out.write(query);
		 
	         if(resultSet2.next()) {
		 toReturn.append( "|");
		 toReturn.append( resultSet2.getInt(1));
		 out.write(toReturn.toString());                 
	        }
	        else{
		   toReturn.append( "|");
		   toReturn.append("NotPresent");
	           out.write(toReturn.toString()); 
	         }
	       }
	      
	        else{
	           out.write("false");
	        }
	   }
		  
            catch(Exception e) {
		e.printStackTrace();
		}            
            finally {
                try {
                    resultSet.close();
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



