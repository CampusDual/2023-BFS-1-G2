package com.Gocar.service;

import com.Gocar.model.User;
import com.Gocar.model.dao.UserDao;
import com.Gocar.model.dto.UserDTO;
import com.Gocar.model.dto.dtomapper.ContactMapper;
import com.Gocar.model.dto.dtomapper.UserMapper;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("userService")
@Lazy
public class UserService implements UserMapper {

    @Autowired
    private UserDao userDao;


    @Override
    public UserDTO toDTO(com.Gocar.model.User user) {
        return null;
    }

    @Override
    public List<UserDTO> toDTOList(List<User> users) {
        return null;
    }

    @Override
    public com.Gocar.model.User toEntity(UserDTO userDTO) {
        return null;
    }

    public List<UserDTO> getAll(){
        return UserMapper.INSTANCE.toDTOList(userDao.findAll());
    }

    public UserDTO getUser(UserDTO userDTO) {
        User user = UserMapper.INSTANCE.toEntity(userDTO);
        return UserMapper.INSTANCE.toDTO(userDao.getReferenceById(user.getId()));
    }

    public void insertUser(UserDTO userDTO){
        User user = UserMapper.INSTANCE.toEntity(userDTO);
        userDao.saveAndFlush(user);
    }

    public int deleterUser(UserDTO userDTO){
        int id = userDTO.getId();
        User user = UserMapper.INSTANCE.toEntity(userDTO);
        userDao.delete(user);
        return id;
    }

}
