import React from "react"
import HeroComponent from './components/Hero'
import ContactForm from './components/Contact'
import WorkHistory from "./components/WorkHistory"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import AboutMe from "./components/AboutMe"

const Content = () => {
    return (<>
        <HeroComponent/>
        <AboutMe />
        <WorkHistory />
        <Projects />
        <Skills />
        <ContactForm/>
    </>)
}

export default Content