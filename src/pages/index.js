import React from 'react'
import { Link } from 'gatsby'

import SEO from '~/components/seo'
import ProductGrid from '~/components/ProductGrid'
import banner from '../images/banner2.png'


const IndexPage = () => (
  <div>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <img style={{position: "absolute", left: 0, width: "100vw", opacity: "0.5", filter: "brightness(0.6)", zIndex: "-1"}} src={banner} />

    <div style={{height: 260, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 48, marginBottom: 48, fontFamily: "Brandon Grotesque Light", color: "rgb(255,255,255)"}}>Butterflies</div>
    <ProductGrid />
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
