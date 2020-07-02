import React from 'react'
import {graphql, Link} from 'gatsby'

import Header from "../components/header"
import SidebarTemplate from "./sidebar"
import "../components/layout.css"

const NewsTemplate = ({data}) => {
	return(
			<>
				<div id="page" className="hfeed site">
					<div className="header-banner inner-banner details-banner">
						<div className="meta-post">
							<h1 className="post-title">{data.strapiLatestNews.newstitle}</h1>
							<div className="post-info">
								<div className="author">
									<span className="author-image">
										<img src={data.strapiLatestNews.authorimage.publicURL} alt="" width="25" height="25" />
									</span>
									<span className="author-name">by {data.strapiLatestNews.authorname}</span>
								</div>
								<div className="date">{data.strapiLatestNews.newsdate}</div>
							</div>
						</div>
					</div>
					<Header />
					<div className="post-details">
						<div className="container">
							<div className="post-content">
								<p dangerouslySetInnerHTML={{__html: data.strapiLatestNews.newsdescription}} />
								<div className="share-links">
									<h4>Share</h4>
									<Link to="https://www.facebook.com/sharer.php?u=" target="_blank">
										<svg id="facebook" xmlns="http://www.w3.org/2000/svg" width="25" height="25.001" viewBox="0 0 25 25.001">
										<path id="Shape" d="M11.816,25H3.662A3.666,3.666,0,0,1,0,21.338V3.662A3.666,3.666,0,0,1,3.662,0H21.338A3.666,3.666,0,0,1,25,3.662V21.338A3.666,3.666,0,0,1,21.338,25H14.747V16.114H18.52l.488-2.93H14.747V10.254a1.466,1.466,0,0,1,1.464-1.464h2.93V5.859H15.478a3.666,3.666,0,0,0-3.662,3.662v3.662H8.887v2.93h2.929V25Zm4.395-7.423v5.957h5.127a2.2,2.2,0,0,0,2.2-2.2V3.662a2.2,2.2,0,0,0-2.2-2.2H3.662a2.2,2.2,0,0,0-2.2,2.2V21.338a2.2,2.2,0,0,0,2.2,2.2h6.69V17.578H7.422V11.719h2.929v-2.2a5.132,5.132,0,0,1,5.126-5.126h5.127v5.859H16.211v1.465h4.527l-.976,5.859Z" fill="#5b97d3"></path>
										</svg>
									</Link>
									<Link to="https://twitter.com/share?url=&amp;text=&amp;via=#&amp;hashtags=#" target="_blank">
										<svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 25">
										<g id="twitter" transform="translate(0 0)">
										<path id="Shape" d="M11.415,25C6.408,25,2.451,24.117.557,22.578L.52,22.548l-.033-.033a1.565,1.565,0,0,1-.4-1.634L.1,20.831a1.569,1.569,0,0,1,1.431-.994,12.791,12.791,0,0,0,3.418-.476,6.505,6.505,0,0,1-3.419-3.988,1.44,1.44,0,0,1,.915-1.868A9.5,9.5,0,0,1,.506,10l-.012-.04-.008-.04a1.486,1.486,0,0,1,.676-1.579,1.438,1.438,0,0,1,.691-.2,7.5,7.5,0,0,1-.553-1.7,7.186,7.186,0,0,1,.751-4.745l.186-.375A1.041,1.041,0,0,1,3,.753,1.021,1.021,0,0,1,3.165.74a1.041,1.041,0,0,1,.734.306l.339.343a15.971,15.971,0,0,0,9.224,5.1,7.407,7.407,0,0,1,1.984-4.276A6.931,6.931,0,0,1,20.414,0h.013a10.008,10.008,0,0,1,4.108,1.35c.9-.3,2-.767,3.054-1.222A1.36,1.36,0,0,1,28.166,0a1.387,1.387,0,0,1,1.28,1.927c-.081.229-.173.452-.273.663a1.4,1.4,0,0,1,.407.283A1.53,1.53,0,0,1,29.956,4.3l-.014.049a5.839,5.839,0,0,1-2.312,3.2A18.592,18.592,0,0,1,22.766,19.9,15.409,15.409,0,0,1,11.415,25ZM3.5,15.534a4.752,4.752,0,0,0,3.775,2.7,1.05,1.05,0,0,1,.308,1.958,12.326,12.326,0,0,1-5.34,1.4c1.792,1.023,5.22,1.635,9.17,1.635A13.685,13.685,0,0,0,21.6,18.547,16.844,16.844,0,0,0,25.874,7.178V7.13a1.047,1.047,0,0,1,.553-.925A3.742,3.742,0,0,0,28.043,4.4a1.028,1.028,0,0,1-.992-.41,1.051,1.051,0,0,1-.007-1.239,5.669,5.669,0,0,0,.392-.626c-.836.355-1.806.751-2.647,1.009a1.094,1.094,0,0,1-.32.047,1.108,1.108,0,0,1-.545-.142,8.536,8.536,0,0,0-3.492-1.261,5.5,5.5,0,0,0-5.261,5.6,1.049,1.049,0,0,1-.379.809,1.025,1.025,0,0,1-.86.219C9.152,7.449,6.289,5.994,3.37,3.034A5.3,5.3,0,0,0,3.028,6.1,6.5,6.5,0,0,0,4.55,9.082a1.049,1.049,0,0,1,.1,1.245,1.026,1.026,0,0,1-.876.493,1.042,1.042,0,0,1-.271-.036,4.671,4.671,0,0,1-.967-.375,8.837,8.837,0,0,0,3,3.518,1.053,1.053,0,0,1,.392,1.21,1.039,1.039,0,0,1-.978.7l-.077,0A4.647,4.647,0,0,1,3.5,15.534Z" fill="#5b97d3"></path>
										</g>
										</svg>
									</Link>
									<Link to="https://www.linkedin.com/shareArticle?url=&amp;title=" target="_blank">
										<svg id="linkedin" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25">
										<path id="Shape" d="M22.071,25H2.93A2.933,2.933,0,0,1,0,22.071V2.93A2.933,2.933,0,0,1,2.93,0H22.071A2.933,2.933,0,0,1,25,2.93V22.071A2.933,2.933,0,0,1,22.071,25ZM2.93,1.953a.978.978,0,0,0-.976.976V22.071a.978.978,0,0,0,.976.976H22.071a.978.978,0,0,0,.976-.976V2.93a.978.978,0,0,0-.976-.976Zm10.352,18.7H9.961V9.619h3.32v1.5a3.539,3.539,0,0,1,3.238-1.7c3.391,0,4.086,2.063,4.086,5.16v6.07h-3.37V15.267c0-1.161,0-2.916-1.811-2.916-1.463,0-2.144.9-2.144,2.824v5.479Zm-5.468,0H4.395V9.619H7.813V20.653ZM6.153,8.105a2,2,0,1,1,2-2A2,2,0,0,1,6.153,8.105Z" fill="#5b97d3"></path>
										</svg>
									</Link>
								</div>
							</div>
							<div className="post-sidebar">
								<div className="block-item latest-posts">
									<h4>Latest Posts</h4>	
									<SidebarTemplate />
								</div>
							</div>
						</div>
					</div>
				</div>
			</>
	)
}

export default NewsTemplate

export const query = graphql`
    query NewsTemplateQuery($id: String!) {
        strapiLatestNews (id: {eq: $id}) {
			newstitle
			slug
			newsdescription
			authorname
			newsdate(formatString: "DD MMM, YYYY")
			authorimage {
			  extension
			  publicURL
			}
	  }
    }
`