/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"

import Header from "./header"
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
	</div>
	<div className="cn-top" id="cookie-notice">
		<div className="container">
		  <span id="cn-notice-text">We use cookies to offer you a better experience. By continuing to use this website, you consent to the use of cookies in accordance with our <Link to="#">Cookie Policy</Link>.</span>
		  <Link to="#" className="cn-set-cookie button" id="cn-accept-cookie" >Accept</Link>
		</div>
	</div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout


