package com.spring.restaurant.model;

import javax.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;



import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "request_order")
public class RequestOrder extends CategoryOrder{

    @Column(name = "code")
    private String code;

    @Column(name = "note")
    @Lob
    private String note;

    @Column(name = "total_price")
    private int totalPrice;

    @Column(name = "total_quantity")
    private int totalQuantity;

    @OneToMany(cascade = CascadeType.ALL,mappedBy = "requestOrder")
    private List<Item> items=new ArrayList<>();

    @ManyToOne
    @JoinColumn(name = "client_id")
    private Client client=new Client();

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "to_address_id", referencedColumnName = "id")
    private Address toAddress=new Address();

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "from_address_id", referencedColumnName = "id")
    private Address fromAddress=new Address();



    public void addItem(Item item) {
        items.add(item);
        item.setRequestOrder(this);
    }
}
