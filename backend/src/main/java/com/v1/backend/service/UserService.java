package com.v1.backend.service;

import com.v1.backend.entity.User;
import com.v1.backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UserService implements IUserService {
    private final UserRepository userRepository;

    @Override
public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @Override
public User getUserById(Long id) {
        return userRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("User not found"));
    }

    @Override
public User createUser(User user) {
        return userRepository.save(user);
    }

    @Override
public User updateUser(Long id, User user) {
        User existingUser = getUserById(id);
        existingUser.setFirstName(user.getFirstName());
        existingUser.setLastName(user.getLastName());
        existingUser.setPhone(user.getPhone());
        return userRepository.save(existingUser);
    }

    @Override
public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }
}