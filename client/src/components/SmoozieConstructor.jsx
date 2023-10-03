import React from 'react';
import { NavLink } from 'react-router-dom';
import '../assets/styles/SmoozieConstructor.scss';

const smoozieConstructor = () => {
  const products = [
    {
      id: 1,
      title: 'Product 1',
      price: 10.99,
      img: 'product1.jpg',
    },
    {
      id: 2,
      title: 'Product 2',
      price: 15.99,
      img: 'product2.jpg',
    },
    {
      id: 3,
      title: 'Product 3',
      price: 20.99,
      img: 'product3.jpg',
    },
  ];
  

  const cardItem = (item) => {
    return (
      <div className="col-md-4" key={item.id}>
        <div className="card my-5 py-4" style={{ width: '18rem' }}>
          <img src={item.img} className="card-img-top" alt={item.title} />
          <div className="card-body text-center">
            <h5 className="card-title">{item.title}</h5>
            <p className="lead">${item.price}</p>
            <NavLink to={`/products/${item.id}`} className="btn btn-outline-primary">
              Buy Now
            </NavLink>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="container py-5">
        <div className="row">
          <div className="col-12 text-center">
            <h1>smoozieConstructor</h1>
            <hr />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-around">
          {products.map((smoozieConstructor) => cardItem(smoozieConstructor))}
        </div>
      </div>
    </div>
  );
};

export default smoozieConstructor;
