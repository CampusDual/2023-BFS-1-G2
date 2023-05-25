package com.gocar.model.dto.dtomapper;

import com.gocar.model.User;
import com.gocar.model.dto.UserDTO;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

import java.util.List;
import java.util.Optional;

@Mapper
public interface UserMapper {

    UserMapper INSTANCE = Mappers.getMapper(UserMapper.class);
    UserDTO toDTO(Optional<User> user);

    List<UserDTO> toDTOList(List<User> users);

    User toEntity(UserDTO userDTO);
}
