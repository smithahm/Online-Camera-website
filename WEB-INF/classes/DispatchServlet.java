import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;



public class DispatchServlet extends HttpServlet {
	private String command;
	private String toDo=null;

	
    public void doPost(HttpServletRequest request,
                      HttpServletResponse response)
        throws IOException, ServletException {

	command = request.getParameter("param");
	
        if(command == null)
                toDo = "/jsp/login_err.jsp";
	else if(command.equals("receive"))
		toDo = "/jsp/menu.jsp";
	else if(command.equals("checkout"))
		toDo = "/jsp/check_out.jsp";
        else if(command.equals("logout"))
                toDo = "/jsp/logout.jsp"; 
        else if(command.equals("CheckOut"))
                toDo = "/jsp/checkout.jsp"; 
	else if(command.equals("order"))
                toDo = "/jsp/orderPage.jsp";
        else if(command.equals("confirm"))
                toDo = "/jsp/confirm.jsp";              
	else
		toDo = "/jsp/login_err.jsp";
				
	processRequest(request, response);
	}
        
    public void doGet(HttpServletRequest request,
                      HttpServletResponse response)
        throws IOException, ServletException { 
            doPost(request, response);
            }       
	
    public void processRequest(HttpServletRequest request,
                    HttpServletResponse response)
                                throws  ServletException  {
    	ServletContext context=null;
	RequestDispatcher dispatcher = null;
    	try {
	    context = getServletContext();	
	    dispatcher = request.getRequestDispatcher(toDo);	
	    dispatcher.forward(request, response);	
	    }
	catch(Exception e) {
	    System.out.print("ToDo is " + toDo + " and dispatcher is " +
	    dispatcher);
	    e.printStackTrace();}
        }
    
}



