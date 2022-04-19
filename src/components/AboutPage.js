import React, {lazy, Suspense} from 'react'
import {darkTheme, mediaQueries } from './Themes'
import styled, { keyframes, ThemeProvider } from 'styled-components'
import { motion } from 'framer-motion'
import Astronaut from '../assets/Images/spaceman.png'
import Loading from '../subComponents/Loading';

const SocialIcons = lazy(() => import('../subComponents/SocialIcons'))
const PowerButton = lazy(() => import('../subComponents/PowerButton'))
const LogoComponent = lazy(() => import('../subComponents/LogoComponent'))
const ParticlesComponent = lazy(() => import('../subComponents/ParticleComponent'))
const BigTitle = lazy(() => import('../subComponents/BigTitle'))


const Box = styled(motion.div)`
  background-color: ${props => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`
const float = keyframes`
0% { transform: translateY(-10px)}
50% { transform: translateY(15px) translateX(15px)}
100% { transform: translateY(-10px)}
`

const Spaceman = styled(motion.div)`
  position: absolute;
  top: 10%;
  right: 5%;
  width: 20vw;
  animation: ${float} 4s infinite;

  img{
    width: 100%;
    height: auto;
  }
`
const Main = styled(motion.div)`
  border: 2px solid ${props => props.theme.text};
  color: ${props => props.theme.text};
  padding: 2rem;
  width: 50vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  backdrop-filter: blur(4px);

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: calc(0.6rem + 1vw);
  font-family: 'Ubuntu Mono', monospace;

  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;

  ${mediaQueries(40)`
          width: 60vw;
          height: 50vh;
          top:50%;
          left:50%;
          transform:translate(-50%,-50%);


  `};
  ${mediaQueries(30)`
          width: 50vw;
          height: auto;
          backdrop-filter: none;
          margin-top:2rem;

  `};

${mediaQueries(20)`
          padding: 1rem;
          font-size: calc(0.5rem + 1vw);
  `};
`


const AboutPage = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Suspense fallback={<Loading/>}>
      <Box
      key='skills'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}>>

      <LogoComponent theme='dark'/>
      <SocialIcons theme='dark'/>
      <PowerButton />
      <ParticlesComponent theme='dark'/>

      <Spaceman
      initial={{ right: '-20%', top: '100%' }}
      animate={{
        right: '5%',
        top: '10%',
        transition: { duration: 2, delay: 0.5 },
      }}> 
        <img src={Astronaut} alt="Spaceman"/>
      </Spaceman>
      <Main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1, delay: 1 } }}>
      Ich bin ein Front-End-Entwickler aus Linz. Ich liebe es, einfache, aber schöne Websites mit großartiger Benutzererfahrung zu erstellen.
        <br/><br/>
        Ich interessiere mich für den gesamten Frontend-Stack, probiere gerne neue Dinge aus und baue großartige Projekte. Ich bin selbstständiger Freelancer und mache gerade den Zivildienst.
      <br/><br/>
      Ich glaube, dass alles eine Kunst ist, wenn man sein Bewusstsein darin einsetzt. Sie können sich über soziale Links mit mir verbinden.
      </Main>
      <BigTitle text="ABOUT" top='10%' left='5%'/>
      </Box>
      </Suspense>
    </ThemeProvider>
    
  )
}

export default AboutPage