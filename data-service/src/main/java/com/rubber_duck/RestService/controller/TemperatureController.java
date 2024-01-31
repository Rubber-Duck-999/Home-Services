package com.rubber_duck.RestService.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.rubber_duck.RestService.model.Temperature;
import com.rubber_duck.RestService.service.TemperatureService;

@RestController
public class TemperatureController {

    @Autowired
    private TemperatureService temperatureService;

    @GetMapping("/temperature/list/{days}")
    public ResponseEntity<List<Temperature>> listTemperature(@PathVariable String days) {
        Integer intDays = Integer.parseInt(days);
        List<Temperature> temperatureList = temperatureService.listTemperature(intDays);
        return new ResponseEntity<>(temperatureList, HttpStatus.OK);
    }
    
    @PostMapping("/temperature")
    ResponseEntity<Temperature> createTemperature(@RequestParam Double temperature) {
        return new ResponseEntity<>(temperatureService.createTemperature(temperature), HttpStatus.OK);
    }

}
