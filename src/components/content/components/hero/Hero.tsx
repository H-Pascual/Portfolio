import React from "react"
import './Hero.css'
const HeroComponent = () => {
    return (<div id='hero' className="bg-custom-image h-screen opacity-80 text-white">
        <h1 className="text-2xl">Héctor Pascual Marín</h1>
        <h2>FullStack Developer</h2>
        <button className="border-1 rounded border-black border-solid">CALL TO ACTION!</button>
    </div>)
}

export default HeroComponent