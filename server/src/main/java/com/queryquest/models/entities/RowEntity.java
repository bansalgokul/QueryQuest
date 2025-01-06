package com.queryquest.models.entities;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.mongodb.core.mapping.Field;


import java.util.Set;

@Getter
@Setter
@NoArgsConstructor
public class RowEntity {

    @Field("columns")
    private Set<ColumnData> columns; // Column data for each row
}