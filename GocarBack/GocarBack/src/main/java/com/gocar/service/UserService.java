package com.gocar.service;

import com.gocar.api.IUserService;
import com.gocar.auth.Validation;
import com.gocar.model.User;
import com.gocar.model.dao.UserDao;
import com.gocar.model.dto.UserDTO;
import com.gocar.model.dto.dtomapper.UserMapper;

import org.hibernate.exception.ConstraintViolationException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;

import javax.management.openmbean.KeyAlreadyExistsException;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

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

        try{
            User user = UserMapper.INSTANCE.toEntity(userDTO);
            if (!Validation.nifValidate(user.getNif())) {
                throw new Exception();
            }
            user.setNif(user.getNif().toUpperCase());//Convertimos la letra a mayuscula
            userDao.saveAndFlush(user);
            return user.getId();
        }catch(Exception e){
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
}
