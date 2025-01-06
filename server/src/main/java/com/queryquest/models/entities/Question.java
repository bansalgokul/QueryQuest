package com.queryquest.models.entities;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.util.Date;
import java.util.Set;

@Document(collection = "questions") // MongoDB collection name
@Getter
@Setter
@ToString
@NoArgsConstructor
public class Question {

    @Id
    private String id; // MongoDB uses String for IDs by default

    @Field("title")
    private String title;

    @Field("description")
    private String description;

    @Field("tables")
    private Set<TableEntity> tables; // Schema tables

    @Field("output")
    private TableEntity output; // Expected output for the query

    @Field("expectedQuery")
    private String expectedQuery; // Correct SQL query

    @Field("difficulty")
    private Difficulty difficulty;

    @Field("category")
    private Category category;

    @Field("tags")
    private Set<String> tags;

    @Field("hint")
    private String hint; // Hint to help users solve the question

    @Field("createdBy")
    private String createdBy;

    @Field("updatedBy")
    private String updatedBy;

    @CreatedDate
    @Field("createdAt")
    private Date createdAt;

    @LastModifiedDate
    @Field("updatedAt")
    private Date updatedAt;
}
