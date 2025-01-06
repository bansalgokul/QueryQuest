package com.queryquest.models.entities;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.mongodb.core.mapping.Field;

import java.util.Set;

@Getter
@Setter
@NoArgsConstructor
public class TableEntity {

    @Field("tableName")
    private String tableName;

    @Field("rows")
    private Set<RowEntity> rows; // Embedded rows
}