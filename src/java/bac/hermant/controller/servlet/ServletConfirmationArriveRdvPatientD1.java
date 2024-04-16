/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package bac.hermant.controller.servlet;

/**
 *
 * @author kevin
 */


import bac.hermant.model.HttpConnVaccinationCenter;
import bac.hermant.model.bean.Citoyens;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

public class ServletConfirmationArriveRdvPatientD1 extends HttpServlet{
      protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
          
        HttpSession session = req.getSession();
        
        ObjectMapper ob = new ObjectMapper();
        
        Citoyens cit = new Citoyens();
        
         cit = ob.readValue(req.getReader(), Citoyens.class);
         
         String json = ob.writeValueAsString(cit);
          System.out.println("Rendez-vous : " + cit);
          
          String jsonResp = HttpConnVaccinationCenter.HttpConnection(json, "http://localhost:8080/CentreVaccination/ServletVuePatient");
      
      }
}
