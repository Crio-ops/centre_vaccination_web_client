/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package bac.hermant.controller.servlet;

import bac.hermant.model.HttpConnVaccinationCenter;
import bac.hermant.model.bean.BeanPointagePersonnel;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.io.IOException;
import static java.lang.Integer.parseInt;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 *
 * @author kevin
 */
public class Servlet_Pointage_Sortie extends HttpServlet {

    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

        ObjectMapper ob = new ObjectMapper();
                HttpSession session = req.getSession();

        BeanPointagePersonnel bp = new BeanPointagePersonnel();
        
        bp.setNiss(session.getAttribute("niss").toString());
        bp.setCentre_attribue(parseInt(session.getAttribute("centre_attribue").toString()));


        String json = ob.writeValueAsString(bp);

        String jsonResp = HttpConnVaccinationCenter.HttpConnection(json, "http://localhost:8080/CentreVaccination/Servlet_Pointage_Sortie");

        System.out.println("reponse sortie : "+ jsonResp);
        resp.getWriter().print(jsonResp);

    }
    
}
