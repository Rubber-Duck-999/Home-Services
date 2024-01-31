package com.rubber_duck.RestService;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

import com.rubber_duck.RestService.repository.AlarmRepository;
import com.rubber_duck.RestService.repository.DeviceRepository;
import com.rubber_duck.RestService.repository.MoodRepository;
import com.rubber_duck.RestService.repository.MotionRepository;
import com.rubber_duck.RestService.repository.NetworkRepository;
import com.rubber_duck.RestService.repository.TemperatureRepository;

@SpringBootApplication
@EnableMongoRepositories(basePackageClasses = {
	AlarmRepository.class,
	MoodRepository.class,
	DeviceRepository.class,
	MotionRepository.class,
	NetworkRepository.class,
	TemperatureRepository.class
})
public class ServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(ServiceApplication.class, args);
	}

}
