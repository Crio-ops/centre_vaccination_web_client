/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package bac.hermant.model.bean;

/**
 *
 * @author kevin
 */
public class Citoyens {

    private String motDePasse,
            niss,
            nom,
            prenom,
            adresse,
            lieuNaissance,
            dateNaissance,
            dateRdv_Dose1,
            dateRdv_Dose2,
            heureRdv_Dose1,
            heureRdv_Dose2,
            vaccin_attribue,
            etatDeVaccination,
            presenceRdv1,
            presenceRdv2,
            numLot_vaccin_attribue_dose1,
            numLot_vaccin_attribue_dose2;
    
    private int centre_attribue,
            role,
            code_postal,
            stateVaccinRdv;

    public Citoyens() {
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getPrenom() {
        return prenom;
    }

    public void setPrenom(String prenom) {
        this.prenom = prenom;
    }

    public String getAdresse() {
        return adresse;
    }

    public void setAdresse(String adresse) {
        this.adresse = adresse;
    }

    public int getCode_postal() {
        return code_postal;
    }

    public void setCode_postal(int code_postal) {
        this.code_postal = code_postal;
    }

    public String getNiss() {
        return niss;
    }

    public void setNiss(String niss) {
        this.niss = niss;
    }

    public String getLieuNaissance() {
        return lieuNaissance;
    }

    public void setLieuNaissance(String lieuNaissance) {
        this.lieuNaissance = lieuNaissance;
    }

    public String getDateNaissance() {
        return dateNaissance;
    }

    public void setDateNaissance(String dateNaissance) {
        this.dateNaissance = dateNaissance;
    }

    public String getMotDePasse() {
        return motDePasse;
    }

    public void setMotDePasse(String motDePasse) {
        this.motDePasse = motDePasse;
    }

    public int getCentre_attribue() {
        return centre_attribue;
    }

    public void setCentre_attribue(int centre_attribue) {
        this.centre_attribue = centre_attribue;
    }

    public int getRole() {
        return role;
    }

    public void setRole(int role) {
        this.role = role;
    }

    public String getDateRdv_Dose1() {
        return dateRdv_Dose1;
    }

    public void setDateRdv_Dose1(String dateRdv_Dose1) {
        this.dateRdv_Dose1 = dateRdv_Dose1;
    }

    public String getDateRdv_Dose2() {
        return dateRdv_Dose2;
    }

    public void setDateRdv_Dose2(String dateRdv_Dose2) {
        this.dateRdv_Dose2 = dateRdv_Dose2;
    }

    public String getHeureRdv_Dose1() {
        return heureRdv_Dose1;
    }

    public void setHeureRdv_Dose1(String heureRdv_Dose1) {
        this.heureRdv_Dose1 = heureRdv_Dose1;
    }

    public String getHeureRdv_Dose2() {
        return heureRdv_Dose2;
    }

    public void setHeureRdv_Dose2(String heureRdv_Dose2) {
        this.heureRdv_Dose2 = heureRdv_Dose2;
    }

    public String getVaccin_attribue() {
        return vaccin_attribue;
    }

    public void setVaccin_attribue(String vaccin_attribue) {
        this.vaccin_attribue = vaccin_attribue;
    }

    public String getEtatDeVaccination() {
        return etatDeVaccination;
    }

    public void setEtatDeVaccination(String etatDeVaccination) {
        this.etatDeVaccination = etatDeVaccination;
    }

    public int getStateVaccinRdv() {
        return stateVaccinRdv;
    }

    public void setStateVaccinRdv(int stateVaccinRdv) {
        this.stateVaccinRdv = stateVaccinRdv;
    }

    public String getPresenceRdv1() {
        return presenceRdv1;
    }

    public void setPresenceRdv1(String presenceRdv1) {
        this.presenceRdv1 = presenceRdv1;
    }

    public String getPresenceRdv2() {
        return presenceRdv2;
    }

    public void setPresenceRdv2(String presenceRdv2) {
        this.presenceRdv2 = presenceRdv2;
    }

    public String getNumLot_vaccin_attribue_dose1() {
        return numLot_vaccin_attribue_dose1;
    }

    public void setNumLot_vaccin_attribue_dose1(String numLot_vaccin_attribue_dose1) {
        this.numLot_vaccin_attribue_dose1 = numLot_vaccin_attribue_dose1;
    }

    public String getNumLot_vaccin_attribue_dose2() {
        return numLot_vaccin_attribue_dose2;
    }

    public void setNumLot_vaccin_attribue_dose2(String numLot_vaccin_attribue_dose2) {
        this.numLot_vaccin_attribue_dose2 = numLot_vaccin_attribue_dose2;
    }

    
    
    @Override
    public String toString() {
        return "Citoyens{" + "motDePasse=" + motDePasse + ", niss=" + niss + ", nom=" + nom + ", prenom=" + prenom + ", adresse=" + adresse + ", lieuNaissance=" + lieuNaissance + ", dateNaissance=" + dateNaissance + ", dateRdv_Dose1=" + dateRdv_Dose1 + ", dateRdv_Dose2=" + dateRdv_Dose2 + ", heureRdv_Dose1=" + heureRdv_Dose1 + ", heureRdv_Dose2=" + heureRdv_Dose2 + ", vaccin_attribue=" + vaccin_attribue + ", etatDeVaccination=" + etatDeVaccination + ", centre_attribue=" + centre_attribue + ", role=" + role + ", code_postal=" + code_postal + ", stateVaccinRdv=" + stateVaccinRdv + '}';
    }

}
