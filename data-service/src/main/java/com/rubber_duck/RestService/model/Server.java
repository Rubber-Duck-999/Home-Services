package com.rubber_duck.RestService.model;

import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.MongoId;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Document(collection="server")
public class Server {

    @MongoId
    private String id;
    private String name;
    private String address;
    private boolean online;
}
