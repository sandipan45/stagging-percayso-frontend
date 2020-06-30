import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

import linkdinImage from "../images/linkedin-icon2.png"
import "./assets/owl.carousel.min.css"

const IndexPage = ({data}) => (
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
            <Link to="{data.strapiAboutPercayso.percaysoinformlink}" target="_blank">
              <p dangerouslySetInnerHTML={{__html: data.strapiAboutPercayso.percaysoinformtext }} />
              <span className="percayso-logo"><img src={data.strapiAboutPercayso.parcaysoinformlogo.publicURL} alt="" /></span>
            </Link>
        </div>
		<div className="circle-in percayso-business">
            <Link to="{data.strapiAboutPercayso.percaysobusinesslink}" target="_blank">
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
            <Link to="{data.strapiAboutPercayso.percaysocommlink}" target="_blank">
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
			<div id="team-slider" className="owl-carousel owl-theme owl-loaded owl-drag">
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
								<div className="share-box"><Link to="{percaysoTeam.linkdinurl}" target="_blank" rel="noreferrer"><img src={linkdinImage} alt="" /></Link></div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	</div>
	<div className="section percayso-news">
		<div className="container" id="secLatestNews">
			<h2 className="heading-h2">{data.strapiHomePageOtherSettings.latestnewstitle}</h2>
			<h3 dangerouslySetInnerHTML={{__html: data.strapiHomePageOtherSettings.latestnewssubtitle }} />
			<div className="news-slider owl-carousel owl-theme owl-loaded owl-drag">
				{data.allStrapiLatestNews.nodes.map(latestNews => (
					<div className="item" key={latestNews.strapiId}>
						<div className="blog-thumb">
							<img src={latestNews.newsfeaturedimage.publicURL} alt="" width="390" height="415" />
						</div>
						<div className="blog-info">
							<h4>{latestNews.newstitle}</h4>
							<p dangerouslySetInnerHTML={{__html: latestNews.newsdescription.substring(0, 100) }} />
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
							<Link to="#" className="button">
							  Read full article
							</Link>
						</div>
					</div>
				))}
			</div>
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
						<h2>{careerNews.title}</h2>
						<div className="scroll-content mCustomScrollbar" dangerouslySetInnerHTML={{__html: careerNews.careerdescription}}></div>
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
			  <Link to="#" className="button talk-modal-open">Let's talk</Link>
			</div>
		</div>
		<div className="map-bolck">
			<div className="map-pin"><img src={data.strapiHomePageOtherSettings.googlemappointerimg.publicURL} alt="" width="55" height="66" /></div>
			<div className="map-button"><Link to={data.strapiHomePageOtherSettings.googlemapurl} className="button" target="_blank">Open on Google Maps</Link></div>
		</div>
	</div>
  </Layout>
)

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
  allStrapiPercaysoteam {
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
	  strapiId
      newstitle
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



