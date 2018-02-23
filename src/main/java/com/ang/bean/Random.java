package com.ang.bean;

import javax.xml.bind.annotation.XmlRootElement;


@XmlRootElement
public class Random {
    int randomNumber;

    public int getRandomNumber() {
        return randomNumber;
    }

    public void setRandomNumber(int randomNumber) {
        this.randomNumber = randomNumber;
    }

    @Override
    public String toString() {
        return "Random{" +
                "randomNumber=" + randomNumber +
                '}';
    }
}
