import twitterIcon from '../images/Twitter Icon.png'
import facebookIcon from '../images/Facebook Icon.png'
import instIcon from '../images/Instagram Icon.png'
import gitIcon from '../images/GitHub Icon.png'
import '../styles.css'

export default function Footer() {
  return (
    <footer>
      <a href="/some/valid/uri">
        <img src={twitterIcon} alt="twitter-icon"></img>
      </a>
      
      <a href="/some/valid/uri">
        <img src={facebookIcon} alt="facebook-icon"></img>
      </a>
      
      <a href="/some/valid/uri">
        <img src={instIcon} alt="instagram-icon"></img>
      </a>
      
      <a href="/some/valid/uri">
        <img src={gitIcon} alt="git-icon"></img>
      </a>
    </footer>
  )
}