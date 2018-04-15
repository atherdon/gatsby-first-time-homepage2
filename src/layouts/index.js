import React     from 'react'
import PropTypes from 'prop-types'
import Helmet    from 'react-helmet'

import Media     from 'react-media'

import Header    from '../components/header'
import Sidebar   from '../components/sidebar'

import './index.css'
import '../styles/layout-overide.css'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'GS' },
        { name: 'keywords', content: 'grocery list, shopping list template' },
      ]}
    />
    <Header siteTitle={data.site.siteMetadata.title} />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: '100%'
        // padding: '0px 1.0875rem 1.45rem',
        // paddingTop: 0,
      }}
    >

      <Media query={{ maxWidth: 848 }}>
        
      
        {matches =>
          matches ? (
            <div style={{ 
              margin: "0 auto",
              maxWidth: 980,
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              height: "100%",
              padding: "25px"
            }}>
              <div style={{ flex: 1 }}> {children()}</div>
            </div>
            ) 
          : (
            <div style={{ 
              margin: "0 auto",
              maxWidth: 980,
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              height: "100%",
              padding: "25px"
            }}>
              <div style={{ flex: 2.5, paddingRight: '30px' }}>
               {children()}
              </div>
              <div style={{ flex: 1 }}>
                <Sidebar
                  title="Title" description="This is text for tutorial" 
                />
                <Sidebar
                  title="About title" description="THIs is long descrption that we'll use for test our media queries" 
                  />
              </div>
            </div>
            )
        }

      </Media>
      

    </div>
  </div>
);

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
