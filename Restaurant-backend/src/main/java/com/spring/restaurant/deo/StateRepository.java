package com.spring.restaurant.deo;

import com.spring.restaurant.model.State;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface StateRepository extends JpaRepository<State,Long> {

    //@Query("select count (id) from  Order where name LIKE %?1%")
    //@Query("select count (id) from  Order where category.id = ?1")
    //@Query("SELECT o.states FROM Country o WHERE o.code=:code")
//    public List<State> getByCountryCode(String code);
    public List<State> findByCountryCode(String Code);
}