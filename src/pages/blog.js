import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

const IndexBlogContainer = styled.div`
display: flex;
flex-direction: column;
margin-top: 6em;
margin-bottom: 2em;
align-items: center;
justify-content: center;

font-family: 'Open Sans', sans-serif;
`

const BlogItem = styled(Link)`
color: black;
text-decoration: none;
padding: 1.5em 0;
&:hover {
	background-color: rgb(245,245,245);
}
`

const BlogTitle = styled.div`
color: #333;
text-decoration: none;
font-size: 2em;
cursor: pointer;
&:hover {
	font-weight: 500;
}
`

const BlogExcerpt = styled.div`
margin-top: 2em;
font-style: italic;
color: #555;
`

const BlogFooter = styled.div`
font-size: 0.8em;
color: #999;
text-align: right;
`

export default function BlogIndex(props) {
	const { allMarkdownRemark } = props.data; // data.markdownRemark holds our post data
	const { edges } = allMarkdownRemark;
	return (
		<IndexBlogContainer>
		{ edges.map( (edge) => {
			const { node } = edge;
			const html = node.html.slice(0,300) + "...";
			return (
				<BlogItem to={node.frontmatter.path}>
					<BlogTitle >
					{node.frontmatter.title}
					</BlogTitle>
					<BlogExcerpt
					dangerouslySetInnerHTML={{ __html: html }}
					/>
					<BlogFooter>
					{node.frontmatter.date}
					</BlogFooter>
				</BlogItem>
			)
		})}
		</IndexBlogContainer>
	);
}


export const pageQuery = graphql`
query IndexQuery {
	allMarkdownRemark(limit: 10, sort: { fields: [ frontmatter___date ],  order: DESC}) {
		edges {
			node {
				html
				frontmatter {
					title
					path
					date(formatString: "MMMM DD, YYYY")
				}
			}
		}
	}
}
`;