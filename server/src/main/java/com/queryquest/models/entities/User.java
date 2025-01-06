package com.queryquest.models.entities;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Document(collection = "users")
@Getter
@Setter
@NoArgsConstructor
public class User {

    @Id
    private String id;  // MongoDB uses String for _id by default

    private String name;

    private String email;

    private UserRole role;

    private RegistrationSource source;
}
