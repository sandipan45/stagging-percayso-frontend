import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'


const SidebarTemplate = ({side}) => {
const data = useStaticQuery(graphql`
    query NewsSidebarQuery {
		allStrapiLatestNews (limit: 5, sort: {order: DESC, fields: newsdate}) {
			nodes {
			  newstitle
			  strapiId
			  newsdate(formatString: "DD MMM, YYYY")
			  newsfeaturedimage {
				extension
				publicURL
			  }
			}
		}
    }
  `)
	return(
			<>
				<ul>
					{data.allStrapiLatestNews.nodes.map(latestNews => (
					<li key={latestNews.strapiId}>
						<div className="image-thumb">
							<img src={latestNews.newsfeaturedimage.publicURL} alt="" width="100" height="106" />
						</div>
						<div className="content-info">
							<h5>{latestNews.newstitle}</h5>
							<div className="date">{latestNews.newsdate}</div>
						</div>
					</li>
					))}
				</ul>
			</>
	)
}

export default SidebarTemplate

