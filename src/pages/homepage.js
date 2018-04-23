import React from 'react'
import Link  from 'gatsby-link'
import _     from 'underscore'

import data from '../assets/json/content-part-one'
// import data from '../assets/json/content-part-two'

import Feature from '../components/Feature';
import Body    from '../components/Body';

// console.log(data);
// data.features
// data.menu
// data.headings
// data.footer


const HomePage = () => {

	const a = data.features;
	// console.log(a)


	let listItems = _.each(data.features, (i, feature) => (
			<Feature key="{i}" heading="{feature[0]}" content="{feature[1]}" img="fas fa-shopping-cart fa-2x" />
		));


	listItems = (
  <div className="sectiontwo">
    {listItems}
  </div>
);

	let listItems2 = _.each(data.headings, (i, heading) => (
		<Feature key="{i}" heading="{heading[0]}" content="{heading[1]}" img="fas fa-shopping-cart fa-2x" />
		));

	let listItems3 = _.each(data.footer, (i, footer) => (

		<Feature key="{i}" heading="{footer[0]}" content="{footer[1]}" img="fas fa-shopping-cart fa-2x" />

		));
 // <Feature img="fas fa-shopping-cart fa-2x" heading="Organize your shopping experience" content="Do you want to spend less? Do you want to reduce your impulse purchases? Grocery lists can help you. You'll buy only foods that you need."/>
 // <Feature img="fas fa-mobile-alt fa-2x" heading="Mobile-oriented design (completed by Bootstrap)" content="You can manage all data from your phone. You always carry your smartphone, instead of paper lists. Your lists on your phone, period."/>
 // <Feature img="fas fa-cogs fa-2x" heading="Customization" content="This is your own lists. You can do anything."/>

 return (

  <div>
		<div className="body">
			<Body />
		</div>
		{listItems}
	</div>




)

}


export default HomePage
