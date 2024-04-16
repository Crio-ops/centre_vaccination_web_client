/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package bac.hermant.controller.servlet;

import bac.hermant.model.HttpConnVaccinationCenter;
import bac.hermant.model.bean.BeanPersonnelCentre;
import bac.hermant.model.bean.BeanValidation;
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
public class ServletDeletePersonnel extends HttpServlet {

    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

        BeanPersonnelCentre bpc = new BeanPersonnelCentre();
        ObjectMapper ob = new ObjectMapper();

        bpc = ob.readValue(req.getReader(), BeanPersonnelCentre.class);

        String json = ob.writeValueAsString(bpc);

        String jsonResp = HttpConnVaccinationCenter.HttpConnection(json, "http://localhost:8080/CentreVaccination/ServletDeletePersonnelCentre");
        BeanValidation bn = new BeanValidation();
        bn = ob.readValue(jsonResp, BeanValidation.class);
        System.out.println(bn);
        if (bn.getValidation() == true) {
            
            bn.setMessage("Suppression réussie");
            String reponse = ob.writeValueAsString(bn.getMessage().toString());
            resp.getWriter().print(reponse);
        } else {
            resp.getWriter().print("erreur, veuiller recommencer");
        }

    }
}
