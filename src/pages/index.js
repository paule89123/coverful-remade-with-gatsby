import React from 'react'
import { Link } from 'gatsby'

import SEO from '~/components/seo'
import ProductGrid from '~/components/ProductGrid'
import banner from '../images/banner.jpeg'


const IndexPage = () => (
  <>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <img style={{position: "absolute", left: 0}} src={banner} />
    <div style={{height: 265}}></div>
    <div style={{height: 150}}></div>
    <div style={{textAlign: "center"}}>Surreal</div>
    <ProductGrid />
    <Link to="/page-2/">Go to page 2</Link>
  </>
)

export default IndexPage
