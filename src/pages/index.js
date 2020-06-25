import React from "react"
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
}
`



