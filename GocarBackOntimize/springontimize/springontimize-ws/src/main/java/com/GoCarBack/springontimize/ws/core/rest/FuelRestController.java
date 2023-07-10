package com.GoCarBack.springontimize.ws.core.rest;

import com.GoCarBack.springontimize.api.core.service.IFuelService;
import com.ontimize.jee.server.rest.ORestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/fuels")
public class FuelRestController extends ORestController<IFuelService> {

    @Autowired
    private IFuelService fuelService;

    @Override
    public IFuelService getService() {return this.fuelService;}

}

