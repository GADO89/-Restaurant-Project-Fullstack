package com.spring.restaurant.controller;

import com.spring.restaurant.dto.PurchaseRequest;
import com.spring.restaurant.dto.PurchaseResponse;
import com.spring.restaurant.service.PurchaseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping("/api/buy")
public class PurchaseController {

    private PurchaseService purchaseService;

    @Autowired
    public PurchaseController(PurchaseService purchaseService) {
        this.purchaseService = purchaseService;
    }
    @PostMapping("/purchase")
    public PurchaseResponse addRequestOrder(@RequestBody PurchaseRequest purchaseRequest){
        System.out.println(purchaseRequest.getItems().size());
       return purchaseService.addRequestOrder(purchaseRequest);
    }
}
