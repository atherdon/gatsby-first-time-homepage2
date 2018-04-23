import React        from 'react'
import PropTypes    from 'prop-types'
import Helmet       from 'react-helmet'

import Media        from 'react-media'


import SubHeader    from '../components/sub-header';
import Body         from '../components/Body';

import Feature      from '../components/feature';
// import { Carousel } from 'react-bootstrap';

import Bottom       from '../components/bottom';

import Social       from '../components/social';

import sectionCarousel       from '../components/sectionCarousel';

import Featureslist from '../components/featureslist';


import Header    from '../components/Header'
//import Sidebar   from '../components/sidebar'

import './index.css'
import '../styles/stuff-from-other-project.css'

const Layout = ({ children, data }) => (
      <div>
      <div className="body">

      {data.site.siteMetadata.title}

      <Header / >

      <Body />

      </div>
      <div className="sectiontwo">
        <Feature img="fas fa-shopping-cart fa-2x" heading="Organize your shopping experience" content="Do you want to spend less? Do you want to reduce your impulse purchases? Grocery lists can help you. You'll buy only foods that you need."/>
        <Feature img="fas fa-mobile-alt fa-2x" heading="Mobile-oriented design (completed by Bootstrap)" content="You can manage all data from your phone. You always carry your smartphone, instead of paper lists. Your lists on your phone, period."/>
        <Feature img="fas fa-cogs fa-2x" heading="Customization" content="This is your own lists. You can do anything."/>
        </div>
        <div className="sectiontwo">
        <Feature img="fas fa-cogs fa-2x" heading="Quick access (coming soon)" content="Search ingredients in database, at your lists"/>
        <Feature img="fas fa-cogs fa-2x" heading="Favourite ingredients (Coming soon)" content="Save your favorite ingredients for fast access later"/>
        <Feature img="fas fa-cogs fa-2x" heading="Plan your family budget (coming soon)" content="You can calculate and plan your purchases. Control how much do you spend on this shopping session"/>
        </div>

        <sectionCarousel />

  // <div className="row">
  //   <Bottom / >
  // < /div>

  // <div className="outer-container container">
  //   <Featureslist content="Instant Handles (coming soon)" />
  //   <Featureslist content="Save and share your lists (coming soon)" />
  //   <Featureslist content="Plan your family budget (coming soon)" />
  //   <Featureslist content="Improve your health and live longer" />
  //   <Featureslist content="Save time by cloning Ultimate Template" />
  // </div>

  <Social />

  </div>
);

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery2 {
    site {
      siteMetadata {
        title
      }
    }
  }
`
