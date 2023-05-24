package com.gocar;


import com.gocar.auth.Validation;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import static org.junit.jupiter.api.Assertions.assertEquals;


@SpringBootTest
public class ValidationTest {


    @Test
    @DisplayName("nifValidate wrong syntax")
    public void nifValidateErrorTest(){
        String nifError = "123456789Z";
        String nifError2 = "12345Z";
        String nifError3 = "Z12345678";
        String nifError4 = "12345678";
        assertEquals(false, Validation.nifValidate(nifError));
        assertEquals(false, Validation.nifValidate(nifError2));
        assertEquals(false, Validation.nifValidate(nifError3));
        assertEquals(false, Validation.nifValidate(nifError4));
    }

    @Test
    @DisplayName("nifValidate OK")
    public void nifValidateOkTest(){
        String nifOk = "12345678Z";
        assertEquals(true, Validation.nifValidate(nifOk));
    }




}
