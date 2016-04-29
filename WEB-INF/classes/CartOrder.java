import java.io.*;
import java.text.*;
import java.util.*;
import javax.servlet.*;
import javax.servlet.http.*;

import sdsu.*;
import helpers.*;
import java.sql.*;

public class CartOrder extends HttpServlet {


    public void doGet(HttpServletRequest request,
                      HttpServletResponse response)
        throws IOException, ServletException
    {
    HttpSession session = request.getSession(false);
    
	
        String user = "jadrn046";
        String password = "plastic";
        String database = "jadrn046";
	String connectionURL = "jdbc:mysql://opatija:3306/" + database +
               "?user=" + user + "&password=" + password;		
	Connection connection = null;
	Statement statement = null;
	ResultSet resultSet = null;
	ResultSet resultSet2 = null;
	String[] search_it = request.getParameterValues("search_it[]");
	String[] innerArray = null;
	
	System.out.println(search_it);
        //String query = "SELECT sku,category.name,vendor.name,vendorModel,description,features,cost,retail,image from product,category,vendor WHERE sku = '"+search_it+"' AND category.categoryID = product.catID AND vendor.vendorID=product.venID";
	//String query2;
	response.setContentType("text/html");
	PrintWriter out = response.getWriter();
	Vector<String[]> v = new Vector<String[]>();
	StringBuffer toReturn = new StringBuffer();

	    try {
		Class.forName("com.mysql.jdbc.Driver").newInstance();
		connection = DriverManager.getConnection(connectionURL);
		statement = connection.createStatement();
		for (int i = 0; i < search_it.length; i++) {
                  innerArray=search_it[i].split(",");         
                }
		
	   for (int j = 0; j < innerArray.length; j++) {
	    String query = "SELECT sku,category.name,vendor.name,vendorModel,description,features,cost,retail,image from product,category,vendor WHERE sku = '"+innerArray[j]+"' AND category.categoryID = product.catID AND vendor.vendorID=product.venID";
	   
		resultSet = statement.executeQuery(query);
            
                ResultSetMetaData md = resultSet.getMetaData();
                int numCols = md.getColumnCount();
		
		while(resultSet.next()) {
                String [] tmp = new String[numCols];
                for(int k=0; k < numCols; k++)
                    tmp[k] = resultSet.getString(k+1);  // resultSet getString is 1 based
                v.add(tmp);                
                    }
		    
		for(int l=0; l < v.size(); l++) {
                String [] tmp = v.elementAt(l);     
                    for(int m=0; m < tmp.length; m++) {
                      toReturn.append(tmp[m]);
		      toReturn.append(":");
		      }
		  toReturn.append("|");
		  }
               }
	        //out.write(toReturn.toString());
		out.write(innerArray.toString());
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



