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

/**
 *
 * @author kevin
 */
public class ServletGetRdvPatientViaEnss extends HttpServlet {

    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

        ObjectMapper ob = new ObjectMapper();
        RendezVous rd = new RendezVous();
        System.out.println("ici");
        rd = ob.readValue(req.getReader(), RendezVous.class);
        System.out.println(rd);

        String json = ob.writeValueAsString(rd);

        String jsonResp = HttpConnVaccinationCenter.HttpConnection(json, "http://localhost:8080/CentreVaccination/ServletGetRdvPatientViaEnss");

        System.out.println("reponse : "+ jsonResp);
        resp.getWriter().print(jsonResp);

    }
}
