import React from 'react'
import Link  from 'gatsby-link'
import _     from 'underscore'

import data from '../static/content-part-one'
// console.log(data);
// data.features
// data.menu
// data.headings
// data.footer
const HomePage = () => {

	const a = data.features;
	console.log(a)

	// _.each(data.features, (feature) => {
 //    	console.log(feature);
 //    	// return (
 //    	// <h1>{feature[0]}</h1>
 //    	// <h2>{feature[1]}</h2>
 //    	// );
 //    })

}


// (
//   <div>
//     <h1>Hi from the second page</h1>
//     <p>Welcome to page 2</p>
//     <Link to="/">Go back to the homepage</Link>

//     {_.each(data.features, (feature) => {
//     	console.log(feature);
//     	// return (
//     	// <h1>{feature[0]}</h1>
//     	// <h2>{feature[1]}</h2>
//     	// );
//     })
// }




//   </div>
// )

export default HomePage
