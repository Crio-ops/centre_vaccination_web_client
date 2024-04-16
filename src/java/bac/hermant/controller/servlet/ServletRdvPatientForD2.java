/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package bac.hermant.controller.servlet;

import bac.hermant.model.HttpConnVaccinationCenter;
import bac.hermant.model.bean.Citoyens;
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
public class ServletRdvPatientForD2 extends HttpServlet {

    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        HttpSession session = req.getSession();
        Citoyens cit = new Citoyens();
        ObjectMapper ob = new ObjectMapper();
        
        cit.setNiss(session.getAttribute("niss").toString());
        System.out.println("cit front : " + cit);
        
        String json = ob.writeValueAsString(cit);
        
        String jsonResp = HttpConnVaccinationCenter.HttpConnection(json, "http://localhost:8080/CentreVaccination/ServletPriseRdvPatientD2");
        System.out.println("resp : " + jsonResp);
        resp.getWriter().print(jsonResp);
    }
}
