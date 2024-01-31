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

import com.rubber_duck.RestService.model.Network;
import com.rubber_duck.RestService.service.NetworkService;

@RestController
public class NetworkController {
    
    @Autowired
    private NetworkService networkService;

    @GetMapping("/network/list/{days}")
    public ResponseEntity<List<Network>> listDevices(@PathVariable String days) {
        Integer intDays = Integer.parseInt(days);
        List<Network> networkList = networkService.listNetwork(intDays);
        return new ResponseEntity<>(networkList, HttpStatus.OK);
    }

    @PostMapping("/network")
    ResponseEntity<Network> createTemperature(@RequestParam Double download, @RequestParam Double upload) {
        return new ResponseEntity<>(networkService.createNetwork(download, upload), HttpStatus.OK);
    }
}
