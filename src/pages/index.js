import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Scrollbars } from 'react-custom-scrollbars'
import Modal from 'react-modal'

import OwlCarousel from 'react-owl-carousel-loop'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'

import {fromNewsSlugToUrl} from '../utils/news'

import linkdinImage from "../images/linkedin-icon2.png"
import emailIcon from "../images/email-icon.png"
import "./assets/scrollbar.css"


const isBrowser = typeof window !== 'undefined';
const options = {
    responsiveClass: true,
    nav: true,
    dots: false,
    autoplay: false,
    responsive: {
        0: {
            items: 1
        },
        359: {
            items: 2
        },
        550: {
            items: 3
        },
        989: {
            items:5

        }
    },
};
const newsoptions = {
    responsiveClass: true,
    nav: false,
    dots: false,
    autoplay: true,
    responsive: {
        0: {
            items: 1,
			margin: 20
        },
        470: {
            items: 2,
			margin: 20
        },
        767: {
            items: 2,
			margin: 60
        },
        989: {
            items:3,
			margin: 20,
			autoplay : false,
			touchDrag: false

        }
    },
};

const IndexPage = ({data}) => {
const [modalIsOpen,setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }
 
  function closeModal(){
    setIsOpen(false);
  }
  return (
  <Layout> 
    <SEO title="Home" /> 
	<div className="section intro-row" id="secIntro">
		<div className="container">
			<div className="text-col">
				<h2 className="heading-h2">{data.strapiAboutPercayso.title}</h2>
				<div dangerouslySetInnerHTML={{__html: data.strapiAboutPercayso.description }} />
			</div>
		</div>
	</div>
	<div className="percayso-intro-diagram">
		<div className="middle-circle"><img src={data.strapiAboutPercayso.middlelogo.publicURL} alt="" /></div>
		<div className="circle-in percayso">
            <Link to="#">
			  <p dangerouslySetInnerHTML={{__html: data.strapiAboutPercayso.diagrampercaysointro }} /> 
              <span className="percayso-logo"><img src={data.strapiAboutPercayso.percaysologo.publicURL} alt="" /></span>
            </Link>
        </div>
		<div className="circle-in top-right">
            <p dangerouslySetInnerHTML={{__html: data.strapiAboutPercayso.percaysointroright }} />
        </div>
		<div className="circle-in top-left">
            <p dangerouslySetInnerHTML={{__html: data.strapiAboutPercayso.percaysointoleft }} />
        </div>
		<div className="circle-in percayso-inform">
            <Link to={data.strapiAboutPercayso.percaysoinformlink} target="_blank">
              <p dangerouslySetInnerHTML={{__html: data.strapiAboutPercayso.percaysoinformtext }} />
              <span className="percayso-logo"><img src={data.strapiAboutPercayso.parcaysoinformlogo.publicURL} alt="" /></span>
            </Link>
        </div>
		<div className="circle-in percayso-business">
            <Link to={data.strapiAboutPercayso.percaysobusinesslink} target="_blank">
              <p dangerouslySetInnerHTML={{__html: data.strapiAboutPercayso.percaysobusinesstext }} />
              <span className="percayso-logo"><img src={data.strapiAboutPercayso.percaysobusinesslogo.publicURL} alt="" /></span>
            </Link>
        </div>
		<div className="circle-in bottom-right">
            <p dangerouslySetInnerHTML={{__html: data.strapiAboutPercayso.percaysocommrighttext }} />
        </div>
        <div className="circle-in bottom-left">
            <p dangerouslySetInnerHTML={{__html: data.strapiAboutPercayso.percaysocommlefttext }} />
        </div>
		<div className="circle-in percayso-community">
            <Link to={data.strapiAboutPercayso.percaysocommlink} target="_blank">
              <p dangerouslySetInnerHTML={{__html: data.strapiAboutPercayso.percaysocommutext }} />
              <span className="percayso-logo"><img src={data.strapiAboutPercayso.percaysocommlogo.publicURL} alt="" /></span>
            </Link>
        </div>
	</div>
	<div className="section what-impact corporate-view">
		<div className="container">
			<h2 className="heading-h2" dangerouslySetInnerHTML={{__html: data.strapiCorporateSection.title }} />
			<h3 dangerouslySetInnerHTML={{__html: data.strapiCorporateSection.subtitle }} />
			<div className="corporate-circle">
				<div className="percayso-main-logo"><img src={data.strapiCorporateSection.percaysomainlogo.publicURL} alt="" /></div>
				<div className="percayso-partner-connect">
					<h4>Partner</h4>
				</div>
				<div className="column left">
					<h2>Companies</h2>
					<div className="circle-in percayso">
						<img src={data.strapiCorporateSection.companylogo.publicURL} alt="" />
						<p>{data.strapiCorporateSection.title}</p>
					</div>
					<div className="bottom-main">
						<div className="circle-in bottom-left percayso-inform uk">
							<Link to="#">
								<img src={data.strapiCorporateSection.companyleftlogo.publicURL} alt="" />
							</Link>
						</div>
						<div className="circle-in bottom-right percayso-inform australia">
							<Link to="#">
								<img src={data.strapiCorporateSection.companyrightlogo.publicURL} alt="" />
							</Link>
						</div>
					</div>
					<h4>{data.strapiCorporateSection.companytype}</h4>
				</div>
				<div className="column right">
					<h2>Community<br/>Partnership</h2>
					<div className="circle-in percayso">
						<img src={data.strapiCorporateSection.commpartlogo.publicURL} alt="" />
						<p>{data.strapiCorporateSection.commpartname}</p>
					</div>
					<div className="bottom-main">
						<div className="circle-in bottom-left percayso-community">
							<Link to="#">
								<img src={data.strapiCorporateSection.commpartleftlogo.publicURL} alt="" />
							</Link>
						</div>
						<div className="circle-in bottom-right percayso-business">
							<Link to="#">
								<img src={data.strapiCorporateSection.commpartrightlogo.publicURL} alt="" />
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div className="section insurers-steps">
		<div className="container">
			<h2 className="heading-h2">{data.strapiHomePageOtherSettings.investingpercaysotitle}</h2>
			<div className="insures-text-desc" dangerouslySetInnerHTML={{__html: data.strapiHomePageOtherSettings.Description }} />
		</div>
	</div>
	<div className="section about-percayso">
		<div className="container">
			<h2 className="heading-h2">{data.strapiHomePageOtherSettings.whowearetitle}</h2>
			<div dangerouslySetInnerHTML={{__html: data.strapiHomePageOtherSettings.whowearedeatils }} />
		</div>
	</div>
	<div className="section percayso-team" id="secMeetTeam">
		<div className="slider-box">
			<OwlCarousel
					className="owl-theme"
					loop
					items={5}
					{...options}
				>
				{data.allStrapiPercaysoteam.nodes.map(percaysoTeam => (
					<div className="item" key={percaysoTeam.strapiId}>
						<div className="image-box">
							<img src={percaysoTeam.featuredimage.publicURL} alt="" width="270" height="404" />
						</div>
						<div className="overlay-box">
							<div className="inner-details">
								<h4>{percaysoTeam.name}</h4>
								<span className="small-title">{percaysoTeam.profession}</span>
								<p dangerouslySetInnerHTML={{__html: percaysoTeam.aboutmember }} />
								<div className="share-box"><Link to={percaysoTeam.linkdinurl} target="_blank" rel="noreferrer"><img src={linkdinImage} alt="" /></Link></div>
							</div>
						</div>
					</div>
				))}
				</OwlCarousel>
		</div>
	</div>
	<div className="section percayso-news">
		<div className="container" id="secLatestNews">
			<h2 className="heading-h2">{data.strapiHomePageOtherSettings.latestnewstitle}</h2>
			<h3 dangerouslySetInnerHTML={{__html: data.strapiHomePageOtherSettings.latestnewssubtitle }} />
			<OwlCarousel
					className="news-slider owl-theme"
					loop
					{...newsoptions}					
				>
				{data.allStrapiLatestNews.nodes.map(latestNews => (
					<div className="item" key={latestNews.strapiId}>
						<div className="blog-thumb">
							<img src={latestNews.newsfeaturedimage.publicURL} alt="" width="390" height="415" />
						</div>
						<div className="blog-info">
							<h4>{latestNews.newstitle}</h4>
							<p dangerouslySetInnerHTML={{__html: latestNews.newssmalldescription }} />
							<div className="blog-info-bottom">
								<div className="author">
									<span className="author-image">
										<img src={latestNews.authorimage.publicURL} alt="" width="25" height="25" />
									</span>
									<span className="author-name">{latestNews.authorname}</span>
								</div>
								<div className="date">{latestNews.newsdate}</div>
							</div>
						</div>
						<div className="button-container">
							<Link to={fromNewsSlugToUrl(latestNews.slug)} className="button">
							  Read full article
							</Link>
						</div>
					</div>
				))}
				
			</OwlCarousel>
		</div>
	</div>
	<div className="section percayso-career" id="secCareer">
		<div className="container">
			<div className="career-tab-col">
				<h2 className="heading-h2">{data.strapiHomePageOtherSettings.careerheading}</h2>
				<p dangerouslySetInnerHTML={{__html: data.strapiHomePageOtherSettings.careersubheading }} />
				<ul className="tabs">
					{data.allStrapiCareer.nodes.map(careerNews => (
					<li rel={'tab' + careerNews.strapiId} key={careerNews.strapiId}><span>{careerNews.careertitle}</span></li>
					))}
				</ul>
			</div>
			<div className="tab_container">
				{data.allStrapiCareer.nodes.map(careerNews => (
					<div id={'tab' + careerNews.strapiId} rel={'tab' + careerNews.strapiId} className="tab_content" key={careerNews.strapiId}>
						<Link to="#" className="close-btn">x</Link>
						<h2>{careerNews.careertitle}</h2>
						
						<Scrollbars className="scroller-outer" style={{ width:500, height: 600 }}
						renderThumbVertical={({ style, ...props }) =>
							<div {...props} style={{ ...style, width: '22px', borderRadius: '8px', right: '15px', display: 'block', height: '149px', transform:'translateY(0px)', backgroundColor: '#fa4879'  }}/>
						}
						
						>
							<div className="scroll-content mCustomScrollbar" dangerouslySetInnerHTML={{__html: careerNews.careerdescription}}></div>
						</Scrollbars>
						<div className="job-apply" dangerouslySetInnerHTML={{__html: careerNews.howtoapply}}></div>
					</div>
				))}
			</div>
		</div>
	</div>
	<div className="section home-contact" id="secContact">
		<div className="container"> 
			<h2 className="heading-h2">{data.strapiHomePageOtherSettings.contactusheading}</h2>
			<p dangerouslySetInnerHTML={{__html: data.strapiHomePageOtherSettings.contactussubheading}}></p>
			<div className="button-container">
			  <Link to="#" className="button talk-modal-open" onClick={openModal}>Let's talk</Link>
			</div>
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
		<div className="map-bolck">
			<div className="map-pin"><img src={data.strapiHomePageOtherSettings.googlemappointerimg.publicURL} alt="" width="55" height="66" /></div>
			<div className="map-button"><Link to={data.strapiHomePageOtherSettings.googlemapurl} className="button" target="_blank">Open on Google Maps</Link></div>
		</div>
	</div>
  </Layout>
  )
}

