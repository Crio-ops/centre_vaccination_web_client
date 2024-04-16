<%@ page language="java" import="java.util.*, bac.hermant.model.bean.*" session="true" contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
    <head>
        <title>FWB.COVID19</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script src="https://code.jquery.com/jquery-3.6.1.js" integrity="sha256-3zlB5s2uwoUzrXK3BT7AX3FyvojsraNFxCc2vC/7pNI=" crossorigin="anonymous"></script>       
        <style>

            
html,body{
    margin:0;
    padding: 0;
    height:100%;
    font-family: Calibri;
}
#gauche{
	width:20%;
        height: 100%;
	float:left;
	background-color: white;
        box-shadow: 0 0 60px 0 black;
}

#page{
    width: 80%;
    float: right;
    height:100%;
    background-image:url('assets/image/homepage_virus.jpg');   
    background-size:cover; 

       
}
label{
    margin-bottom:5px;
    font-size: 80%;
}
input , button{
    margin-bottom:5px;
    border-width: 2px;
    border-radius: 5px
}
#homepage{
    margin-left: 15px
}
#titleComm{
    margin-top:-25px;
    margin-bottom: 15px
}
#title{
    display: flex;
    margin-top:-5px;
}
img{
    width:90%;
    height: auto;
}

#formBox{
    padding-top: 30px;
}

        </style>
    </head>
        <body> 
            <div id="page"></div>          
            <div id="gauche">
                <div id="homepage">
                    <img src="assets/image/FedBelge.png" alt="alt"/>
                    <h1 id='title'>FWB.COVID19</h1>
                    <p id="titleComm">plateforme de vaccination Wallonne et Bruxelloise</p>
                    <div id="formBox">
                        <form  action="ServletLogin" method="post">
                            <label for="fname">Identifiant :</label><br>
                            <input style="background-color: #E5E3E1; padding:5px 10px 5px 10px ;" type="text" name="niss"><br>
                            <label for="lname">Mot de passe :</label><br>
                            <input style="background-color: #E5E3E1; padding:5px 10px 5px 10px ;" type="password" name="password" autocomplete="off"><br><br>
                           
                            <p><%  if(session.getAttribute("error") != null){out.print("Erreur dans l'Id ou le mdp"); 
                                };
                            %></p>
                            <input type="submit" style="background-color:#225F7A; color:white; padding:10px 15px 10px 15px ; border: hidden; " />   
                        </form>
<!--                            <p>Vous n'avez pas encore de compte ?</p>
                            <button style="background-color:#225F7A; color:white; padding:10px 15px 10px 15px ; border: hidden;" onclick="window.location.href='http://localhost:8080/CentreVaccService/register.jsp'">S'enregister</button>-->
                </div>
            </div>
        </body>
    
</html>
