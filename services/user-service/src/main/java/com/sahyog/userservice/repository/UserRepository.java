package com.sahyog.userservice.repository;

import com.sahyog.userservice.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, String> {
    Optional<User> findByKeycloakId(String keycloakId);
    Optional<User> findByEmail(String email);
}