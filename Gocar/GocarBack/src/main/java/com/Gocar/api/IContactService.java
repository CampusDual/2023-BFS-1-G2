package com.Gocar.api;


import com.Gocar.model.dto.ContactDTO;

import java.util.List;

public interface IContactService {

    //CRUD Operations
    ContactDTO queryContact(ContactDTO contactDTO);
    List<ContactDTO> queryAllContact();
    int insertContact(ContactDTO contactDTO);
    int updateContact(ContactDTO contactDTO);
    int deleteContact(ContactDTO contactDTO);
}
