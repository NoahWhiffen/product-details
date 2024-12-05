import React, { useState, useEffect } from 'react';

function ProductDetails({productId}) {
	const [product, setProduct] = useState(null);
	const [quantity, setQuantity] = useState(1);

	useEffect(() => {
			fetch('./src/db.json')
					.then(response => response.json())
					.then(data => {
							const selectedProduct = data.find(item => item.id === productId);
							setProduct(selectedProduct);
					})
					.catch(error => console.error('Error fetching product data:', error));
	}, [productId]);

	const handleQuantityChange = (event) => {
		setQuantity(Number(event.target.value));
	}

	if (!product) { // This is to ensure state isn't null before accessing it's properties.
        return <div>Loading...</div>;
    }


		return(
        <div className='wrapper'>
					<div className='image-container'>
							<img src={product.image} alt='Placeholder alt text'/>
							<p>
								{product.description}
							</p>
					</div>
					<div className='delivery-container'>
						<p>
							FREE delivery Tuesday, December 10th
						</p>
						<p>
							Or fastest delivery, Monday, December 9th.
						</p>
						<label>
							In Stock
							<select className='dropdown'
											value={quantity}
											onChange={handleQuantityChange}>
								<option value={1}>1</option>
								<option value={2}>2</option>
								<option value={3}>3</option>
								<option value={4}>4</option>
								<option value={5}>5</option>
								Quantity: 
							</select>
						</label>
						<h2>
							Add a Protection Plan:
						</h2>
						<input type="radio" id="plan3year" name="protectionPlan" value="3-Year" />
                <label htmlFor="plan3year">3-Year Protection Plan for $64.99</label>
                <input type="radio" id="plan4year" name="protectionPlan" value="4-Year" />
                <label htmlFor="plan4year">4-Year Protection Plan for $84.99</label>
                <input type="radio" id="plan5year" name="protectionPlan" value="5-Year" />
                <label htmlFor="plan5year">5-Year Protection Plan for $104.99</label>
                <input type="radio" id="giftReceipt" name="giftReceipt" />
                <label htmlFor="giftReceipt">Add a gift receipt for easy returns</label>
					</div>
					<div className='price-container'>
						<p>
							{product.name}
							<br/>
							${product.price}
						</p>
						<button>
							Add to Cart
						</button>
					</div>
				</div>
    );
}

export default ProductDetails;