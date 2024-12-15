import React from "react"
import './Hero.css'
const HeroComponent = () => {
    return (<div id='hero' className="bg-[url('src/assets/imgs/hero.jpg')] h-screen">
        <h1>Héctor <a href=""></a>Pascual Marín</h1>
        <h2>FullStack Developer</h2>
        <button>CALL TO ACTION!</button>
    </div>)
}

export default HeroComponent