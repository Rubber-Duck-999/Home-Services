package com.rubber_duck.RestService.model;

import org.springframework.data.mongodb.core.mapping.MongoId;
import org.springframework.data.mongodb.core.mapping.Document;
import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Getter;
import lombok.Setter;

import java.time.Instant;

@Getter
@Setter
@Document(collection = "motion")
public class Motion {
    @MongoId
    private String id;
    @JsonFormat(shape = JsonFormat.Shape.STRING)
    private Instant detectedTime;
    private String type;
	private byte[] image;
}
