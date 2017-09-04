import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './Buisness.css';


const business = {
    imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
    name: 'MarginOtto Pizzeria',
    address: '1010 Paddington Way',
    city: 'Flavortown',
    state: 'NY',
    zipCode: '10101',
    category: 'Italian',
    rating: 4.5,
    reviewCount: 90
};
// The purpose of the <Business /> component is to represent how a business (a restaurant) in Ravenous will be formatted and styled
class Business extends Component {

    render(){

        return(
            <div className="Business">
                <div className="image-container">
                    <img src='https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg' alt=''/>
                </div>
                <h2>{business.name}</h2>
                <div className="Business-information">
                    <div className="Business-address">
                        <p>{business.address}</p>
                        <p>{business.city}</p>
                        <p>{business.state}, {business.zipCode}</p>
                    </div>
                    <div className="Business-reviews">
                        <h3>{business.category}</h3>
                        <h3 className="rating">Rating: {business.rating}/5</h3>
                        <p>Reviews: {business.reviewCount}</p>
                    </div>
                </div>
            </div>
        );
    }
};



export default Business;

