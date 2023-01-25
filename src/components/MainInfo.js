import personPhoto from '../images/Rectangle 90.png'
import mailIcon from '../images/Mail.png'
import linkedinIcon from '../images/linkedin.png'
import '../styles.css'

export default function MainInfo() {
  return (
    <>
      <img className="avatar" src={personPhoto} alt="person"></img>
      <h2>Laura Smith</h2>
      <p className="profession">Frontend Developer</p>
      <span className="small-info">laurasmith.website</span>
      <div className="cta-section">
        <a href="/some/valid/uri" className="email">
          <img src={mailIcon} alt="mail-icon"></img>
          Email
        </a>
        <a className="linkedin" href="/some/valid/uri">
          <img src={linkedinIcon} alt="linkedin-icon"></img>
          Linkedin
        </a>
      </div>
    </>
  )
}