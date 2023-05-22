package com.gocar.api;

import com.gocar.model.dto.UserDTO;

import java.util.List;

public interface IUserService {

    //CRUD Operations
    UserDTO queryUser(UserDTO userDTO);
    List<UserDTO> queryAllUser();
    int insertUser(UserDTO userDTO);
    int updateUser(UserDTO userDTO);
    int deleteUser(UserDTO userDTO);
    int userOk (UserDTO userDTO);

}