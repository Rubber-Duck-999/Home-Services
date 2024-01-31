package com.rubber_duck.RestService.service;

import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rubber_duck.RestService.model.Network;
import com.rubber_duck.RestService.repository.NetworkRepository;

@Service
public class NetworkService {

    @Autowired
    private NetworkRepository networkRepository;

    public List<Network> listNetwork(Integer days) {
        Instant now = Instant.now();
        Instant value = now.minus(days, ChronoUnit.DAYS);
        return networkRepository.findByDays(value);
    }

    public Network createNetwork(Double download, Double upload) {
        Network network = new Network();
        network.setId(UUID.randomUUID().toString());
        network.setDownload(download);
        network.setCreated(Instant.now());
        network.setUpload(upload);
        return networkRepository.save(network);
    }
}
