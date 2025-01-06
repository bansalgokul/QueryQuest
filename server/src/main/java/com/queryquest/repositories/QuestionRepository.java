package com.queryquest.repositories;


import com.queryquest.models.entities.Question;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface QuestionRepository extends MongoRepository<Question, String> {

}
