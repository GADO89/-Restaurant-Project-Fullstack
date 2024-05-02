package com.spring.restaurant.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import javax.persistence.*;

import com.sun.istack.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "orders")
public class Order extends PublicData{

    @Column(name = "price")
    private int price;
    @Column(name = "image")
    private String img;

    @Column(name = "description")
    @NotNull
    @Lob
    private String description;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "id_Category")
    private Category category;

}