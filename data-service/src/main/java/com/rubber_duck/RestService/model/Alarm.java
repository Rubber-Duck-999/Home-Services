package com.rubber_duck.RestService.model;

import java.time.Instant;

import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.MongoId;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Document(collection = "alarm")
public class Alarm {
    @MongoId
    private String id;
    private String state;
    @JsonFormat(shape = JsonFormat.Shape.STRING)
    private Instant updatedTime;
}
