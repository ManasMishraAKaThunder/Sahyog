package com.sahyog.userservice.service;

import com.sahyog.userservice.entity.User;
import com.sahyog.userservice.repository.UserRepository;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User getOrCreateFromToken(Jwt jwt) {
        String keycloakId = jwt.getSubject();
        return userRepository.findByKeycloakId(keycloakId)
                .orElseGet(() -> {
                    User user = new User();
                    user.setKeycloakId(keycloakId);
                    user.setEmail(jwt.getClaimAsString("email"));
                    user.setName(jwt.getClaimAsString("name"));
                    user.setRole("member");
                    return userRepository.save(user);
                });
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public User updateName(String userId, String newName) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new UserNotFoundException(userId));
        user.setName(newName);
        return userRepository.save(user);
    }
}