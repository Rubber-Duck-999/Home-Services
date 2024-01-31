package com.rubber_duck.RestService.service;

import java.io.IOException;
import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.rubber_duck.RestService.model.Motion;
import com.rubber_duck.RestService.repository.MotionRepository;
import com.rubber_duck.RestService.util.ImageUtil;

@Service
public class MotionService {

    @Autowired
    private MotionRepository motionRepository;

    public void createMotion(MultipartFile file) {
        Motion motion = new Motion();
        try {
            motion.setDetectedTime(Instant.now());
            motion.setId(UUID.randomUUID().toString());
            motion.setImage(ImageUtil.compressImage(file.getBytes()));
            motion.setType("png");
            motionRepository.save(motion);
        } catch (IOException error) {
            System.out.println("IOException found: " + error);
        }
    }

    public List<Motion> listMotion(Integer days) {
        Instant now = Instant.now();
        Instant value = now.minus(days, ChronoUnit.DAYS);
        List<Motion> motions = motionRepository.findByDays(value);
        for (Motion motion:motions) {
            motion.setImage(new byte[0]);
        }
        return motions;
    }

    public byte[] getMotion(String id) {
        Motion motion = motionRepository.findById(id).orElse(new Motion());
        if (motion.getImage().length > 0) {
            byte[] bytes = ImageUtil.decompressImage(motion.getImage());
            return bytes;
        }
        return new byte[0];
    }
}
