import React from 'react'
import Link from 'gatsby-link'
//import logo from ''

const Feature = ({ feature }) => (
div className="col-md-3 col-xs-12 col-sm-12 col-lg-3 col-xl-3">
				<div className="feature-container">
							{ feature.img === "" ? <span></span> : <div className="icon-container"> <i className={feature.img}></i></div> }
						<p className="feature-heading">{feature.heading}</p>
						<p className="feature-content">{this.props.content}</p>
					</div>
				</div>
);
export default Feature
