package com.rubber_duck.RestService.repository;

import java.time.Instant;
import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import com.rubber_duck.RestService.model.Motion;

@Repository
public interface MotionRepository extends MongoRepository<Motion, String> {

    @Query("{'detectedTime': {$gte: ?0}}")
    List<Motion> findByDays(Instant date);
}
