/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package bac.hermant.controller.servlet;

import bac.hermant.model.QRCodeGenerator;
import com.google.zxing.WriterException;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 *
 * @author kevin
 */
@WebServlet("/download")
public class ServletDownloadQRCode extends HttpServlet {

    private final int ARBITARY_SIZE = 1048;

    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

        HttpSession session = req.getSession();
        
        String dataPatient = session.getAttribute("nom").toString() + "\n " + session.getAttribute("prenom").toString() + "\n " + session.getAttribute("vaccin_attribue").toString();
        String fileName = session.getAttribute("niss").toString();
                
        try {
            QRCodeGenerator.createQR(dataPatient, fileName);
        } catch (WriterException ex) {
            Logger.getLogger(ServletDownloadQRCode.class.getName()).log(Level.SEVERE, null, ex);
        }

        resp.setContentType("image/jpg");
        resp.setHeader("Content-disposition", "attachment; filename="+ fileName +".jpg");

        try (FileInputStream in = new FileInputStream("C:/temp/CentreVaccServiceQrCode/" + fileName + "/" + fileName + ".jpg");
                OutputStream out = resp.getOutputStream()) {

            byte[] buffer = new byte[ARBITARY_SIZE];

            int numBytesRead;
            while ((numBytesRead = in.read(buffer)) > 0) {
                out.write(buffer, 0, numBytesRead);
            } 
        }
 
    }
}
