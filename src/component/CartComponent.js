import React, {Component} from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle} from 'reactstrap';
import { useCart } from 'react-use-cart'; 


function CartComponent(props){
    const { addItem } = useCart();

    const cloth = props.clothes.map((cloth)=>{
        return(
            <div className="col-12 col-md-4" key={cloth.id}>
                {/* <RenderCart item={cloth} /> */}
                <Card>
                    <CardImg width="20px" height="250px" src={cloth.img} alt={cloth.name} />
                    <CardBody>
                       <div className="row">
                           <div className="col-6">
                             <h4>{cloth.name}</h4>
                           </div>
                           <div className="col-6">
                            <button className="btn btn-success" 
                                onClick= {() =>addItem(cloth)}>ADD TO CART</button>
                           </div>
                        
                        </div>
                    </CardBody>
                </Card>
            </div>
        );
    })

    return(
        <div className="container">
             <div className="row align-items-start">
                {cloth}
            </div>
           
        </div>
    )
}

export default CartComponent;