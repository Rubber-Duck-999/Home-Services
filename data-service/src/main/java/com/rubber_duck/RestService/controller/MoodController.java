package com.rubber_duck.RestService.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rubber_duck.RestService.model.Mood;
import com.rubber_duck.RestService.service.MoodService;

@RestController
public class MoodController {

    @Autowired
    private MoodService moodService;

    @GetMapping("/mood")
    public ResponseEntity<Mood> getMood() {
        return new ResponseEntity<>(moodService.getMood(), HttpStatus.OK);
    }

    @PutMapping("/mood/{state}")
    ResponseEntity<Mood> updateMood(@PathVariable String state) {
        return new ResponseEntity(moodService.updateMood(state), HttpStatus.OK);
    }
    
}
