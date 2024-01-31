package com.rubber_duck.RestService.service;

import java.time.Instant;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rubber_duck.RestService.model.Alarm;
import com.rubber_duck.RestService.repository.AlarmRepository;

@Service
public class AlarmService {

    @Autowired
    private AlarmRepository alarmRepository;

    private final String alarmId = "98765";

    public Alarm createAlarm() {
        Alarm alarm = new Alarm();
        alarm.setId(this.alarmId);
        alarm.setState("ON");
        alarm.setUpdatedTime(Instant.now());
        return alarmRepository.save(alarm);
    }

    public Alarm getAlarm() {
        Alarm alarm = alarmRepository.findById(this.alarmId).orElse(null);
        if (alarm == null) {
            alarm = this.createAlarm();
        }
        return alarm;
    }

    public Alarm updateAlarm(String state) {
        Alarm alarm = new Alarm();
        alarm.setId(this.alarmId);
        alarm.setState(state);
        alarm.setUpdatedTime(Instant.now());
        return alarmRepository.save(alarm);
    }

}
