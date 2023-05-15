package com.Gocar.model.dto.dtomapper;

import com.Gocar.model.User;
import com.Gocar.model.dto.UserDTO;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

import java.util.List;

@Mapper
public interface UserMapper {

    UserMapper INSTANCE = Mappers.getMapper(UserMapper.class);
    UserDTO toDTO(User user);

    List<UserDTO> toDTOList(List<User> users);

    User toEntity(UserDTO userDTO);
}
