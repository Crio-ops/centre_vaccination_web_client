/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package bac.hermant.controller.servlet;

import com.fasterxml.jackson.databind.ObjectMapper;
import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import bac.hermant.model.bean.Login;
import bac.hermant.model.HttpConnVaccinationCenter;
import javax.servlet.http.Cookie;

/**
 *
 * @author kevin
 */
public class ServletLogin extends HttpServlet {

    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

        ObjectMapper ob = new ObjectMapper();
        Login l = new Login();
        l.setNiss(req.getParameter("niss"));
        l.setPassword(req.getParameter("password"));
        String jsonString = ob.writeValueAsString(l);

        Login log = new Login();
        String jsonResp = HttpConnVaccinationCenter.HttpConnection(jsonString, "http://localhost:8080/CentreVaccination/ServletLoginCitoyens");
        log = ob.readValue(jsonResp, Login.class);

        if (log.getErreurLogin() != null) {
            HttpSession session = req.getSession();
            session.setAttribute("error", log.getErreurLogin());
            req.getRequestDispatcher("/index.jsp").forward(req, resp);
        } else {
            if (log.getRole() == 4) {
                System.out.println("Citoyen : " + log.toString());

                HttpSession session = req.getSession();
                session.setAttribute("niss", log.getNiss());

                session.setAttribute("nom", log.getNom());
                session.setAttribute("prenom", log.getPrenom());
                session.setAttribute("role", log.getRole());
                session.setAttribute("etatRdvVacc", log.getStateVaccinRdv());
                session.setAttribute("dateNaissance", log.getDateNaissance());
                session.setAttribute("centre_attribue", log.getCentre_attribue());
                session.setAttribute("etatDeVaccination", log.getEtatDeVaccination());
                session.setAttribute("vaccin_attribue", log.getVaccin_attribue());

                Cookie role = new Cookie("role", session.getAttribute("role").toString());
                Cookie centre_attribue = new Cookie("centre_attribue", session.getAttribute("centre_attribue").toString());
                Cookie niss = new Cookie("niss", session.getAttribute("niss").toString());
                resp.addCookie(role);
                resp.addCookie(centre_attribue);
                resp.addCookie(niss);

                req.getRequestDispatcher("WEB-INF/home.jsp").forward(req, resp);
            } else if (log.getRole() == 1) {

                System.out.println("ROLE CONN : " + log.getRole());
                HttpSession session = req.getSession();
                session.setAttribute("niss", log.getNiss());
                session.setAttribute("nom", log.getNom());
                session.setAttribute("prenom", log.getPrenom());
                session.setAttribute("role", log.getRole());
                session.setAttribute("etatRdvVacc", log.getStateVaccinRdv());
                session.setAttribute("dateNaissance", log.getDateNaissance());
                session.setAttribute("centre_attribue", log.getCentre_attribue());
                session.setAttribute("etatDeVaccination", log.getEtatDeVaccination());

                Cookie role = new Cookie("role", session.getAttribute("role").toString());
                Cookie centre_attribue = new Cookie("centre_attribue", session.getAttribute("centre_attribue").toString());
                Cookie niss = new Cookie("niss", session.getAttribute("niss").toString());
                resp.addCookie(role);
                resp.addCookie(centre_attribue);
                resp.addCookie(niss);

                req.getRequestDispatcher("WEB-INF/adminHome.jsp").forward(req, resp);

            } else if (log.getRole() == 2) {

                System.out.println("ROLE CONN : " + log.getRole());
                HttpSession session = req.getSession();
                session.setAttribute("niss", log.getNiss());
                session.setAttribute("nom", log.getNom());
                session.setAttribute("prenom", log.getPrenom());
                session.setAttribute("role", log.getRole());
                session.setAttribute("etatRdvVacc", log.getStateVaccinRdv());
                session.setAttribute("dateNaissance", log.getDateNaissance());
                session.setAttribute("centre_attribue", log.getCentre_attribue());
                session.setAttribute("etatDeVaccination", log.getEtatDeVaccination());

                Cookie role = new Cookie("role", session.getAttribute("role").toString());
                Cookie centre_attribue = new Cookie("centre_attribue", session.getAttribute("centre_attribue").toString());
                Cookie niss = new Cookie("niss", session.getAttribute("niss").toString());
                resp.addCookie(role);
                resp.addCookie(centre_attribue);
                resp.addCookie(niss);

                req.getRequestDispatcher("WEB-INF/medecin_Infirmier_Home.jsp").forward(req, resp);

            } else if (log.getRole() == 3) {

                System.out.println("ROLE CONN : " + log.getRole());
                HttpSession session = req.getSession();
                session.setAttribute("niss", log.getNiss());
                session.setAttribute("nom", log.getNom());
                session.setAttribute("prenom", log.getPrenom());
                session.setAttribute("role", log.getRole());
                session.setAttribute("etatRdvVacc", log.getStateVaccinRdv());
                session.setAttribute("dateNaissance", log.getDateNaissance());
                session.setAttribute("centre_attribue", log.getCentre_attribue());
                session.setAttribute("etatDeVaccination", log.getEtatDeVaccination());
                
                Cookie role = new Cookie("role", session.getAttribute("role").toString());
                Cookie centre_attribue = new Cookie("centre_attribue", session.getAttribute("centre_attribue").toString());
                Cookie niss = new Cookie("niss", session.getAttribute("niss").toString());
                resp.addCookie(role);      
                resp.addCookie(centre_attribue);
                resp.addCookie(niss); 
                
                req.getRequestDispatcher("WEB-INF/medecin_Infirmier_Home.jsp").forward(req, resp);

            } else if (log.getRole() == 5) {

                System.out.println("ROLE CONN : " + log.getRole());
                HttpSession session = req.getSession();
                session.setAttribute("niss", log.getNiss());
                session.setAttribute("nom", log.getNom());
                session.setAttribute("prenom", log.getPrenom());
                session.setAttribute("role", log.getRole());
                session.setAttribute("etatRdvVacc", log.getStateVaccinRdv());
                session.setAttribute("dateNaissance", log.getDateNaissance());
                session.setAttribute("centre_attribue", log.getCentre_attribue());
                session.setAttribute("etatDeVaccination", log.getEtatDeVaccination());
                
                Cookie role = new Cookie("role", session.getAttribute("role").toString());
                Cookie centre_attribue = new Cookie("centre_attribue", session.getAttribute("centre_attribue").toString());
                Cookie niss = new Cookie("niss", session.getAttribute("niss").toString());
                resp.addCookie(role);      
                resp.addCookie(centre_attribue);
                resp.addCookie(niss); 
                
                req.getRequestDispatcher("WEB-INF/operateurSortie_Home.jsp").forward(req, resp);

            } else if (log.getRole() == 6) {

                System.out.println("ROLE CONN : " + log.getRole());
                HttpSession session = req.getSession();
                session.setAttribute("niss", log.getNiss());
                session.setAttribute("nom", log.getNom());
                session.setAttribute("prenom", log.getPrenom());
                session.setAttribute("role", log.getRole());
                session.setAttribute("etatRdvVacc", log.getStateVaccinRdv());
                session.setAttribute("dateNaissance", log.getDateNaissance());
                session.setAttribute("centre_attribue", log.getCentre_attribue());
                session.setAttribute("etatDeVaccination", log.getEtatDeVaccination());
                
                Cookie role = new Cookie("role", session.getAttribute("role").toString());
                Cookie centre_attribue = new Cookie("centre_attribue", session.getAttribute("centre_attribue").toString());
                Cookie niss = new Cookie("niss", session.getAttribute("niss").toString());
                resp.addCookie(role);      
                resp.addCookie(centre_attribue);
                resp.addCookie(niss); 
                
                req.getRequestDispatcher("WEB-INF/operateurEntre_Home.jsp").forward(req, resp);

            } else if (log.getRole() == 7) {

                System.out.println("ROLE CONN : " + log.getRole());
                HttpSession session = req.getSession();

                session.setAttribute("niss", log.getNiss());
                session.setAttribute("nom", log.getNom());
                session.setAttribute("prenom", log.getPrenom());
                session.setAttribute("role", log.getRole());
                session.setAttribute("etatRdvVacc", log.getStateVaccinRdv());
                session.setAttribute("dateNaissance", log.getDateNaissance());
                session.setAttribute("centre_attribue", log.getCentre_attribue());
                session.setAttribute("etatDeVaccination", log.getEtatDeVaccination());
                session.setAttribute("id", log.getNiss());

                Cookie role = new Cookie("role", session.getAttribute("role").toString());
                Cookie centre_attribue = new Cookie("centre_attribue", session.getAttribute("centre_attribue").toString());
                Cookie niss = new Cookie("niss", session.getAttribute("niss").toString());
                resp.addCookie(role);
                resp.addCookie(centre_attribue);
                resp.addCookie(niss);

                req.getRequestDispatcher("WEB-INF/adminHome.jsp").forward(req, resp);

            }

        }
    }
}
