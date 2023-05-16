package com.gocar.controller;

import com.gocar.api.IUserService;
import com.gocar.model.dto.UserDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private IUserService userService;


    @GetMapping("/testController")
    public String testUserController() {
        return "User controller works!";
    }

    @PostMapping("/get")
    public UserDTO queryUser(@RequestBody UserDTO userDTO) {
        return userService.queryUser(userDTO);
    }

    @GetMapping("/getAll")
    public List<UserDTO> queryAllUsers() {
        return userService.queryAllUser();
    }

    @PostMapping("/add")
    public int addUser(@RequestBody UserDTO userDTO) {
        return userService.insertUser(userDTO);
    }

    @PutMapping("/update")
    public int updateUser(@RequestBody UserDTO userDTO) {
        return userService.updateUser(userDTO);
    }

    @DeleteMapping("/delete")
    public int deleteUser(@RequestBody UserDTO userDTO) {
        return userService.deleteUser(userDTO);
    }
}