/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package bac.hermant.controller.servlet;

import bac.hermant.model.HttpConnVaccinationCenter;
import bac.hermant.model.bean.BeanCentreDeVaccination;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import static java.lang.Integer.parseInt;
/**
 *
 * @author kevin
 */
public class ServletCreateCentre extends HttpServlet {
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
    
        BeanCentreDeVaccination bcv = new BeanCentreDeVaccination();
  
        ObjectMapper ob = new ObjectMapper();
        
        req.setCharacterEncoding("UTF-8");
//        resp.setCharacterEncoding("UTF-8");
        
        bcv = ob.readValue(req.getReader(), BeanCentreDeVaccination.class);

        
//        bcv.setNomDuCentre(req.getParameter("nomDuCentre"));
//        bcv.setRue(req.getParameter("rue"));
//        bcv.setVille(req.getParameter("ville"));
//        bcv.setPostCode(parseInt(req.getParameter("postCode")));
//        bcv.setLat(parseInt(req.getParameter("lat")));;
        
        System.out.println("Font : "+bcv);
        
        String json = ob.writeValueAsString(bcv);
        
        String jsonResp = HttpConnVaccinationCenter.HttpConnection(json, "http://localhost:8080/CentreVaccination/ServletCreateCentre");
        
        resp.getWriter().print(jsonResp);
    }
}
