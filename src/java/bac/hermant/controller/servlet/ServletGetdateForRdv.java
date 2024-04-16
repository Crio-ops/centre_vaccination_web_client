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

/**
 *
 * @author kevin
 */
public class ServletGetdateForRdv extends HttpServlet{
        protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

            HttpSession session = req.getSession();
            ObjectMapper ob = new ObjectMapper();
            RendezVous rdv = new RendezVous();
            
            session.setAttribute("enss",session.getAttribute("enss"));
            session.setAttribute("nom",session.getAttribute("nom"));
            session.setAttribute("prenom",session.getAttribute("prenom"));
            session.setAttribute("role", session.getAttribute("role"));
            session.setAttribute("dateNaissance", session.getAttribute("dateNaissance"));
            
            rdv = ob.readValue(req.getReader(), RendezVous.class);

//            System.out.println("result : " + rdv.toString());
            String json = ob.writeValueAsString(rdv); 
//            System.out.println("json front : " + json);
            String jsonResp = HttpConnVaccinationCenter.HttpConnection(json, "http://localhost:8080/CentreVaccination/ServletPriseRdvPatient");
            
            
            
            resp.getWriter().print(jsonResp);
        }
}
 