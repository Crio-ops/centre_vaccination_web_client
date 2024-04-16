/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package bac.hermant.controller.servlet;

import bac.hermant.model.HttpConnVaccinationCenter;
import bac.hermant.model.bean.RendezVous;
import static java.lang.Integer.parseInt;
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
public class ServletValiderPresencePatient extends HttpServlet {

    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

        HttpSession session = req.getSession();
        ObjectMapper ob = new ObjectMapper();
        RendezVous rd = new RendezVous();
        
        rd = ob.readValue(req.getReader(), RendezVous.class);
        System.out.println("ServletValiderPresencePatient : " + rd);
        String json = ob.writeValueAsString(rd);
        if(rd.getPresenceRdv2() == null){

        String jsonResp = HttpConnVaccinationCenter.HttpConnection(json, "http://localhost:8080/CentreVaccination/ServletValiderPresencePatient");

//        System.out.println(jsonResp);
//        resp.getWriter().print(jsonResp);
    }else{
        String jsonResp = HttpConnVaccinationCenter.HttpConnection(json, "http://localhost:8080/CentreVaccination/ServletValiderPresencePatientRdv2");

        }
    }
}
 