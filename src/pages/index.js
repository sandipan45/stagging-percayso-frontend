import React from "react"
import Img from 'gatsby-image'
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

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
		<div className="middle-circle"></div>
		<div className="circle-in percayso">
            <Link to="#">
			  <p dangerouslySetInnerHTML={{__html: data.strapiAboutPercayso.diagrampercaysointro }} /> 
              <span className="percayso-logo"></span>
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
              <span className="percayso-logo"></span>
            </Link>
        </div>
		<div className="circle-in percayso-business">
            <Link to="{data.strapiAboutPercayso.percaysobusinesslink}" target="_blank">
              <p dangerouslySetInnerHTML={{__html: data.strapiAboutPercayso.percaysobusinesstext }} />
              <span className="percayso-logo"></span>
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
              <span className="percayso-logo"></span>
            </Link>
        </div>
	</div>
	<div className="section what-impact corporate-view">
		<div className="container">
			<h2 className="heading-h2" dangerouslySetInnerHTML={{__html: data.strapiCorporateSection.title }} />
			<h3 dangerouslySetInnerHTML={{__html: data.strapiCorporateSection.subtitle }} />
			<div className="corporate-circle">
				<div className="percayso-main-logo"></div>
				<div className="percayso-partner-connect">
					<h4>Partner</h4>
				</div>
				<div className="column left">
					<h2>Companies</h2>
					<div className="circle-in percayso">
						
						<p>{data.strapiCorporateSection.title}</p>
					</div>
					<div className="bottom-main">
						<div className="circle-in bottom-left percayso-inform uk">
							<Link to="#">
								
							</Link>
						</div>
						<div className="circle-in bottom-right percayso-inform australia">
							<Link to="#">
								
							</Link>
						</div>
					</div>
					<h4>{data.strapiCorporateSection.companytype}</h4>
				</div>
				<div className="column right">
					<h2>Community<br/>Partnership</h2>
					<div className="circle-in percayso">
						
						<p>{data.strapiCorporateSection.commpartname}</p>
					</div>
					<div className="bottom-main">
						<div className="circle-in bottom-left percayso-community">
							<Link to="#">
								
							</Link>
						</div>
						<div className="circle-in bottom-right percayso-business">
							<Link to="#">
								
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
			</div>
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
    
	percaysoinformtext
    percaysoinformlink
    
    percaysobusinesstext
    percaysobusinesslink
    
    percaysocommutext
    percaysocommlink
    
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
    
    companyname
    
    companytype
    
    commpartname
    
   
  }
  strapiHomePageOtherSettings {
    investingpercaysotitle
    Description
    whowearetitle
    whowearedeatils
  }
}
`



