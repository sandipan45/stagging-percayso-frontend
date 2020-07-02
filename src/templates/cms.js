import React from 'react'
import {graphql, Link} from 'gatsby'

import Header from "../components/header"
import Footer from "../components/footer"
import "../components/layout.css"

const CmsTemplate = ({data}) => {
	return(
			<>
				<div id="page" className="hfeed site">
					<div className="header-banner inner-banner details-banner">
						<div className="meta-post">
							<h1 className="post-title">{data.strapiCmsPages.cmsheading}</h1>
						</div>
					</div>
					<Header />
					<div className="cms-page">
						<div className="container">
								<p dangerouslySetInnerHTML={{__html: data.strapiCmsPages.cmsdescription}} />
						</div>
					</div>
				</div>
				
				<Footer />
			</>
	)
}

export default CmsTemplate

export const query = graphql`
    query CmsTemplateQuery($id: String!) {
        strapiCmsPages (id: {eq: $id}) {
			cmsheading
			cmsdescription
	  }
    }
`