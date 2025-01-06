package com.queryquest.services;

import com.queryquest.models.entities.Question;
import com.queryquest.models.entities.RowEntity;
import com.queryquest.models.entities.TableEntity;
import com.queryquest.repositories.QuestionRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Slf4j
@Service
public class QuestionService {
    private final QuestionRepository questionRepository;

    public QuestionService(QuestionRepository questionRepository) {
        this.questionRepository = questionRepository;
    }

    public Page<Question> getAllQuestions(int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        return questionRepository.findAll(pageable);
    }

    public Question createQuestion(Question question) {
        log.info("Saving question: {}", question);
        return questionRepository.save(question);
    }
}
