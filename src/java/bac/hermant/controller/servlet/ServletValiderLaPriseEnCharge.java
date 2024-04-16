/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package bac.hermant.controller.servlet;

import bac.hermant.model.HttpConnVaccinationCenter;
import bac.hermant.model.bean.BeanTicket;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author kevin
 */
public class ServletValiderLaPriseEnCharge extends HttpServlet {

    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

        ObjectMapper ob = new ObjectMapper();
        BeanTicket bt = new BeanTicket();

        bt = ob.readValue(req.getReader(), BeanTicket.class);
        System.out.println("ticket " + bt);
        String json = ob.writeValueAsString(bt);

        String jsonResp = HttpConnVaccinationCenter.HttpConnection(json, "http://localhost:8080/CentreVaccination/ServletValiderLaPriseEnCharge");

        System.out.println("retour bt : " + jsonResp);
        resp.getWriter().print(jsonResp);

    }
}