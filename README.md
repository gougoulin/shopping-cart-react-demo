# Demo project - simple e-commerce shopping site

[toc]

## Models

### 1. Product

```javascript
{
  id: "",
  title: "",
  description: "",
  quantity: "",
  price: "",
  rpp: "",
  like: false,
  variant: {color: [], size: [], ... } // not implemented yet
}
```

#### Action Creators

- getProducts(number) - return number of products, default 10
- getProductByID(id_product) -
- toggleLikeProduct(id_product)
- decreaseProductQuantity(num = 1)
- increaseProductQuantity(num = 1)

### 2. Cart

```javascript
// use an array
{ inCart: [{ id_product, qty_ordered }, { ... }, ...], };
```

#### Cart Action Creators

- getCart()
- updateCart()
- dropProduct()
- deleteProduct()

### 3. Liked

Collections of Liked Products

```javascript
{ liked: [id_product_1, id_product_2, ...], }
```

#### Liked Action Creators

- toggleLike()
