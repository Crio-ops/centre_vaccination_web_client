/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package bac.hermant.model;

import com.google.zxing.BarcodeFormat;
import com.google.zxing.MultiFormatWriter;
import com.google.zxing.WriterException;
import com.google.zxing.client.j2se.MatrixToImageWriter;
import com.google.zxing.common.BitMatrix;
import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.logging.Level;
import java.util.logging.Logger;
/**
 *
 * @author kevin
 */
public class QRCodeGenerator{ 


public static void createQR(String dataPatient, String fileName) throws WriterException, IOException {
    
	String file = fileName;	
                File dir = new File(fileName);
                Files.createDirectories(Paths.get("C:/temp/CentreVaccServiceQrCode/" + dir +""));
                System.out.println(new File("../").getAbsolutePath());
		String path = "C:/temp/CentreVaccServiceQrCode/"+ dir +"/" + file + ".jpg";
	
		BitMatrix matrix = new MultiFormatWriter()
                    .encode(dataPatient, BarcodeFormat.QR_CODE, 500, 500);
     
		MatrixToImageWriter.writeToPath(matrix, "jpg", Paths.get(path));
                
                
}
} 
