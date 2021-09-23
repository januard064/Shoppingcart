import React from "react";
import { useCart } from 'react-use-cart';
import { Card, CardBody } from "reactstrap";

const Carts = () => {
    const { 
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
         } = useCart();
    if(isEmpty) return <h1 className="text-center">Your Cart is Empty</h1>
    return(
        <section className="container">
            <div className="judul">
                <h4>Shopping Cart</h4>
            </div>
            <div className="row justify-content-center">
                <div className="row">
                    <div class="col-8">
                        <div className="card shadow p-3 mb-5 bg-body rounded">
                        <h5>Cart ({totalItems} items)</h5>
                             {items.map((item, index)=>{
                                 return(
                                    <div className="row">
                                        <div className="col-4">
                                            <img src={item.img} style={{height:'200px',marginLeft:'20%', marginTop:'5%'}} class="img-fluid rounded-start" alt={item.name}/>
                                            </div>
                                            <div class="col-md-8">
                                            <div class="card-body">
                                                <div className="row align-items-start">
                                                    <div className="col-8"><h5 class="card-title">{item.name}</h5></div>
                                                    <div className="col-4">
                                                        <div className="btn-group" role="group" >
                                                            <button type="button" class="btn btn-outline-dark"
                                                                onClick ={() => updateItemQuantity(item.id, item.quantity-1)}
                                                                >-</button>
                                                            <button type="button" disabled class="btn btn-outline-dark"
                                                            >  {item.quantity}</button>
                                                            <button type="button" class="btn btn-outline-dark"
                                                                onClick ={() => updateItemQuantity(item.id, item.quantity+1)}
                                                            >+</button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <p class="card-text">{item.kode}</p>
                                                <p class="card-text">SIZE : {item.size}</p>
                                                <p class="card-text">COLOR : {item.color}</p>
                                                <div className="row aksi">
                                                    <div className ="col-5">
                                                    <button className="btn"
                                                        onClick={() => removeItem(item.id)}
                                                        ><i class="fa fa-trash" aria-hidden="true"></i>REMOVE ITEM</button>
                                                    </div>
                                                    <div className ="col-5">
                                                        <button className="btn "><i class="fa fa-heart" aria-hidden="true"></i>MOVE TO WISH LIST</button>
                                                    </div>
                                                    <div className ="col-2">
                                                        <h5>${item.price}</h5>
                                                    </div>      
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                       
                                        )
                                    })}
                      </div>  
                    </div>
                    <div class="col-4">
                        <div className="card shadow p-3 mb-5 bg-body rounded">
                            <h5>The total amount of</h5>
                                <div className="row">
                                    <div className="col-8">
                                        Temporary Amount
                                    </div>
                                    <div className="col-4">
                                        ${cartTotal}
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-8">
                                        Shipping
                                    </div>
                                    <div className="col-4">
                                        Gratis
                                    </div>
                                </div>
                                    <hr></hr>
                            
                                <div className="row">
                                    <div className="col-8">
                                       <h6> The total amount of <br></br>(including VAT) </h6>
                                    </div>
                                    <div className="col-4">
                                            ${cartTotal}
                                    </div>
                                </div>
                                <div className="col-12">
                                    <button type="button" className="btn btn-primary check">GO TO CHECKOUT</button>
                                </div>
                            </div>
                        <div className="card shadow p-3 mb-5 bg-body rounded">
                            Add a discount code(optional)
                        </div>
                    </div>
                </div>
                
                <div>

                </div>
            </div>
        </section>
    );
};

export default Carts;