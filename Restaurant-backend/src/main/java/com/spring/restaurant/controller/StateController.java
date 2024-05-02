package com.spring.restaurant.controller;

import com.spring.restaurant.model.Country;
import com.spring.restaurant.model.State;
import com.spring.restaurant.service.CountryService;
import com.spring.restaurant.service.StateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
public class StateController {
    private StateService stateService;
    @Autowired
    public StateController(StateService stateService) {
        this.stateService = stateService;
    }

    @GetMapping("/states")
    public List<State> getStates(){
        return   stateService.getAllStates();
    }



    @GetMapping("/statescode")
    public List<State> getStatesByCode(@RequestParam String code){
        return stateService.getStatesByCountryCode(code);
    }

}
