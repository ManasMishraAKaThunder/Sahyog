package com.sahyog.userservice.controller;

import com.sahyog.userservice.dto.UserResponse;
import com.sahyog.userservice.dto.UserUpdateRequest;
import com.sahyog.userservice.entity.User;
import com.sahyog.userservice.service.UserService;
import jakarta.validation.Valid;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/me")
    public UserResponse me(@AuthenticationPrincipal Jwt jwt) {
        User user = userService.getOrCreateFromToken(jwt);
        return UserResponse.from(user);
    }

    @GetMapping
    public List<UserResponse> getAllUsers() {
        return userService.getAllUsers().stream().map(UserResponse::from).toList();
    }

    @PatchMapping("/{id}")
    public UserResponse updateName(@PathVariable String id, @Valid @RequestBody UserUpdateRequest request) {
        User updated = userService.updateName(id, request.name());
        return UserResponse.from(updated);
    }
}