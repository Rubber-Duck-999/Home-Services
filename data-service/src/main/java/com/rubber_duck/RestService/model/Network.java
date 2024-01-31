package com.rubber_duck.RestService.model;

import java.time.Instant;

import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.MongoId;
import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Document(collection = "network")
public class Network {
    @MongoId
    private String id;
    @JsonFormat(shape = JsonFormat.Shape.STRING)
    private Instant created;
    private Double download;
    private Double upload;
}
