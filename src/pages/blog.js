import React from 'react'
import Link from 'gatsby-link'


export default function BlogIndex({
	data, // this prop will be injected by the GraphQL query below.
}) {
	console.log("DATA", data);
	const { markdownRemark } = data; // data.markdownRemark holds our post data
	const { frontmatter, html } = markdownRemark;
	return (
		<div className="blog-post-excerpt-container">
			<div className="blog-post-excerpt">
				<h1>{frontmatter.title}</h1>
				<h4>{frontmatter.date}</h4>
			</div>
		</div>
	);
}


export const pageQuery = graphql`
query IndexQuery($path: String!) {
	allMarkdownRemark(limit: 10) {
	  edges {
		node {
		  frontmatter {
			title
			path
		  }
		}
	  }
	}
  }
  
`;