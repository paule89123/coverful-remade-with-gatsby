import React, { useContext } from 'react'
import reduce from 'lodash/reduce'
import PropTypes from 'prop-types'
import downArrow from './down-arrow.png'
import whiteBag from './white-bag.svg'
import blackBag from './black-bag.svg'


import StoreContext from '~/context/StoreContext'
import {
	CartCounter, 
	Container,
	Logo,
	MenuLink,
	Wrapper
} from './styles'

const useQuantity = () => {
	const { store: {checkout} } = useContext(StoreContext)
	const items = checkout ? checkout.lineItems : []
	const total = reduce(items, (acc, item) => acc + item.quantity, 0)
	return [total !== 0, total]
}

const Navigation = ({ siteTitle }) => {
  const [hasItems, quantity] = useQuantity()

	return(
		<>
			<div style={{height: "2.535rem", backgroundColor: "rgb(239, 237, 243)", color: "rgb(43, 20, 83)", display: "flex", justifyContent: "center", alignItems: "center", fontSize: 17}}>Enjoy free shipping on all UK orders! Shipping to rest of the world: £2.99</div>
			<Wrapper>
				<Container>
					<div>
						<Logo to='/'>
							{siteTitle}
						</Logo>
						<MenuLink to='/cart'>
							SHOP
							<img alt="" style={{height: 12, position: "relative", top: 1, left: 1}} src={downArrow} />
						</MenuLink>
						<MenuLink to='/cart'>
							ABOUT US
						</MenuLink>
					</div>
					<MenuLink style={{position: "relative", display: "flex", justifyContent: "center", height: "100%", alignItems: "center", paddingRight: 0, width: 22}} to='/cart'>
						<img alt="basket" style={{height: 22, position: "absolute", marginLeft: 2}} src={hasItems ? blackBag : whiteBag} />
						{hasItems && <CartCounter>{quantity}</CartCounter>}
					</MenuLink>
				</Container>
			</Wrapper>
		</>
	)
}

Navigation.propTypes = {
	siteTitle: PropTypes.string,
}

Navigation.defaultProps = {
	siteTitle: ``,
}

export default Navigation
