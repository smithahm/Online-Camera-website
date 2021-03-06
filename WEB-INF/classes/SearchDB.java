import java.io.*;
import java.text.*;
import java.util.*;
import javax.servlet.*;
import javax.servlet.http.*;

import sdsu.*;
import helpers.*;
import java.sql.*;

public class SearchDB extends HttpServlet {


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
        String search = request.getParameter("search_it");
	String query2 = null;
	Boolean found = false;
	Vector<String[]> v = new Vector<String[]>();
      
        String query = "SELECT sku,category.name,vendor.name,vendorModel,description,features,cost,retail,image from product,category,vendor WHERE category.name LIKE '%" + search + "%' AND category.categoryID = product.catID AND vendor.vendorID=product.venID";

	response.setContentType("text/html");
	PrintWriter out = response.getWriter();
		StringBuffer toReturn = new StringBuffer();
    

	    try {
		Class.forName("com.mysql.jdbc.Driver").newInstance();
		connection = DriverManager.getConnection(connectionURL);
		statement = connection.createStatement();
		resultSet = statement.executeQuery(query);
            
                ResultSetMetaData md = resultSet.getMetaData();
                int numCols = md.getColumnCount();
		
		while(resultSet.next()) {
	         found = true;
                String [] tmp = new String[numCols];
                for(int i=0; i < numCols; i++)
                    tmp[i] = resultSet.getString(i+1);  // resultSet getString is 1 based
                v.add(tmp);                
                    }
		  
		for(int i=0; i < v.size(); i++) {
                String [] tmp = v.elementAt(i);     
                    for(int j=0; j < tmp.length; j++) {
                      toReturn.append(tmp[j]);
		      toReturn.append(":");
		      }
		 query2 = "SELECT quantity from on_hand where sku='"+tmp[0]+"'"; 
		 resultSet2 = statement.executeQuery(query2);
		 if(resultSet2.next()){
		    if(resultSet2.getInt(1)  > 0){
	                toReturn.append("In Stock");
	                toReturn.append("|");
		    }
		     else{
		        toReturn.append("More on the way");
	                toReturn.append("|");
		     }
		 }
		  else{
		  toReturn.append("Coming Soon");
		  toReturn.append("|");
		  }
               }
	       
	       if(!found){
	       out.write("NF");
	       return;
	       } 
	   out.write(toReturn.toString());
		
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



