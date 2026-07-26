package com.sahyog.userservice.dto;

import com.sahyog.userservice.entity.User;
import java.time.Instant;

public record UserResponse(String id, String email, String name, String role, Instant createdAt) {
    public static UserResponse from(User user) {
        return new UserResponse(user.getId(), user.getEmail(), user.getName(), user.getRole(), user.getCreatedAt());
    }
}