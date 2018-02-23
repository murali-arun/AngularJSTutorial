package com.ang.rest;

import com.ang.Impl.RandomNumberServiceImpl;
import com.ang.service.RandomNumberService;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;


@Path("/random")
public class RestService {

    @GET
    @Produces(MediaType.TEXT_PLAIN)
    public String getRandomNumber()
    {
        RandomNumberService randomNumberService= new RandomNumberServiceImpl();
        System.out.println("CALLED HERE");
        return randomNumberService.RandomNumberGenerator().getRandomNumber()+"";
    }
}
