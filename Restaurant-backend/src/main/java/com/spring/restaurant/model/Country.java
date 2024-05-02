package com.spring.restaurant.model;


import com.fasterxml.jackson.annotation.JsonIgnore;
import javax.persistence.*;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


import java.util.Set;

@Entity
@Table(name = "country")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Country extends PublicData {

//    @Column(name = "categorylogo")
//    private String logo;

    @Column(name = "code")
    private String code; // EG

    @JsonIgnore
    @OneToMany(mappedBy = "country")
    private Set<State> states;
}