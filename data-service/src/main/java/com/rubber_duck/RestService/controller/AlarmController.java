package com.rubber_duck.RestService.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rubber_duck.RestService.model.Alarm;
import com.rubber_duck.RestService.service.AlarmService;

@RestController
public class AlarmController {
    
    @Autowired
    private AlarmService alarmService;

    @GetMapping("/alarm")
    ResponseEntity<Alarm> getAlarm() {
        Alarm alarm = alarmService.getAlarm();
        return new ResponseEntity(alarm, HttpStatus.OK);
    }

    @PutMapping("/alarm/{state}")
    ResponseEntity<Alarm> updateAlarm(@PathVariable String state) {
        Alarm alarm = alarmService.updateAlarm(state);
        return new ResponseEntity(alarm, HttpStatus.OK);
    }
}
