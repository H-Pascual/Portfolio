import React from "react"
import HeroComponent from './components/hero/Hero'
import ContactForm from './components/contact/Contact'
import WorkHistory from "./components/work-history/WorkHistory"
import Skills from "./components/skills/Skills"
import Projects from "./components/projects/Projects"
import AboutMe from "./components/about-me/AboutMe"

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