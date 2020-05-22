import React from 'react'
import Image from 'gatsby-image'
import styled from '@emotion/styled'
import { Global, css } from "@emotion/core"

import "./styles.css"

export const breakpoints = {
  s: 576,
  m: 768,
  l: 992,
  xl: 1200,
}

export const GlobalStyle = props => (
  <Global
    {...props}
    styles={css`
      body {
        margin: 0;
        font-family: 'Brandon Grotesque Regular';
      }
      html {
        font-family: sans-serif;
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
      }
    `}
  />
)

/* #### Generated By: http://www.cufonfonts.com #### */




// @font-face {
// font-family: 'Brandon Grotesque Regular Italic';
// font-style: normal;
// font-weight: normal;
// src: local('Brandon Grotesque Regular Italic'), url('Brandon_reg_it.woff') format('woff');
// }


// @font-face {
// font-family: 'Brandon Grotesque Thin';
// font-style: normal;
// font-weight: normal;
// src: local('Brandon Grotesque Thin'), url('Brandon_thin.woff') format('woff');
// }


// @font-face {
// font-family: 'Brandon Grotesque Thin Italic';
// font-style: normal;
// font-weight: normal;
// src: local('Brandon Grotesque Thin Italic'), url('Brandon_thin_it.woff') format('woff');
// }


// @font-face {
// font-family: 'Brandon Grotesque Light';
// font-style: normal;
// font-weight: normal;
// src: local('Brandon Grotesque Light'), url('Brandon_light.woff') format('woff');
// }


// @font-face {
// font-family: 'Brandon Grotesque Light Italic';
// font-style: normal;
// font-weight: normal;
// src: local('Brandon Grotesque Light Italic'), url('Brandon_light_it.woff') format('woff');
// }


// @font-face {
// font-family: 'Brandon Grotesque Medium';
// font-style: normal;
// font-weight: normal;
// src: local('Brandon Grotesque Medium'), url('Brandon_med.woff') format('woff');
// }


// @font-face {
// font-family: 'Brandon Grotesque Medium Italic';
// font-style: normal;
// font-weight: normal;
// src: local('Brandon Grotesque Medium Italic'), url('Brandon_med_it.woff') format('woff');
// }


// @font-face {
// font-family: 'Brandon Grotesque Bold';
// font-style: normal;
// font-weight: normal;
// src: local('Brandon Grotesque Bold'), url('Brandon_bld.woff') format('woff');
// }


// @font-face {
// font-family: 'Brandon Grotesque Bold Italic';
// font-style: normal;
// font-weight: normal;
// src: local('Brandon Grotesque Bold Italic'), url('Brandon_bld_it.woff') format('woff');
// }


// @font-face {
// font-family: 'Brandon Grotesque Black';
// font-style: normal;
// font-weight: normal;
// src: local('Brandon Grotesque Black'), url('Brandon_blk.woff') format('woff');
// }


// @font-face {
// font-family: 'Brandon Grotesque Black Italic';
// font-style: normal;
// font-weight: normal;
// src: local('Brandon Grotesque Black Italic'), url('Brandon_blk_it.woff') format('woff');
// }


export const Img = styled(Image)`
  max-width: 100%;
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
`

export const Container = styled.div`
  margin: 0 auto;
`

export const TwoColumnGrid = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: ${breakpoints.l}px){
    display: block;
  }
`

export const GridLeft = styled.div`
  margin-top: 30px;
  display: flex;
  width: 62%;
`

export const GridRight = styled.div`
  margin-top: 50px;
  width: 38%;
`

export const MainContent = styled.main`
  margin-top: 80px;
  margin-bottom: 40px;

  @media (max-width: ${breakpoints.l}px){
    margin-top: 40px;
    margin-bottom: 20px;
  }
`