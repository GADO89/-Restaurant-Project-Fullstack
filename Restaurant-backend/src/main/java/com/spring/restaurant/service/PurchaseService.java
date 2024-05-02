package com.spring.restaurant.service;

import com.spring.restaurant.dto.PurchaseRequest;
import com.spring.restaurant.dto.PurchaseResponse;
import org.springframework.stereotype.Service;

public interface PurchaseService {
    public PurchaseResponse addRequestOrder(PurchaseRequest purchases);
}
