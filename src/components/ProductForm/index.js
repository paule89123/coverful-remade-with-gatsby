import React, { useState, useContext, useEffect, useCallback } from 'react'
import find from 'lodash/find'
import isEqual from 'lodash/isEqual'
import PropTypes from 'prop-types'

import StoreContext from '~/context/StoreContext'

const ProductForm = ({ product }) => {
  const {
    options,
    variants,
    variants: [initialVariant],
    priceRange: { minVariantPrice },
  } = product
  const [variant, setVariant] = useState({ ...initialVariant })
  const [quantity, setQuantity] = useState(1)
  const {
    addVariantToCart,
    store: { client, adding },
  } = useContext(StoreContext)

  const productVariant =
    client.product.helpers.variantForOptions(product, variant) || variant
  const [available, setAvailable] = useState(productVariant.availableForSale)

  const checkAvailability = useCallback(
    productId => {
      client.product.fetch(productId).then(fetchedProduct => {
        // this checks the currently selected variant for availability
        const result = fetchedProduct.variants.filter(
          variant => variant.id === productVariant.shopifyId
        )
        if (result.length > 0) {
          setAvailable(result[0].available)
        }
      })
    },
    [client.product, productVariant.shopifyId, variants]
  )

  useEffect(() => {
    checkAvailability(product.shopifyId)
  }, [productVariant, checkAvailability, product.shopifyId])

  const handleQuantityChange = ({ target }) => {
    setQuantity(target.value)
  }

  const handleOptionChange = (optionIndex, { target }) => {
    const { value } = target
    const currentOptions = [...variant.selectedOptions]

    currentOptions[optionIndex] = {
      ...currentOptions[optionIndex],
      value,
    }

    const selectedVariant = find(variants, ({ selectedOptions }) =>
      isEqual(currentOptions, selectedOptions)
    )

    setVariant({ ...selectedVariant })
  }

  const handleAddToCart = () => {
    addVariantToCart(productVariant.shopifyId, quantity)
  }

  /* 
  Using this in conjunction with a select input for variants 
  can cause a bug where the buy button is disabled, this 
  happens when only one variant is available and it's not the
  first one in the dropdown list. I didn't feel like putting 
  in time to fix this since its an edge case and most people
  wouldn't want to use dropdown styled selector anyways - 
  at least if the have a sense for good design lol.
  */
  const checkDisabled = (name, value) => {
    const match = find(variants, {
      selectedOptions: [
        {
          name: name,
          value: value,
        },
      ],
    })
    if (match === undefined) return true
    if (match.availableForSale === true) return false
    return true
  }

  const price = Intl.NumberFormat(undefined, {
    currency: minVariantPrice.currencyCode,
    minimumFractionDigits: 2,
    style: 'currency',
  }).format(variant.price)

  function handleClick(arg) {
    if (arg === "increase") {
      setQuantity(prevState => prevState + 1)
    }
    if (arg === "decrease" && quantity > 0) {
      setQuantity(prevState => prevState - 1)
    }
  }

  return (
    <>
      <div
        style={{
          fontSize: 16,
          opacity: "0.6",
          textAlign: "center"
        }}
      >{price}</div>
      <br />
      <div className="pastel" style={{textAlign: "center", padding: 16, lineHeight: "1.4"}}>
        <span style={{fontFamily: "AvenirBold"}}>Just for you:</span>
        <br />Buy 3 cushion covers, save £10
      </div>
      <br />

      {options.map(({ id, name, values }, index) => (
        <React.Fragment key={id}>
          <label htmlFor={name}>{name} </label>
          <select
            name={name}
            key={id}
            onChange={event => handleOptionChange(index, event)}
          >
            {values.map(value => (
              <option
                value={value}
                key={`${name}-${value}`}
                disabled={checkDisabled(name, value)}
              >
                {value}
              </option>
            ))}
          </select>
          <br />
        </React.Fragment>
      ))}

      <div style={{display: "flex", justifyContent: "space-between"}}>
          <input
            aria-label="quantity"
            type="number"
            id="quantity"
            name="quantity"
            min="1"
            step="1"
            onChange={handleQuantityChange}
            value={quantity}
            style={{
              boxSizing: "border-box",
              position: "absolute",
              padding: "16px 0px",
              marginLeft: 4,
              marginTop: 2,
              color: "rgb(38,38,38)",
              border: "none",
              width: 188,
              fontSize: 13,
              textAlign: "center",
              fontWeight: "500"
            }}
          />
          <div style={{position: "relative", border: "1px solid rgb(38,38,38)", width: "48%", height: 50, display: "flex", alignItems: "center"}}>
              <div style={{cursor: "pointer", position: "relative", width: "50%", textAlign: "center", top: 3, right: 3}} onClick={() => handleClick("decrease")}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="#2B1453" fill-rule="evenodd" clip-rule="evenodd" d="M7 13H17V11H7V13Z"></path></svg></div>
              <div style={{cursor: "pointer", position: "relative", width: "50%", textAlign: "center", top: 3}} onClick={() => handleClick("increase")}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.2496 12.7494L7 12.7454L7.001 11.2456L11.2506 11.2496L11.2546 7L12.7544 7.001L12.7504 11.2506L17 11.2546L16.999 12.7544L12.7494 12.7504L12.7454 17L11.2456 16.999L11.2496 12.7494Z" fill="#2B1453"></path></svg></div>
          </div>
          
          <button
            className="pastel2"
            type="submit"
            disabled={!available || adding}
            onClick={handleAddToCart}
            style={{
              backgroundColor: "rgb(38,38,38)",
              color: "white",
              border: "1px solid rgb(38,38,38)",
              borderRadius: 0,
              width: "48%",
              display: "inline-block",
              padding: "16px 0px",
              fontSize: 13,
              fontWeight: "500",
              letterSpacing: 0.5
            }}
          >
            Add To Bag
          </button>
        </div>
      {!available && <p>This Product is out of Stock!</p>}
    </>
  )
}

ProductForm.propTypes = {
  product: PropTypes.shape({
    descriptionHtml: PropTypes.string,
    handle: PropTypes.string,
    id: PropTypes.string,
    shopifyId: PropTypes.string,
    images: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        originalSrc: PropTypes.string,
      })
    ),
    options: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        values: PropTypes.arrayOf(PropTypes.string),
      })
    ),
    productType: PropTypes.string,
    title: PropTypes.string,
    variants: PropTypes.arrayOf(
      PropTypes.shape({
        availableForSale: PropTypes.bool,
        id: PropTypes.string,
        price: PropTypes.string,
        title: PropTypes.string,
        shopifyId: PropTypes.string,
        selectedOptions: PropTypes.arrayOf(
          PropTypes.shape({
            name: PropTypes.string,
            value: PropTypes.string,
          })
        ),
      })
    ),
  }),
  addVariantToCart: PropTypes.func,
}

export default ProductForm
