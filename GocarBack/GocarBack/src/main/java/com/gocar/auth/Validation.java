package com.gocar.auth;

public class Validation {


    public static boolean nifValidate(String nif) {
        // Verificacion de la longitud del DNI
        if (nif.length() != 9) {
            return false;
        }

        // Extraer el num y la letra del DNI
        String number = nif.substring(0, 8);
        char letter = Character.toUpperCase(nif.charAt(8));

        // try catch para verificar que el num sea numerico
        try {
            Integer.parseInt(number);
        } catch (NumberFormatException e) {
            return false;
        }

        // Calculo de la letra correspondiente al num
        char[] letters = {'T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'};
        int indice = Integer.parseInt(number) % 23;
        char calculatedLetter = letters[indice];

        // Comparar la letra calculada con la letra del DNI
        return letter == calculatedLetter;
    }
}