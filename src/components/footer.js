import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import emailIcon from "../images/email-icon.png"
import "./layout.css"


const Footer = ({ children }) => {
const data = useStaticQuery(graphql`
    query SiteFooterQuery {
	 allStrapiArticle {
		nodes {
		  Title
		  Link
		  strapiId
		}
	  }
	 allStrapiFooterLegalMenus {
		nodes {
		  title
		  link
		  strapiId
		}
	 }
    }
  `)
return (
	<>
		<footer className="site-footer" id="colophon">
			<div className="container">
				<div className="footer-col navigation">
					<h3>Navigation</h3>
						<ul id="menu-footer-menu" className="menu">
						{data.allStrapiArticle.nodes.map(footerMenu => (
							<li key={footerMenu.strapiId}><Link to={footerMenu.Link} target="_blank" rel="noreferrer">{footerMenu.Title}</Link></li>
						))}
						</ul>     
				</div>
				<div className="footer-col navigation">
					<h3>Legal</h3>
						<ul id="menu-legal" className="menu">
							{data.allStrapiFooterLegalMenus.nodes.map(footerlegalMenu => (
								<li key={footerlegalMenu.strapiId}><Link to={footerlegalMenu.link} target="_blank" rel="noreferrer">{footerlegalMenu.title}</Link></li>
							))}
						</ul>        
					<div className="social-links">
						<h3>Let’s talk social</h3>
						<Link to="https://www.linkedin.com/company/percayso-inform/" target="_blank" rel="noreferrer">
						<svg id="linkedin" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25">
						<path id="Shape" d="M22.071,25H2.93A2.933,2.933,0,0,1,0,22.071V2.93A2.933,2.933,0,0,1,2.93,0H22.071A2.933,2.933,0,0,1,25,2.93V22.071A2.933,2.933,0,0,1,22.071,25ZM2.93,1.953a.978.978,0,0,0-.976.976V22.071a.978.978,0,0,0,.976.976H22.071a.978.978,0,0,0,.976-.976V2.93a.978.978,0,0,0-.976-.976Zm10.352,18.7H9.961V9.619h3.32v1.5a3.539,3.539,0,0,1,3.238-1.7c3.391,0,4.086,2.063,4.086,5.16v6.07h-3.37V15.267c0-1.161,0-2.916-1.811-2.916-1.463,0-2.144.9-2.144,2.824v5.479Zm-5.468,0H4.395V9.619H7.813V20.653ZM6.153,8.105a2,2,0,1,1,2-2A2,2,0,0,1,6.153,8.105Z" fill="#fa4879"></path>
						</svg>
						</Link>
					</div>
				</div>
				<div className="footer-bottom">
					<p><strong>Percayso Limited</strong><br/>Hine House | 25 Regent Street | Nottingham | NG1 5BS</p>
				</div>
			</div>
		</footer>
		<div className="modal-overlay"></div>
		<div className="modal-box talk-modal-wrapper">
			<div className="talk-modal">
				<div className="heading-col">
					<i><img src={emailIcon} alt="" /></i>
					<h2>Let's go</h2>
					<p>Please provide your details and investment preferences and one of our team will respond by email</p>
				</div>
				<div className="talk-form">
					<div role="form" className="wpcf7" id="wpcf7-f967-o1" lang="en" dir="ltr">
						<form action="https://www.flexyform.com/f/99e2c8ef90906c84d1ff5a8b0d525360bab12abb" method="post" className="wpcf7-form">
							<div className="contactform-field input-text">
								<input type="text" name="fullname" size="40" className="wpcf7-form-control input-fld" id="first-text" aria-label="Name" placeholder="Name" />
							</div>
							<div className="contactform-field input-text">
								<input type="text" name="address" size="40" className="wpcf7-form-control input-fld" aria-label="Address" placeholder="Address" />
							</div>
							<div className="contactform-field input-email">
								<input type="email" name="email" size="40" className="wpcf7-form-control input-fld" aria-label="Email address" placeholder="Email address" />
							</div>
							<div className="contactform-field input-number">
								<input type="number" name="phone" className="wpcf7-form-control input-fld" aria-label="Phone number" placeholder="Phone number" />
							</div>
							<div className="contactform-field input-text">
								<input type="text" name="code" size="40" className="wpcf7-form-control input-fld" aria-label="Introducer code" placeholder="Introducer code" />
							</div>
							<div className="interested">
								<p>I am interested in</p>
								<div className="row">
									<span className="wpcf7-form-control-wrap checkbox-group">
										<span className="wpcf7-form-control wpcf7-acceptance optional">
											<span className="wpcf7-list-item">
												<input type="checkbox" name="checkbox-1" value="1" aria-label="Investing" id="test1" onClick={ (event) => { this.handleCheckbox('checkbox-1', event) }} />
												<span className="wpcf7-list-item-label">Investing</span>
											</span>
										</span>
									</span>	
								</div>
								<div className="row">
									<span className="wpcf7-form-control-wrap checkbox-group-1">
										<span className="wpcf7-form-control wpcf7-acceptance optional">
											<span className="wpcf7-list-item">
												<input type="checkbox" name="checkbox-2" value="1" aria-label="Investing" id="test2"  />
												<span className="wpcf7-list-item-label">Introducing investors</span>
											</span>
										</span>
									</span>	
								</div>
							</div>
							<div className="contactform-field submit-button">
								<input type="submit" value="Submit" aria-label="Submit" className="wpcf7-form-control submit-btn" />
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</>
)
}

export default Footer