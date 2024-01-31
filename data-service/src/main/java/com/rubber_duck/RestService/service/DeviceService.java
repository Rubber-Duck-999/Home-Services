package com.rubber_duck.RestService.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rubber_duck.RestService.model.Device;
import com.rubber_duck.RestService.model.History;
import com.rubber_duck.RestService.repository.DeviceRepository;
import com.rubber_duck.RestService.repository.HistoryRepository;

@Service
public class DeviceService {

    @Autowired
    private DeviceRepository deviceRepository;

    @Autowired
    private HistoryRepository historyRepository;

    public String createDevice(Device device) {
        device.setCreatedBy("user");
        return deviceRepository.save(device).getId();
    }

    public Device getDevice(String name) {
        return deviceRepository.findAllByName(name);
    }

    public List<Device> listDevice() {
        List<Device> devices = deviceRepository.findAll();
        for (Device device:devices) {
            List<History> histories = historyRepository.findAll();
            device.setHistory(histories);
        }
        return devices;
    }
}
