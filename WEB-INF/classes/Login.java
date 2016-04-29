import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
import sdsu.*;



public class Login extends HttpServlet {
    	private ServletContext context=null;
	private RequestDispatcher dispatcher = null;
        private String toDo = "";  
          
    public void doPost(HttpServletRequest request,
              HttpServletResponse response)
                        throws IOException, ServletException  {
        String username = request.getParameter("username");
        String password = request.getParameter("password");
        if(PasswordUtilities.isValidLogin(username,password)) {
            toDo = "/jsp/menu.jsp";
            HttpSession session = request.getSession(true);
	    session.setAttribute("user", username);
            }
        else
            toDo = "/jsp/login_err.jsp";
        context = getServletContext();      
        dispatcher = request.getRequestDispatcher(toDo); 
        dispatcher.forward(request, response);                  
    }    
}



