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
import logo1 from '../static/Logos-01.png'
import logo2 from '../static/Logos-04.png'
import groceryListImage from '../static/michelangelo-grocery-list.png'


const HomePage = () => {

	const a = data.features;
	// console.log(a)


let listItems = _.each(data.features, (i, feature) => (

	<Feature key="{i}" heading="{feature[0]}" content="{feature[1]}" img="fas fa-shopping-cart fa-2x" />

	)
);

let listItems2 = _.each(data.headings, (i, heading) => (

	<Feature key="{i}" heading="{heading[0]}" content="{heading[1]}" img="fas fa-shopping-cart fa-2x" />

	)
);

let listItems3 = _.each(data.footer, (i, footer) => (

	<Feature key="{i}" heading="{footer[0]}" content="{footer[1]}" img="fas fa-shopping-cart fa-2x" />

	)
);





 // <img src={logo1} className="img img-responsive" alt="Groceristar logo" />
 // <img src={logo2} className="img img-responsive" alt="Groceristar logo" /> 

 return (

  <div>

		<img src={groceryListImage} className="img img-responsive" alt="Michelangelo grocery list" />


  	{listItems}
		<hr />
		{listItems2}
		<hr />
		{listItems3}
		<hr />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>

    <h1>{a[1]}</h1>




  </div>
)

}


export default HomePage
