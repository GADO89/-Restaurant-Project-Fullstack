package com.spring.restaurant.model;

import javax.persistence.*;

import lombok.Data;


@Data
@MappedSuperclass
public class PublicData extends CategoryOrder{


    @Column(name = "name")
    private String name;  // Egypt
}
