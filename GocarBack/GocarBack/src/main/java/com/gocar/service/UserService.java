package com.gocar.service;

import com.gocar.api.NIFViolationException;
import com.gocar.api.IUserService;
import com.gocar.auth.Validation;
import com.gocar.model.User;
import com.gocar.model.dao.UserDao;
import com.gocar.model.dto.UserDTO;
import com.gocar.model.dto.dtomapper.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;


import java.util.List;

@Service("UserService")
@Lazy
public class UserService implements IUserService {

    @Autowired
    private UserDao userDao;

    @Override
    public UserDTO queryUser(UserDTO userDTO) {
        User user = UserMapper.INSTANCE.toEntity(userDTO);
        return UserMapper.INSTANCE.toDTO(userDao.getReferenceById(user.getId()));
    }

    @Override
    public List<UserDTO> queryAllUser() {
        return UserMapper.INSTANCE.toDTOList(userDao.findAll());
    }

    @Override
    public int insertUser(UserDTO userDTO) {

        try {
            User user = UserMapper.INSTANCE.toEntity(userDTO);
            user.getEmail().toLowerCase();
            if (!Validation.nifValidate(user.getNif())) {
                throw new NIFViolationException("El DNI no cumple con el formato especificado");
            }
            user.setNif(user.getNif().toUpperCase());//Convertimos la letra a mayuscula
            userDao.saveAndFlush(user);
            return user.getId();
        } catch (Exception e) {
            return -1;
        }
    }

    @Override
    public int updateUser(UserDTO userDTO) {
        return insertUser(userDTO);
    }

    @Override
    public int deleteUser(UserDTO userDTO) {
        int id = userDTO.getId();
        User user = UserMapper.INSTANCE.toEntity(userDTO);
        userDao.delete(user);
        return id;
    }

    @Override
    public int userOk(UserDTO userDTO) {
        if(userDTO.getEmail() == null || userDTO.getPassword() == null) return -1;
        User userprueba = UserMapper.INSTANCE.toEntity(userDTO);
        // Conversion a lower funcional (faltaba settearlo antes de pasarlo)
        userprueba.setEmail(userprueba.getEmail().toLowerCase());
        for (User user : userDao.findAll()) {
            if (userprueba.getEmail().equals(user.getEmail()) && userprueba.getPassword().equals(user.getPassword())) {
                return 1;
            }
        }
        return -1;
    }
}