export default IndexPage


export const pageQuery = graphql`
query MyQuery {
  strapiAboutPercayso {
    title
    description
	diagrampercaysointro
    percaysointoleft
    percaysointroright
    percaysologo {
      extension
      publicURL
    }
	percaysoinformtext
    percaysoinformlink
    parcaysoinformlogo {
      extension
      publicURL
    }
    percaysobusinesstext
    percaysobusinesslink
    percaysobusinesslogo {
      extension
      publicURL
    }
    percaysocommutext
    percaysocommlink
    percaysocommlogo {
      extension
      publicURL
    }
    percaysocommlefttext
    percaysocommrighttext
	middlelogo {
      extension
      publicURL
    }
  }
  strapiCorporateSection {
    title
    subtitle
    percaysomainlogo {
      extension
      publicURL
    }
    companylogo {
      extension
      publicURL
    }
    companyname
    companyleftlogo {
      extension
      publicURL
    }
    companyrightlogo {
      extension
      publicURL
    }
    companytype
    commpartlogo {
      extension
      publicURL
    }
    commpartname
    commpartleftlogo {
      extension
      publicURL
    }
    commpartrightlogo {
      extension
      publicURL
    }
  }
  strapiHomePageOtherSettings {
    investingpercaysotitle
    Description
    whowearetitle
    whowearedeatils
	latestnewstitle
    latestnewssubtitle
    careerheading
    careersubheading
	contactusheading
    contactussubheading
    googlemappointerimg {
      extension
      publicURL
    }
    googlemapurl
  }
  allStrapiPercaysoteam(sort: {fields: teamorder, order: ASC}) {
    nodes {
      name
      aboutmember
      profession
      linkdinurl
	  strapiId
      featuredimage {
        extension
        publicURL
      }
    }
  }
  allStrapiLatestNews (sort: {fields: newsdate, order: DESC}) {
    nodes {
	  id
	  slug
	  strapiId
      newstitle
	  newssmalldescription
      newsdescription
      authorname
      newsdate(formatString: "DD MMM, YYYY")
      authorimage {
        extension
        publicURL
      }
      newsfeaturedimage {
        extension
        publicURL
      }
    }
  }
  allStrapiCareer {
    nodes {
      strapiId
      careertitle
      careerdescription
      howtoapply
    }
  }
}
`



