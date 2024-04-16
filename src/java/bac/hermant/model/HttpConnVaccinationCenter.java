/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package bac.hermant.model;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;

/**
 *
 * @author kevin
 */
public class HttpConnVaccinationCenter {
    
    public static String HttpConnection(String jsonString, String sendUrl) throws IOException{
    
        URL url = new URL(sendUrl);
        String jsonResponse = "";
        HttpURLConnection connection = (HttpURLConnection) url.openConnection();
        connection.setRequestMethod("POST");
        connection.setDoOutput(true);
        connection.setRequestProperty("Content-type", "application/json");
        connection.setRequestProperty("Accept", "application/json");
      
        try(OutputStream os = connection.getOutputStream()) {
        byte[] input = jsonString.getBytes("utf-8");
        os.write(input, 0, input.length);			
        }
//        System.out.println("http");
        try(BufferedReader br = new BufferedReader(
        new InputStreamReader(connection.getInputStream(), "utf-8"))) {
        StringBuilder response = new StringBuilder();
        String responseLine = null;
        while ((responseLine = br.readLine()) != null) {
            response.append(responseLine.trim());
            jsonResponse= response.toString();
            }
        }
//        System.out.println("la");
        return jsonResponse;
    }
}
