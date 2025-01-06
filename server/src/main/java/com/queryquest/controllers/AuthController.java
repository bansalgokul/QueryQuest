package com.queryquest.controllers;

import com.queryquest.models.entities.User;
import com.queryquest.repositories.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.core.user.DefaultOAuth2User;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
public class AuthController {

    private static final Logger log =
            LoggerFactory.getLogger(AuthController.class);
    private final UserRepository userRepository;

    public AuthController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @GetMapping("/user")
    public ResponseEntity<User> getUserInfo(@AuthenticationPrincipal DefaultOAuth2User user) {
        try {
            String email = user.getAttribute("email");
            User userInfo = userRepository.findByEmail(email).orElseThrow(
                    () -> new RuntimeException("User not found"));
            log.info("User info: {}", userInfo);
            return ResponseEntity.ok(userInfo);
        } catch (Exception e) {
            log.error(String.format("Error occurred while fetching user info: %s", e.getMessage()));
            return ResponseEntity.badRequest().build();
        }
    }
}
