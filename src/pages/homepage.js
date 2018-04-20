import React from 'react'
import Link  from 'gatsby-link'
import _     from 'underscore'

import data from '../static/content-part-one'
import Feature      from '../components/feature';
// console.log(data);
// data.features
// data.menu
// data.headings
// data.footer



const HomePage = () => {

	const a = data.features;
	console.log(a)

	// let pidors = _.each(a, (pidor) => (
 //    	<li>{pidor[0]}</li>
 //    	<li>{pidor[1]}</li>
	// ));
//     const numbers = [1, 2, 3, 4, 5];
let listItems = _.each(data.features, (i, feature) => (
	
	<Feature key="{i}" heading="{feature[0]}" content="{feature[1]}" img="fas fa-shopping-cart fa-2x" />
	
	)
);
let listItems2 = _.each(data.headings, (i, feature) => (
	
	<Feature key="{i}" heading="{feature[0]}" content="{feature[1]}" img="fas fa-shopping-cart fa-2x" />
	
	)
);
let listItems3 = _.each(data.footer, (i, feature) => (
	
	<Feature key="{i}" heading="{feature[0]}" content="{feature[1]}" img="fas fa-shopping-cart fa-2x" />
	
	)
);







 return (
 	
  <div>
  	{listItems}
  	
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>

    <h1>{a[1]}</h1>




  </div>
)

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
