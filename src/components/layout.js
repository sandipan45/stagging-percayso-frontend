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
				<video id="example_video_1" className="slider-video" width="640" height="360" autoPlay muted loop preload style={{
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


