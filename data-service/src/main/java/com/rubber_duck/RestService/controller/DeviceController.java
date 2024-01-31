package com.rubber_duck.RestService.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.rubber_duck.RestService.model.Device;
import com.rubber_duck.RestService.service.DeviceService;

@RestController
public class DeviceController {

    @Autowired
    private DeviceService deviceService;

    @GetMapping("/device/{name}")
    public ResponseEntity<Device> getDevice(@PathVariable String name) {
        return new ResponseEntity(deviceService.getDevice(name), HttpStatus.OK);
    }

    @GetMapping("/device/list")
    public ResponseEntity<List<Device>> listDevice() {
        return new ResponseEntity(deviceService.listDevice(), HttpStatus.OK);
    }
}
