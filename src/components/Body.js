import React from 'react'
import Link  from 'gatsby-link'
import groceryListImage from '../assets/images/michelangelo-grocery-list.png'

const Body = ({  }) => (
  <div className="divtwo">
    <div className="heading">
      <p> Organize your shopping <br/> experience</p>
    </div>
    <div className="subheading">
      <h2>
      <small> This is Michelangelo Grocery List. Maybe we can make it better?</small>
      </h2>
    </div>
    <div className="button">
      <button type="button" className="btn btn-spl btn-primary btn-lg">
        <i className="fab fa-github"></i>
        Get Started Now
      </button>
    </div>

    <div className="image-container">
      <img src={groceryListImage} className="img img-responsive" alt="Michelangelo grocery list" />
    </div>
  </div>
);

export default Body
