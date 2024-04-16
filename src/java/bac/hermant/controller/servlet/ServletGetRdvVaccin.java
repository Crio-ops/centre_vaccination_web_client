/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package bac.hermant.controller.servlet;

import bac.hermant.model.HttpConnVaccinationCenter;
import bac.hermant.model.bean.RendezVous;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import static java.lang.Integer.parseInt;

/**
 *
 * @author kevin
 */
public class ServletGetRdvVaccin extends HttpServlet{
     protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
    
        ObjectMapper ob = new ObjectMapper(); 
        HttpSession session = req.getSession();
        RendezVous rdv = new RendezVous();
         System.out.println(session.getId());


        rdv = ob.readValue(req.getReader(), RendezVous.class);
        rdv.setDateNaissance(session.getAttribute("dateNaissance").toString());
        rdv.setNiss(session.getAttribute("niss").toString());
        rdv.setCentre_attribue(parseInt(session.getAttribute("centre_attribue").toString()));
        
        System.out.println("ServletGetRdvVaccin : " + rdv.toString());
        String json = ob.writeValueAsString(rdv); 
         String jsonResp = HttpConnVaccinationCenter.HttpConnection(json, "http://localhost:8080/CentreVaccination/ServletConfirmationRdvVaccin");
         System.out.println("ici");
        resp.getWriter().print(jsonResp);


    }
    
}
