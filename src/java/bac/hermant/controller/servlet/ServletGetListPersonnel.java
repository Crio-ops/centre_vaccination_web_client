/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package bac.hermant.controller.servlet;

import bac.hermant.model.HttpConnVaccinationCenter;
import bac.hermant.model.bean.BeanListePersonnelDuCentre;
import bac.hermant.model.bean.BeanPersonnelCentre;
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
public class ServletGetListPersonnel extends HttpServlet {

    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

        ObjectMapper ob = new ObjectMapper();
        BeanPersonnelCentre bpc = new BeanPersonnelCentre();
        ArrayList<BeanListePersonnelDuCentre> lc = new ArrayList();
        bpc = ob.readValue(req.getReader(), BeanPersonnelCentre.class);
        String json = ob.writeValueAsString(bpc);
        
        String jsonResp = HttpConnVaccinationCenter.HttpConnection(json, "http://localhost:8080/CentreVaccination/ServletListePersonnel");
         lc = ob.readValue(jsonResp, new TypeReference<ArrayList<BeanListePersonnelDuCentre>>(){});
         for(BeanListePersonnelDuCentre c : lc){
             System.out.println(c.toString());
         }
         resp.setCharacterEncoding("UTF-8");
        resp.getWriter().write(jsonResp);

    }
}
