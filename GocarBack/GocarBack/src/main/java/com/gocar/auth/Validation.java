package com.gocar.auth;

public class Validation {

    public static boolean nifValidate(String nif) {
        // Verificar la longitud del DNI
        if (nif.length() != 9) {
            return false; // excep
        }

        // Extraer el número y la letra del DNI
        String number = nif.substring(0, 8);
        String letter = nif.substring(8).toUpperCase();

        // Verificar que el número sea numérico
        try {
            Integer.parseInt(number);
        } catch (NumberFormatException e) {
            return false;
        }

        // Calcular la letra correspondiente al número
        String letters = "TRWAGMYFPDXBNJZSQVHLCKE";
        int indice = Integer.parseInt(number) % 23;
        char calulatedLetter = letters.charAt(indice);

        // Comparar la letra calculada con la letra del DNI
        return letter.charAt(0) == calulatedLetter;
    }
}
