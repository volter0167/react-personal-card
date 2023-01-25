import '../styles.css'
import MainInfo from './MainInfo'
import About from './About'
import Interests from './Interests'
import Footer from './Footer'

export default function MainSection() {
  return (
    <main>
      <MainInfo />
      <About />
      <Interests />
    </main>
  )
}