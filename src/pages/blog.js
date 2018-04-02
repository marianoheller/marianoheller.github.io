import React from 'react'
import Link from 'gatsby-link'


export default function BlogIndex(props) {
	const { allMarkdownRemark } = props.data; // data.markdownRemark holds our post data
	const { edges } = allMarkdownRemark;
	return (
		<div className="index-blog-container">
			{ edges.map( (edge) => {
				const { node } = edge;
				const html = node.html.slice(0,300) + "...";
				return (
				<div className="item-index-blog">
					<Link to={node.frontmatter.path} >
						<h2>{node.frontmatter.title}</h2>
					</Link>
					<div
					className="excerpt-item-index-blog"
					dangerouslySetInnerHTML={{ __html: html }}
					/>
				</div>
				)
			})}
		</div>
	);
}


export const pageQuery = graphql`
	query IndexQuery {
		allMarkdownRemark(limit: 10) {
			edges {
				node {
					html
					frontmatter {
						title
						path
					}
				}
			}
		}
	}
`;