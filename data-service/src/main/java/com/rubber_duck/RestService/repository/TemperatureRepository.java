package com.rubber_duck.RestService.repository;

import java.time.Instant;
import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import com.rubber_duck.RestService.model.Temperature;

@Repository
public interface TemperatureRepository extends MongoRepository<Temperature, String> {
    
    @Query("{'created': {$gte: ?0}}")
    List<Temperature> findByDays(Instant date);
}
