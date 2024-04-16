/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package bac.hermant.controller.servlet;

import bac.hermant.model.HttpConnVaccinationCenter;
import com.oreilly.servlet.MultipartRequest;
import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.Enumeration;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 *
 * @author kevin
 */
public class ServletAddCitoyens extends HttpServlet {

    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

        resp.setContentType("text/html");
        String filename = " ";
        File dir = new File("temp");

        Files.createDirectories(Paths.get("C://temp"));
        MultipartRequest m = new MultipartRequest(req, "C://temp");

        Enumeration files = m.getFileNames();

        while (files.hasMoreElements()) {

            String name = (String) files.nextElement();
            filename = m.getFilesystemName(name);
        }

        InputStream inStr = new FileInputStream("C://temp/" + filename);
        InputStreamReader isReader = new InputStreamReader(inStr);
        //Creating a BufferedReader object
        BufferedReader reader = new BufferedReader(isReader);
        StringBuffer sb = new StringBuffer();
        String str;
        while ((str = reader.readLine()) != null) {
            sb.append(str);
        }
        String result = sb.toString();
        String resultBack = HttpConnVaccinationCenter.HttpConnection(result, "http://localhost:8080/CentreVaccination/ServletAddCitoyens");
        System.out.println("retour du resultBack : " + resultBack.toString());

        HttpSession session = req.getSession();
        session.setAttribute("result", resultBack);
        req.getRequestDispatcher("WEB-INF/gestion_des_citoyens.jsp").forward(req, resp);

//            }
    }
}
