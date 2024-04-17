import React, { useState } from "react"
import Header from "../components/Header"
import Card from "../components/Card"

import products from "../data/products"
import BasketComponent from "../components/BasketComponents"

import '../css/main.css'
import { Button } from "react-bootstrap"

import skidka from "../images/skidka.jpg"
import birthday from "../images/birthday.png"

import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

import RegisterScreen from "./RegisterScreen"
import { useSelector } from "react-redux"

export default function MainScreen() {

    const [sortedProducts, setSortedProducts] = useState(products)

    const userId = useSelector(state => state.user)

    function up() {
        setSortedProducts((products) => {
            return products.toSorted((el1, el2) => el1.price > el2.price)
        })
    }

    function down() {
        setSortedProducts((products) => {
            return products.toSorted((el1, el2) => el1.price < el2.price)
        })
    }

    function rate() {
        setSortedProducts((products) => {
            return products.toSorted((el1, el2) => el1.rate < el2.rate)
        })
    }

    function reset() {
        setSortedProducts(products)
    }
      
      const divStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundSize: 'cover',
        height: '400px'
      }

      const images = [
        skidka, birthday
      ];

    if (userId) {
        return (
            <div className="App">
                <Header page="/" />
                <BasketComponent />
                <div className="container">
                    <div style={{padding: "10px"}}>
                    <Slide>
                        {images.map((image, index)=> (
                            <div key={index} style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                                <img style={{...divStyle}} src={image} />
                            </div>
                        ))} 
                    </Slide>
                    </div>
                    <div className="sort-block">
                        <Button variant="primary" onClick={up}>По Возврастанию</Button>
                        <Button variant="primary" onClick={down} className="left-margin">По Убыванию</Button>
                        <Button variant="primary" onClick={rate} className="left-margin">По Рейтингу</Button>
                        <Button variant="danger" onClick={reset} className="left-margin">Сбросить</Button>
                    </div>
                    <div className="catalog" id="catalog">
                        {sortedProducts.map((product, index) => {
    
                            let count  = products.length - 2
    
                            if (products.length - 1 == index) {
                                if (count - 2 == 0 || count % 3 == 0) {
                                    return <>
                                        <Card product={product} key={index} />
                                        <div className="empty_product"></div>
                                    </>
                                } 
                            }
    
                            return <Card product={product} key={index} />
                        })}
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="App">
                <RegisterScreen />
            </div>
        )
    }
}