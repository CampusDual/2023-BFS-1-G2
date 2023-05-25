package com.gocar.controller;

import com.fasterxml.jackson.databind.util.JSONPObject;
import com.gocar.api.IUserService;
import com.gocar.model.User;
import com.gocar.model.dao.UserDao;
import com.gocar.model.dto.UserDTO;
import com.gocar.model.dto.dtomapper.UserMapper;
import org.apache.tomcat.util.json.JSONParser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = {"http://localhost:4200"})
@RestController
@RequestMapping("/users")
public class UserController extends HttpEntity {

    @Autowired
    private IUserService userService;
    @Autowired
    private UserDao userDao;


    @GetMapping("/testController")
    public String testUserController() {
        return "User controller works!";
    }

    @GetMapping("/get/{userID}")
    public UserDTO queryUser(@PathVariable Integer userID) {
        return userService.queryUser(userID);
    }

    @GetMapping("/getAll")
    public List<UserDTO> queryAllUsers() {
        return userService.queryAllUser();
    }

    @PostMapping("/add")
    public ResponseEntity<User> addUser(@RequestBody UserDTO userDTO) {
        int idUser =  userService.insertUser(userDTO);
        User user = userDao.getReferenceById(idUser);
       /* Map<String, Integer> json = new HashMap<>();
        json.put("id", idUser);*/
        return new ResponseEntity<>(user, HttpStatus.resolve(200));
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

