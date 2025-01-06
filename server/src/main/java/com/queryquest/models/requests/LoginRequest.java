package com.queryquest.models.requests;

import lombok.Data;
import lombok.NonNull;

@Data
public class LoginRequest {
    @NonNull
    String authCode;
}
