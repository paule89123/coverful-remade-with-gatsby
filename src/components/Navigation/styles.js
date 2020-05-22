import styled from '@emotion/styled'
import { Link } from 'gatsby'

import { breakpoints } from '../../utils/styles'

export const Wrapper = styled.div`
  height: 4.1rem;
  width: 100%;
  background: white;
  display: flex;
  justify-content: center;
  box-shadow: 0px 4px 4px -4px rgb(190,190,190);
  position: sticky;
  top: 0px;
  z-index: 1;
`

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  padding: 0 0rem;
  height: 4.1rem;
  margin: 0 auto;
  width: 100%;
  max-width: 1120px;
  position: sticky;
  top: 0px;
  z-index: 1;
`

export const Logo = styled(Link)`
  color: rgb(43, 20, 83);
  text-transform: uppercase;
  text-decoration: none;
  font-size: 1.25rem;
  letter-spacing: 2.5px;
  font-weight: bold;
  padding-right: 32px;
  margin-left: -2px;

  @media (max-width: ${breakpoints.s}px){
    font-size: 1rem
  }
`

export const MenuLink = styled(Link)`
  color: rgb(43, 20, 83);
  text-decoration: none;
  font-size: 0.95rem;
  letter-spacing: 1px;
  font-weight: bold;
  padding-right: 32px;

  @media (max-width: ${breakpoints.s}px){
    font-size: 1rem
  }
`

export const CartCounter = styled.div`
  position: absolute;
  margin-top: 1px;
  margin-left: 2px;
  text-align: center;
  color: white;
  font-size: 13px;
  z-index: 20;
`

    
     
        
          
            
              