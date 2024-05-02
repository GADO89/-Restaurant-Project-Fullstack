package com.spring.restaurant.model;


import com.fasterxml.jackson.annotation.JsonIgnore;
import javax.persistence.*;



import java.util.Set;

@Entity
@Table(name ="state")
public class State extends PublicData{


    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "country_id")
    private Country country;
}
