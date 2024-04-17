import React, { useEffect } from "react"
import Header from "../components/Header"

import '../css/game.css';

import iPhone from "../images/iPhone.png"
import Keyboard from "../images/keyboard.png"
import Headphones from "../images/headphones.png"

import Pointer from "../images/pointer.png"
import { useDispatch } from "react-redux";

export default function GameScreen() {

    const dispatch = useDispatch()

    const cells = 31

    const items = [
        {name: 'iPhone', img: iPhone, chance: 10, bonus: 0},
        {name: 'Keyboard', img: Keyboard, chance: 20, bonus: 3000},
        {name: 'Headphones', img: Headphones, chance: 30, bonus: 5000}
    ]

    let isStarted = false
    let isFirstStart = true

    function getItem() {
        let item;
        
        while (!item) {
            const chance = Math.floor(Math.random() * 100)
            
            items.forEach(elm => {
            if (chance < elm.chance && !item) item = elm
            })
        }
        
        return item
    }


    function generateItems() {
        document.querySelector('.list').remove()
        document.querySelector('.scope').innerHTML = `
            <ul class="list"></ul>
        `
        
        const list = document.querySelector('.list')
        
        for (let i = 0; i < cells; i++) {
            const item = getItem()
            
            const li = document.createElement('li')
            li.setAttribute('data-item', JSON.stringify(item))
            li.classList.add('list__item')
            li.innerHTML = `
            <img src="${item.img}" alt="" />
            `
        
            list.append(li)
        }
    }

    function start() {
        if (isStarted) return
        else isStarted = true
      
        if (!isFirstStart) generateItems()
        else isFirstStart = false
        const list = document.querySelector('.list')
      
        setTimeout(() => {
          list.style.left = '50%'
          list.style.transform = 'translate3d(-50%, 0, 0)'
        }, 0)
      
        const item = list.querySelectorAll('li')[15]
      
        list.addEventListener('transitionend', () => {
          isStarted = false
          item.classList.add('active')
          const data = JSON.parse(item.getAttribute('data-item'))
          
          console.log(data); // win

          if (data.bonus != 0) {
             dispatch({type: "ADD_BONUS", payload: data.bonus})
          }
        }, {once: true})
      }


    useEffect(() => {
        generateItems()
    }, [])


    return (
        <>
            <Header page="game" />
            <div className="game-container" >
                <div className="app">
                <img className="pointer" src={Pointer} alt="" />
                <div className="scope">
                    <ul className="list"></ul>
                </div>
            
                <button onClick={start} className="start">Крутить</button>
            </div>
        </div>
        </>
    )
}