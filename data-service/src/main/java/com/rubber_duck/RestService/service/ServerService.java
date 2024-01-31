package com.rubber_duck.RestService.service;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rubber_duck.RestService.model.Server;
import com.rubber_duck.RestService.repository.ServerRepository;

@Service
public class ServerService {

    @Autowired
    private ServerRepository serverRepository;


    public Server updateServer(Server server) {
        Server currentServer = serverRepository.findAllByName(server.getName());
        return serverRepository.save(currentServer);
    }

    public Server getServer(String name) {
        return serverRepository.findAllByName(name);
    }

    public List<Server> listServer() {
        List<Server> servers = serverRepository.findAll();
        return servers;
    }
}
