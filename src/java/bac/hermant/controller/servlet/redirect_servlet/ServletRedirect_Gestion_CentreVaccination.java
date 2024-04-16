/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package bac.hermant.controller.servlet.redirect_servlet;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 *
 * @author kevin
 */
public class ServletRedirect_Gestion_CentreVaccination extends HttpServlet {

    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        HttpSession session = req.getSession();
        System.out.println(session.getId().toString());
        Cookie[] cookies = req.getCookies();
        for (int i = 0; i < cookies.length; i++) {

            Cookie cookie = cookies[i];

             if (cookie.getName().equals("role")) {
                String role = cookie.getValue();
               System.out.println("role cookie : " + role);
                 session.setAttribute("role", role);
            }else if(cookie.getName().equals("centre_attribue")){
                String centre_attribue = cookie.getValue();
                session.setAttribute("centre_attribue", centre_attribue );
                 System.out.println("centre_attribue cookie : " + centre_attribue);
            }else if(cookie.getName().equals("niss")){
                String niss = cookie.getValue();
                session.setAttribute("niss", niss );
                 System.out.println("niss cookie : " + niss);
            }
        }
            
        
            req.getRequestDispatcher("WEB-INF/creationDeCentre.jsp").forward(req, resp);
        }
    
}