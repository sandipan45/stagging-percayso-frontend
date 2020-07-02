/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"
import CookieConsent, { Cookies } from "react-cookie-consent";

import Header from "./header"
import Footer from "./footer"
import "./layout.css"

import scrollDownIcon from "../images/scroll-down-icon.png"
import emailIcon from "../images/email-icon.png"
import bannerVideoMpfour from "../images/bg-video.mp4"
import bannerVideoWebm from "../images/bg-video.webm"
import bannerVideoOgv from "../images/bg-video.ogv"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
	  strapiHome {
		bannertextone
		bannertexttwo
	  }
	  strapiHomePageOtherSettings {
		cookietext
	  }
    }
  `)

  return (
    <>
      <div id="page" className="hfeed site">
	  <div className="header-banner" id="secHome">       
        <div className="banner-container">
            <h1>{data.strapiHome.bannertextone}</h1>
			<h3>{data.strapiHome.bannertexttwo}</h3>
        </div>
        <div className="scroll-down">
            <a href="#secIntro">
                <img src={scrollDownIcon} alt="Scroll" />
            </a>
        </div>       
        <div className="video-load" id="video-viewport" style={{
			width: `1349px`,
			height: `388px`
		}}>
			<video controls id="example_video_1" className="slider-video" width="640" height="360" autoPlay muted loop style={{
			width: `1349px`,
			height: `758.813px`
			}}>
			  <source src={bannerVideoMpfour} type="video/mp4" />
			  <source src={bannerVideoWebm} type="video/webm" />
			  <source src={bannerVideoOgv} type="video/ogg" />
			</video>
        </div> 		
      </div>
      <Header siteTitle={data.site.siteMetadata.title} />
        <div id="main" className="site-main">
			
					{children}
		</div>
        <Footer />
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
												<input type="checkbox" name="checkbox-group" value="1" aria-label="Investing" id="test1" />
												<span className="wpcf7-list-item-label">Investing</span>
											</span>
										</span>
									</span>	
								</div>
								<div className="row">
									<span className="wpcf7-form-control-wrap checkbox-group-1">
										<span className="wpcf7-form-control wpcf7-acceptance optional">
											<span className="wpcf7-list-item">
												<input type="checkbox" name="checkbox-group-1" value="1" aria-label="Investing" id="test2" />
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
	</div>
	<CookieConsent
	  location="bottom"
	  buttonText="Accept"
	  disableStyles={true}
	  cookieName="myAwesomeCookieName2"
	  buttonClasses="cn-set-cookie button"
	  contentClasses="container"
	  containerClasses="cn-top cookie-notice"
	  expires={150}
	>
		  <span id="cn-notice-text" dangerouslySetInnerHTML={{__html: data.strapiHomePageOtherSettings.cookietext}} />
	</CookieConsent>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout


