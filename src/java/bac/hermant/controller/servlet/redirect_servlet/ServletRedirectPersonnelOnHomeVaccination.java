/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package bac.hermant.controller.servlet.redirect_servlet;

import bac.hermant.model.HttpConnVaccinationCenter;
import bac.hermant.model.bean.Login;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 *
 * @author kevin
 */
public class ServletRedirectPersonnelOnHomeVaccination extends HttpServlet {

    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        HttpSession session = req.getSession();
        Login l = new Login();
        ObjectMapper ob = new ObjectMapper();

        l.setNiss(session.getAttribute("niss").toString());
        String jsonString = ob.writeValueAsString(l);
        String json = HttpConnVaccinationCenter.HttpConnection(jsonString, "http://localhost:8080/CentreVaccination/ServletInfoPersonnelPourRdvVaccination");
        
        Login log = ob.readValue(json, Login.class);
        System.out.println("log : " + log);
        session.setAttribute("etatRdvVacc", log.getStateVaccinRdv());
        
        System.out.println("etatRdvVacc : " + session.getAttribute("etatRdvVacc").toString());
        
        req.getRequestDispatcher("WEB-INF/home.jsp").forward(req, resp);
    }
}
