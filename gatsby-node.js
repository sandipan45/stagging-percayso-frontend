/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const webpack= require('webpack');
exports.onCreateWebpackConfig = ({
    stage,
    rules,
    loaders,
    plugins,
    actions,
  }) => {
		actions.setWebpackConfig({
		  plugins: [
			new webpack.ProvidePlugin({
			  $: 'jquery',
			  jQuery: 'jquery',
			  'window.jQuery': 'jquery'
			}),
		  ],
		})
  }

const path = require('path')
const makeRequest = (graphql, request) => new Promise((resolve, reject) => {
    resolve(
        graphql(request).then(result => {
            if(result.errors){
                reject(result.errors)
            }

            return result
        })
    )
})
exports.createPages = ({actions, graphql}) => {
    const {createPage} = actions

    const generateNewsPages = makeRequest(graphql, `
        {
            allStrapiLatestNews {
                edges {
                    node {
                        id
                        slug
                    }
                }
            }
			allStrapiCmsPages {
                edges {
                    node {
                        id
                        slug
                    }
                }
            }
        }
    `).then(result => {
        result.data.allStrapiLatestNews.edges.forEach(({node}) => {
            createPage({
                path: `/news/${node.slug}`,
                component: path.resolve(`src/templates/news.js`),
                context: {
                    id: node.id
                }
            })
        })
		result.data.allStrapiCmsPages.edges.forEach(({node}) => {
            createPage({
                path: `/${node.slug}`,
                component: path.resolve(`src/templates/cms.js`),
                context: {
                    id: node.id
                }
            })
        })
    })

    return Promise.all([generateNewsPages])
}
