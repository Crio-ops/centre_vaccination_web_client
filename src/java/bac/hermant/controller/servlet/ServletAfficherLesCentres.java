/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package bac.hermant.controller.servlet;

import bac.hermant.model.HttpConnVaccinationCenter;
import bac.hermant.model.bean.BeanCentreDeVaccination;
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
public class ServletAfficherLesCentres extends HttpServlet  {

    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

        ObjectMapper ob = new ObjectMapper();
        BeanCentreDeVaccination bcv = new BeanCentreDeVaccination();
        ArrayList<BeanCentreDeVaccination> lc = new ArrayList();

        String jsonResp = HttpConnVaccinationCenter.HttpConnection(" ", "http://localhost:8080/CentreVaccination/ServletAfficherLesCentres");
        
        resp.setCharacterEncoding("UTF-8");
        resp.getWriter().write(jsonResp);

    }
}
