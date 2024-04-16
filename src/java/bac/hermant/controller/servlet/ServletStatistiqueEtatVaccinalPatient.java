/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package bac.hermant.controller.servlet;

import bac.hermant.model.HttpConnVaccinationCenter;
import bac.hermant.model.bean.BeanStatistique;
import bac.hermant.model.bean.Citoyens;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.io.IOException;
import java.util.ArrayList;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author kevin
 */
public class ServletStatistiqueEtatVaccinalPatient extends HttpServlet {

    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

        ObjectMapper ob = new ObjectMapper();
        Citoyens cit = new Citoyens();
        ArrayList<Citoyens> lc = new ArrayList();
        BeanStatistique bs = new BeanStatistique();
        String jsonResp = HttpConnVaccinationCenter.HttpConnection("", "http://localhost:8080/CentreVaccination/ServletStatistiqueEtatVaccinationPatient");
//         bs = ob.readValue(jsonResp, BeanStatistique.class);

        
         
        resp.setCharacterEncoding("UTF-8");
        resp.getWriter().write(jsonResp);

    }
    
}
