package com.queryquest.models.entities;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.mongodb.core.mapping.Field;

@Getter
@Setter
@NoArgsConstructor
public class ColumnData {

    @Field("columnName")
    private String columnName; // Name of the column

    @Field("value")
    private String value; // Value of the column
}
