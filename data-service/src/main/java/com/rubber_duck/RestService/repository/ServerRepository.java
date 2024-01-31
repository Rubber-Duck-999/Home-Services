package com.rubber_duck.RestService.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import com.rubber_duck.RestService.model.Server;

@Repository
public interface ServerRepository extends MongoRepository<Server, String>{

    @Query("{'name': ?0}")
    Server findAllByName(String name);
}
