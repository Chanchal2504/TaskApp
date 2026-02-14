package com.Project.TaskApp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.Project.TaskApp.entity.User;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findByEmail(String email);

    boolean existsByEmail(String email);
}