package com.rubber_duck.RestService.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rubber_duck.RestService.model.Server;
import com.rubber_duck.RestService.service.ServerService;

import io.swagger.v3.oas.annotations.parameters.RequestBody;

@RestController
public class ServerController {

    @Autowired
    private ServerService serverService;

    @GetMapping("/server/{name}")
    public ResponseEntity<Server> getDevice(@PathVariable String name) {
        return new ResponseEntity(serverService.getServer(name), HttpStatus.OK);
    }

    @GetMapping("/server/list")
    public ResponseEntity<List<Server>> listDevice() {
        return new ResponseEntity(serverService.listServer(), HttpStatus.OK);
    }

    @PutMapping("/server")
    ResponseEntity<Server> createServer(@RequestBody Server server) {
        return new ResponseEntity<>(serverService.updateServer(server), HttpStatus.OK);
    }
}
