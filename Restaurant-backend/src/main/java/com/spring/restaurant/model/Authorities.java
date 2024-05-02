package com.spring.restaurant.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "authorities")
public class Authorities extends BaseEntity{


    @Column(name = "role_name")
    private String roleName;

    @ManyToMany(mappedBy = "authorities")
    private Set<User> users = new HashSet<>();


}
