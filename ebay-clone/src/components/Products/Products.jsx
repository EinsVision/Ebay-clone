import React from 'react';
import { Grid } from '@material-ui/core';
import Product from './Product/Product';
import useStyles from './styles';

// const products = [
//   {id: 1, name: 'Shoes', description: 'Running shoes', price: '$5', image: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/i1-9cfea66d-b519-4b29-8e43-ce4164e8c558/adapt-bb-2-tie-dye-basketball-shoe-vdFwKS.jpg'},
//   {id: 2, name: 'Macbook', description: 'Apple Macbook', price: '$10', image: 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/macbook-air-space-gray-config-201810?wid=1078&hei=624&fmt=jpeg&qlt=80&.v=1603332211000'},
// ];

function Products({ products, onAddToCart}) {

  const classes = useStyles();
  return (
    <div className={classes.content}>
      <div className={classes.toolbar} />
      <Grid
        container
        justify='center'
        spacing={4}  
      >
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} onAddToCart={onAddToCart}/>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default Products
