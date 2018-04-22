import React from 'react'
import Link from 'gatsby-link'
import logo1 from '../static/Logos-01.png'

const Header = ({ siteTitle }) => (
  <div
    style={{
      //background: 'rebeccapurple',
      //marginBottom: '1.45rem',
      background: '#f5f5f5',
      marginBottom: '3rem',
      borderBottom: '2px solid #e6e6e6',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0, textAlign: 'center', fontSize: '18px' }}>
        <img style={{
            width:'200px',
            
        }}
             src={logo1}
             className="img img-responsive pull-left"
             alt="Groceristar logo" />
        <Link
          to="/"
          style={{
            color: 'black',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </div>
)

export default Header
