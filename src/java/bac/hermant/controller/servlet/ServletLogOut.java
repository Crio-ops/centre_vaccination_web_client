/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package bac.hermant.controller.servlet;

import bac.hermant.model.HttpConnVaccinationCenter;
import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import bac.hermant.model.bean.Login;
import com.fasterxml.jackson.databind.ObjectMapper;

/**
 *
 * @author kevin
 */
public class ServletLogOut extends HttpServlet {
    
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
    
        ObjectMapper ob = new ObjectMapper();
        Login log = new Login();
        HttpSession session = req.getSession();
        
        log.setNiss(session.getAttribute("niss").toString());
        String jsonString = ob.writeValueAsString(log);
        String jsonResp = HttpConnVaccinationCenter.HttpConnection(jsonString, "http://localhost:8080/CentreVaccination/ServletLogOut");
        log = ob.readValue(jsonResp, Login.class);
        System.out.println("Hi Front, I came back ! : " + log.toString());
    
        req.getRequestDispatcher("index.jsp").forward(req, resp);
        
        session.invalidate();
        
    }
}
