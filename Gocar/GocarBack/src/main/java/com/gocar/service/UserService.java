package com.gocar.service;

import com.gocar.api.IUserService;
import com.gocar.model.User;
import com.gocar.model.dao.UserDao;
import com.gocar.model.dto.UserDTO;
import com.gocar.model.dto.dtomapper.UserMapper;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
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
        User user = UserMapper.INSTANCE.toEntity(userDTO);
        userDao.saveAndFlush(user);
        return user.getId();
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
