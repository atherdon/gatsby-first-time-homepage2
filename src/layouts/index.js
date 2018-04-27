import React     from 'react'
import PropTypes from 'prop-types'
import Helmet    from 'react-helmet'

import Media     from 'react-media'

import Menu      from '../components/Menu';
import Header    from '../components/Header'
import Sidebar   from '../components/sidebar'
import Footer    from '../components/Footer';

import './index.css'
import '../styles/layout-overide.css'

// import '../styles/stuff-from-other-project.css'

// <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
// <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico" />

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { charset: 'utf-8' },
        { name: 'description', content: 'GS' },
        { name: 'keywords', content: 'grocery list, shopping list template' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
        { name: 'theme-color', content: '#000000' }
      ]}
    >
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />
      <link href="https://fonts.googleapis.com/css?family=Poppins" rel="stylesheet" />

      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
      <script defer src="https://use.fontawesome.com/releases/v5.0.6/js/all.js"></script>
    </Helmet>

    <Menu />

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

      <Footer />

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
