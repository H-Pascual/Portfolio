import React from "react"
import './Header'

//FIXME - Agregar pestaña de notificaciones, cambio de idioma, cambio de colores...
const Header = () => {
    return (<header className="bg-gradient-to-r from-neutral-900 from-60% to-emerald-700 text-white py-1 px-2 flex flex-row static justify-between">
        <p><a href='/#' className="">Héctor Pascual Marín</a></p>
        <ul className='flex flex-row'>
            <li className="mx-1 hover:underline"><a href='/#'>INICIO</a></li>
            <li className="mx-1 hover:underline"><a href='#about-me'>SOBRE MI</a></li>
            <li className="mx-1 hover:underline"><a href='#knowledge'>CONOCIMIENTOS</a></li>
            <li className="mx-1 hover:underline"><a href='#projects'>PROYECTOS</a></li>
            <li className="mx-1 hover:underline"><a href='#work-history'>TRAYECTORIA</a></li>
            <li className="mx-1 hover:underline"><a href='#contact'>CONTACTO</a></li>
        </ul>
    </header>)
}

export default Header