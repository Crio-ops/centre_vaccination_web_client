/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package bac.hermant.controller.servlet;

import bac.hermant.model.HttpConnVaccinationCenter;
import bac.hermant.model.bean.BeanPersonnelCentre;
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
public class ServletAddPersonnel extends HttpServlet {

    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

        BeanPersonnelCentre bpc = new BeanPersonnelCentre();
        ObjectMapper ob = new ObjectMapper();

        bpc.setNiss(req.getParameter("niss"));
        bpc.setNom(req.getParameter("nom"));
        bpc.setPrenom(req.getParameter("prenom"));
        bpc.setId_Role(parseInt(req.getParameter("role")));
        bpc.setCentre_attribue(parseInt(req.getParameter("centre_attribue")));

        System.out.println("Bean :" + bpc);

        String json = ob.writeValueAsString(bpc);

        String jsonResp = HttpConnVaccinationCenter.HttpConnection(json, "http://localhost:8080/CentreVaccination/ServletAddPersonnelCentre");

//        HttpSession session = req.getSession();
//        session.setAttribute("validateForm", json);
        req.getRequestDispatcher("WEB-INF/adminHome.jsp").forward(req, resp);

    }
}
