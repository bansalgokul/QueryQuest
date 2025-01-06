package com.queryquest.controllers;

import com.queryquest.models.entities.Question;
import com.queryquest.services.QuestionService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.core.user.DefaultOAuth2User;
import org.springframework.web.bind.annotation.*;

@RestController
@Tag(name = "Questions", description = "Operations related to questions")
public class QuestionController {
    private static final Logger log = LoggerFactory.getLogger(QuestionController.class);
    private final QuestionService questionService;

    public QuestionController(QuestionService questionService) {
        this.questionService = questionService;
    }

    @Operation(
            summary = "Get all questions",
            description = "Returns a paginated list of all questions"
    )
    @GetMapping("/questions")
    public ResponseEntity<Page<Question>> getAllQuestions(
            @Parameter(description = "Page number", example = "0") @RequestParam(defaultValue = "0") int page,
            @Parameter(description = "Page size", example = "10") @RequestParam(defaultValue = "10") int size) {
        // get all questions
        log.info("Getting all questions");
        Page<Question> response = questionService.getAllQuestions(page, size);
        log.info("Returning {}", response);
        return ResponseEntity.ok(response);
    }

    @Operation(
            summary = "Create a new question",
            description = "Creates a new question and returns the created object"
    )
    @PostMapping("/questions")
    public ResponseEntity<Question> createQuestion(
            @Parameter(description = "Question to create") @RequestBody Question question,
            @AuthenticationPrincipal DefaultOAuth2User user) {
        // create a question
        log.info("Creating a question: {}", question);
        String email = user.getAttribute("email");
        question.setCreatedBy(email);
        question.setUpdatedBy(email);
        Question response = questionService.createQuestion(question);
        return ResponseEntity.ok(response);
    }

    // run a solution
    @Operation(
            summary = "Run a solution",
            description = "Runs a solution for a question and returns the result"
    )
    @PostMapping("/questions/{id}/run")
    public ResponseEntity<String> runSolution(
            @Parameter(description = "Question ID") @PathVariable String id,
            @Parameter(description = "Solution to run") @RequestBody String solution) {
        // run a solution
        log.info("Running solution for question: {}", id);
        String response = "Result for question " + id + ": " + solution;
        return ResponseEntity.ok(response);
    }

    // submit a solution
    @Operation(
            summary = "Submit a solution",
            description = "Submits a solution for a question and returns the result"
    )
    @PostMapping("/questions/{id}/submit")
    public ResponseEntity<String> submitSolution(
            @Parameter(description = "Question ID") @PathVariable String id,
            @Parameter(description = "Solution to submit") @RequestBody String solution) {
        // submit a solution
        log.info("Submitting solution for question: {}", id);
        String response = "Submitted solution for question " + id + ": " + solution;
        return ResponseEntity.ok(response);
    }

}
