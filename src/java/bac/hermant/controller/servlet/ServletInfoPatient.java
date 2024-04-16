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
public class ServletInfoPatient extends HttpServlet{
      protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
    
        HttpSession sess = req.getSession();
        Citoyens cit = new Citoyens();
        ObjectMapper mapper = new ObjectMapper();

        cit.setNiss(sess.getAttribute("niss").toString());
        String json = mapper.writeValueAsString(cit);
        System.out.println("front : " + cit);

        String jsonResp = HttpConnVaccinationCenter.HttpConnection(json, "http://localhost:8080/CentreVaccination/ServletVuePatient");
          System.out.println("info patient : "+jsonResp);
        resp.getWriter().write(jsonResp);
      
    }
}
