import { graphql, Link } from "gatsby"
import React from "react"
import { useStaticQuery} from "gatsby"
import Modal from 'react-modal'

import emailIcon from "../images/email-icon.png"


const Header = ({data}) => {
	const dataheader = useStaticQuery(graphql`
    query siteTitleQueryAndSiteTitleQuery {
	  strapiHome {
		topnotification
	  }
	  allStrapiArticle(sort: {fields: menuorder, order: ASC}) {
		nodes {
		  Title
		  Link
		  strapiId
		}
	  }
    }
  `)

const [modalIsOpen,setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }
 
  function closeModal(){
    setIsOpen(false);
  }
	return (
		<>
			<header id="masthead" className="site-header">
				<div className="notification-bar">
					<div className="container" id="talk-modal-open">
					<p>{dataheader.strapiHome.topnotification} <Link to="#" onClick={openModal}>click here</Link></p>
					</div>
					<Link to="/" className="notification-close">x</Link>
				</div>
				<Modal
				  isOpen={modalIsOpen}
				  onRequestClose={closeModal}
				  ariaHideApp={false}
				  style={{
						overlay: {
							opacity: '1',
							visibility: 'visible'
						}
				  }}
				  overlayClassName="modal-overlay"
				  className="modal-box talk-modal-wrapper"
			   >
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
        </Modal>
	<div className="header-main">
		<div className="container">
			<Link
			  to="/"
			  className="logo"
			>
			<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 250 47">
			<g><path d="M18.52,0.55c-4.13,0-7.2,1.87-9.39,4.66l-0.33-3c-0.07-0.6-0.4-1-1-1H1c-0.6,0-1,0.4-1,1v43.31c0,0.6,0.4,1,1,1h8c0.6,0,1-0.4,1-1V30.93c2,2.07,4.8,3.4,8.53,3.4c9.13,0,15.79-7.4,15.79-16.72C34.31,8.08,27.65,0.55,18.52,0.55 z M17.32,25.2c-4.4,0-7.33-3.2-7.33-7.66c0-4.4,2.93-7.86,7.33-7.86c4.26,0,7.4,3.2,7.4,7.86C24.72,22.07,21.59,25.2,17.32,25.2z"/>
			<path d="M68.77,16.8c0-8.79-6.06-16.26-15.52-16.26c-9.53,0-16.59,7.46-16.59,16.86 c0,9.39,7.06,16.92,17.32,16.92c4.73,0,8.99-1.87,12.13-5c0.53-0.53,0.53-1,0.13-1.47l-3.46-3.33c-0.47-0.47-0.87-0.53-1.47-0.13 c-2.33,1.47-4.2,1.93-6.33,1.93c-4.46,0-7.4-1.87-8.39-5.4h19.79C68.44,20.93,68.77,19.54,68.77,16.8z M46.45,14.6 c0.73-3.8,3.53-5.6,6.86-5.6c3.2,0,5.93,1.8,6.6,5.6H46.45z"/>
			<path d="M70.69,32.86V2.21c0-0.6,0.4-1,1-1h7.66c0.6,0,0.93,0.4,1,1l0.27,3.8c1.67-3.2,4.4-5.53,8.4-5.53 c1.93,0,3.6,0.8,4.53,1.67c0.53,0.47,0.53,1,0.33,1.47l-2.2,5.73c-0.27,0.8-0.87,0.93-1.67,0.73c-0.67-0.2-1.47-0.53-2.73-0.53 c-4.13,0-6.6,3.06-6.6,7.06v16.26c0,0.6-0.4,1-1,1h-8C71.09,33.86,70.69,33.46,70.69,32.86z"/>
			<path d="M91.08,17.34c0-9.33,7.33-16.79,16.72-16.79c5.06,0,9.53,2.27,12.59,5.8c0.4,0.47,0.33,1-0.07,1.4 l-4.8,4.66c-0.47,0.47-0.93,0.4-1.47-0.07c-1.87-1.67-3.73-2.53-6-2.53c-4.33,0-7.4,3.33-7.4,7.53c0,4.33,3.06,7.73,7.4,7.73 c2.4,0,4.33-0.93,6.2-2.53c0.53-0.47,1-0.47,1.47,0l4.8,4.6c0.4,0.4,0.47,0.93,0.07,1.4c-3.06,3.53-7.6,5.8-12.79,5.8 C98.41,34.33,91.08,26.8,91.08,17.34z"/>
			<path d="M153.18,1.21h-6.8c-0.6,0-0.93,0.4-1,1l-0.33,3c-2.2-2.8-5.26-4.66-9.39-4.66 c-9.13,0-15.79,7.53-15.79,17.06c0,9.33,6.66,16.72,15.79,16.72c4.26,0,7.26-1.73,9.33-4.26l0.4,2.8c0.07,0.6,0.4,1,1,1h6.8 c0.6,0,1-0.4,1-1V2.21C154.18,1.61,153.78,1.21,153.18,1.21z M136.85,25.2c-4.26,0-7.4-3.13-7.4-7.66c0-4.66,3.13-7.86,7.4-7.86 c4.4,0,7.33,3.46,7.33,7.86C144.18,22,141.25,25.2,136.85,25.2z"/>
			<path d="M156.74,2.35c-0.27-0.73,0.07-1.13,0.8-1.13h8.06c0.53,0,1,0.27,1.2,0.8l7.33,20.12l7.33-20.12 c0.2-0.53,0.67-0.8,1.2-0.8h8.19c0.73,0,1.07,0.4,0.8,1.13l-17.26,43.37c-0.2,0.53-0.67,0.8-1.2,0.8h-7.8c-0.73,0-1.2-0.4-0.8-1.13 l4.73-11.46L156.74,2.35z"/>
			<path d="M215.18,24.2c0,6.66-6.8,10.33-12.86,10.33c-5.66,0-10.19-2.73-12.53-5.46 c-0.4-0.47-0.27-0.93,0-1.33l2.93-4.26c0.4-0.47,0.93-0.33,1.53,0c3,1.87,5.6,2.73,7.73,2.73c1.53,0,3.46-0.33,3.46-2.13 c0-4.4-15.06-2.33-15.06-13.33c0-6.6,5.66-10.26,11.53-10.26c4.46,0,8.73,1.73,11.46,4.93c0.4,0.47,0.27,1-0.07,1.4l-3,3.93 c-0.4,0.53-0.87,0.33-1.47-0.07c-2.53-1.47-3.93-2.27-5.93-2.27c-2,0-2.93,1.13-2.93,2.27C199.99,15.27,215.18,12.14,215.18,24.2z"/>
			<path d="M232.94,0.48c-9.39,0-16.99,7.53-16.99,17.06c0,9.46,7.6,16.99,16.99,16.99 C242.4,34.53,250,27,250,17.54C250,8.01,242.4,0.48,232.94,0.48z M232.94,25.27c-4.06,0-7.4-3.26-7.4-7.73c0-4.53,3.33-7.8,7.4-7.8 c4.13,0,7.4,3.26,7.4,7.8C240.34,22,237.07,25.27,232.94,25.27z"/>
			</g>
			</svg>
			</Link>
			<div className="header-right">
					<div className="top-links">
						<ul>
							<li>
								<Link to="/" className="talk-modal-open" target="_blank" rel="noreferrer">Investor area</Link>
							</li>                    
						</ul>
					</div>
					<div className="nav-icon">
						<svg id="Navigation_Dots" data-name="Navigation Dots" xmlns="http://www.w3.org/2000/svg" width="32" height="34" viewBox="0 0 32 34">
							<path id="Fill_29" data-name="Fill 29" d="M4.4,0A4.426,4.426,0,0,0,0,4.452,4.427,4.427,0,0,0,4.4,8.9,4.427,4.427,0,0,0,8.8,4.452,4.426,4.426,0,0,0,4.4,0" transform="translate(0 25.095)" fill="#fff"></path>
							<path id="Fill_31" data-name="Fill 31" d="M5.185,8.832A4.449,4.449,0,0,0,8.729,3.658,4.4,4.4,0,0,0,3.615.072,4.447,4.447,0,0,0,.071,5.246,4.4,4.4,0,0,0,5.185,8.832" transform="translate(0 12.952)" fill="#fff"></path>
							<path id="Fill_33" data-name="Fill 33" d="M5.185,8.832A4.449,4.449,0,0,0,8.729,3.658,4.4,4.4,0,0,0,3.615.072,4.447,4.447,0,0,0,.071,5.246,4.4,4.4,0,0,0,5.185,8.832" transform="translate(0 0)" fill="#fff"></path>
							<path id="Fill_35" data-name="Fill 35" d="M2,0A2.012,2.012,0,0,0,0,2.024,2.012,2.012,0,0,0,2,4.048,2.012,2.012,0,0,0,4,2.024,2.012,2.012,0,0,0,2,0" transform="translate(15.2 27.524)" fill="#fff"></path>
							<path id="Fill_37" data-name="Fill 37" d="M3.615.072A4.449,4.449,0,0,0,.071,5.246,4.4,4.4,0,0,0,5.185,8.833,4.449,4.449,0,0,0,8.729,3.659,4.4,4.4,0,0,0,3.615.072" transform="translate(12.8 12.952)" fill="#fff"></path>
							<path id="Fill_39" data-name="Fill 39" d="M3.615.072A4.449,4.449,0,0,0,.071,5.247,4.4,4.4,0,0,0,5.185,8.832,4.448,4.448,0,0,0,8.729,3.658,4.4,4.4,0,0,0,3.615.072" transform="translate(12.8 0)" fill="#fff"></path>
							<path id="Fill_41" data-name="Fill 41" d="M2,0A2.012,2.012,0,0,0,0,2.024,2.012,2.012,0,0,0,2,4.048,2.012,2.012,0,0,0,4,2.024,2.012,2.012,0,0,0,2,0" transform="translate(28 27.524)" fill="#fff"></path>
							<path id="Fill_43" data-name="Fill 43" d="M2.357,4.015a2.021,2.021,0,0,0,1.61-2.352A2,2,0,0,0,1.643.033,2.022,2.022,0,0,0,.032,2.385a2,2,0,0,0,2.325,1.63" transform="translate(28 15.381)" fill="#fff"></path>
							<path id="Fill_45" data-name="Fill 45" d="M2.357,4.015a2.021,2.021,0,0,0,1.61-2.353A2,2,0,0,0,1.643.033,2.023,2.023,0,0,0,.032,2.385,2,2,0,0,0,2.357,4.015" transform="translate(28 2.429)" fill="#fff"></path>
						</svg>
					</div>
					<div className="menu-wrapper">
						<div className="container">
							<ul id="menu-main-menu" className="menu">
								{dataheader.allStrapiArticle.nodes.map(homeMenu => (
									<li key={homeMenu.strapiId}><Link to={homeMenu.Link}>{homeMenu.Title}</Link></li>
								))}
							</ul>
						</div>
					</div>
				</div>
		</div>
	</div>
  </header>
		</>
	)
}



export default Header
