import React from "react"

//FIXME - Crear animación header
const Footer = () => {
    return (<footer className="bg-emerald-950 text-white py-1 px-2 flex flex-row static justify-between">
        <p><a href='/#'>Héctor Pascual Marín 2024</a></p>
        <ul className='flex flex-row'>
            <li className="mx-1 hover:underline"><a href='/#'>INICIO</a></li>
            <li className="mx-1 hover:underline"><a href='#about-me'>SOBRE MI</a></li>
            <li className="mx-1 hover:underline"><a href='#knowledge'>CONOCIMIENTOS</a></li>
            <li className="mx-1 hover:underline"><a href='#projects'>PROYECTOS</a></li>
            <li className="mx-1 hover:underline"><a href='#work-history'>TRAYECTORIA</a></li>
            <li className="mx-1 hover:underline"><a href='#contact'>CONTACTO</a></li>
        </ul>
    </footer>)
}

export default Footer