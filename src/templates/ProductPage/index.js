import React, { useState } from 'react'
import { graphql } from 'gatsby'

import SEO from '~/components/seo'
import ProductForm from '~/components/ProductForm'
import {
  Img,
  Container,
  TwoColumnGrid,
  GridLeft,
  GridRight,
} from '~/utils/styles'
import {
  ProductTitle,
  ProductDescription
} from './styles'

const ProductPage = ({ data }) => {
  const [ activeImage, setActiveImage ] = useState()
  const product = data.shopifyProduct

  const images = product.images.map(image => (<Img
    fluid={image.localFile.childImageSharp.fluid}
    key={image.id}
    alt={product.title}
  />))

  const imageThumbnails = images.map((image, i) => <div onClick={() => handleClick(i)}>{images[i]}</div>)

  function handleClick(i) {
    setActiveImage(images[i])
    // console.log(e.target);
  }
  return (
    <>
      <SEO title={product.title} description={product.description} />
      <Container>
        <TwoColumnGrid>
          <GridLeft>
            {images[1] && <div style={{width: "16.67%"}}>
              {imageThumbnails}
            </div>}
            <div style={{width: "83.33%", padding: "0px 40px 0px 20px", boxSizing: "border-box"}}>
              {activeImage ? activeImage : images[0]}
            </div>
          </GridLeft>
          <GridRight>
            <ProductTitle style={{textAlign: "center"}}>{product.title}</ProductTitle>
            <ProductForm product={product} />
            <br /><br />
            <div style={{fontSize: 13, textAlign: "center"}}>
              <span style={{fontWeight: 700}}>Our Happiness Promise</span>
              <br />We stand behind our products. If you don’t love it, <br />exchanges and returns are free for 60 days. 
            </div>
          </GridRight>
        </TwoColumnGrid>
        <ProductDescription
              dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
            />
      </Container>
    </>
  )
}

export const query = graphql`
  query($handle: String!) {
    shopifyProduct(handle: { eq: $handle }) {
      id
      title
      handle
      productType
      description
      descriptionHtml
      shopifyId
      options {
        id
        name
        values
      }
      variants {
        id
        title
        price
        availableForSale
        shopifyId
        selectedOptions {
          name
          value
        }
      }
      priceRange {
        minVariantPrice {
          amount
          currencyCode
        }
        maxVariantPrice {
          amount
          currencyCode
        }
      }
      images {
        originalSrc
        id
        localFile {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default ProductPage
