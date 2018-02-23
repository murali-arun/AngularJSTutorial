package com.ang.Impl;

import com.ang.bean.Random;
import com.ang.service.RandomNumberService;


public class RandomNumberServiceImpl implements RandomNumberService{

    public Random RandomNumberGenerator() {
        double random=0;
        random=Math.floor(Math.random() * 6) + 1;
        Random random1= new Random();
        random1.setRandomNumber((int)random);
        return random1;
    }
}
