package com.gocar.controller;

import com.gocar.api.IUserService;
import com.gocar.model.dto.UserDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = {"http://localhost:4200"})
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

    @PostMapping("/Conectarse")
    public int userOk(@RequestBody UserDTO userDTO) {
        return userService.userOk(userDTO);

    }
}

