package com.spring.restaurant.service;

import com.spring.restaurant.deo.CountryRepository;
import com.spring.restaurant.deo.OrderRepository;
import com.spring.restaurant.model.Category;
import com.spring.restaurant.model.Country;
import com.spring.restaurant.model.Order;
import com.spring.restaurant.model.State;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CountryService {
    private CountryRepository  countryRepository;
    @Autowired
    public CountryService(CountryRepository countryRepository) {
        this.countryRepository = countryRepository;
    }

    public List<Country> getAllCountry(){
        return   countryRepository.findAll();
    }


}
