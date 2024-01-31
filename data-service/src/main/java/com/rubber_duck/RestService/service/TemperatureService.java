package com.rubber_duck.RestService.service;

import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rubber_duck.RestService.model.Temperature;
import com.rubber_duck.RestService.repository.TemperatureRepository;

@Service
public class TemperatureService {

    @Autowired
    private TemperatureRepository temperatureRepository;

    public List<Temperature> listTemperature(Integer days) {
        Instant now = Instant.now();
        Instant value = now.minus(days, ChronoUnit.DAYS);
        return temperatureRepository.findByDays(value);
    }
    
    public Temperature createTemperature(Double temp) {
        Temperature temperature = new Temperature();
        temperature.setId(UUID.randomUUID().toString());
        temperature.setTemperature(temp);
        temperature.setCreated(Instant.now());
        return temperatureRepository.save(temperature);
    }
}
