/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package bac.hermant.controller.servlet;

import bac.hermant.model.HttpConnVaccinationCenter;
import bac.hermant.model.bean.BeanCentreDeVaccination;
import bac.hermant.model.bean.BeanPatientChoisiCentre;
import bac.hermant.model.bean.BeanValidation;
import bac.hermant.model.bean.Citoyens;
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
public class ServletPatientChoisiUnCentre extends HttpServlet {

    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

        ObjectMapper ob = new ObjectMapper();
        HttpSession session = req.getSession();

        session.getAttribute("niss");

        BeanPatientChoisiCentre bp = new BeanPatientChoisiCentre();
        BeanCentreDeVaccination bcv = new BeanCentreDeVaccination();

        bcv = ob.readValue(req.getReader(), BeanCentreDeVaccination.class);

        bp.setCentre_attribue(parseInt(bcv.getNum_centre()));
        bp.setNiss(session.getAttribute("niss").toString());
        System.out.println(bp);

        String json = ob.writeValueAsString(bp);
        System.out.println("json front " + json);
        String jsonResp = HttpConnVaccinationCenter.HttpConnection(json, "http://localhost:8080/CentreVaccination/ServletPatientChoisiUnCentre");
        
        BeanValidation bv = new BeanValidation();
        
        bv = ob.readValue(jsonResp, BeanValidation.class);
        System.out.println("bv retour " + bv);
        bv.setMessage("Enregistrement effectué");
        String reponse = ob.writeValueAsString(bv.getMessage());
        
        resp.getWriter().print(reponse);

    }

}
