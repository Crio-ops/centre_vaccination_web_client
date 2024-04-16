/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package bac.hermant.controller.servlet;

import bac.hermant.model.HttpConnVaccinationCenter;
import bac.hermant.model.bean.BeanListePersonnelDuCentre;
import bac.hermant.model.bean.BeanPointagePersonnel;
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
public class ServletGetListePointage extends HttpServlet {

    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

        ObjectMapper ob = new ObjectMapper();
        BeanPointagePersonnel bpp = new BeanPointagePersonnel();
        ArrayList<BeanPointagePersonnel> lp = new ArrayList();
        
        bpp = ob.readValue(req.getReader(), BeanPointagePersonnel.class);
        System.out.println("bean : " + bpp);
        String json = ob.writeValueAsString(bpp);
        
        String jsonResp = HttpConnVaccinationCenter.HttpConnection(json, "http://localhost:8080/CentreVaccination/ServletGetListePointagePersonnel");
         lp = ob.readValue(jsonResp, new TypeReference<ArrayList<BeanPointagePersonnel>>(){});
//         for(BeanPointagePersonnel b : lp){
//             System.out.println(b.toString());
//         }
         resp.setCharacterEncoding("UTF-8");
        resp.getWriter().write(jsonResp);

    }
    
}
