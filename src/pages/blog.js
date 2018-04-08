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
padding: 1.5em 1em;
&:hover {
	background-color: rgb(245,245,245);
	transition: background-color 0.3s;
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

const StyledBlogExcerpt = styled(BlogExcerpt)`
margin-top: 2em;
margin-bottom: 0.75em;
font-style: italic;
color: #555;
max-height: 5em;
overflow: hidden;
text-overflow: ellipsis;


`

const ReadMore = styled.div`
position: absolute;
z-index: 10;
top: 1em; 
left: 0;
width: 100%; 
text-align: center; 
margin: 0; padding: 30px 0; 
  
/* "transparent" only works here because == rgba(0,0,0,0) */
background-image: linear-gradient(to bottom, transparent, white);
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
			return (
				<BlogItem to={node.frontmatter.path}>
					<BlogTitle >
					{node.frontmatter.title}
					</BlogTitle>
					<StyledBlogExcerpt
					dangerouslySetInnerHTML={{ __html: node.html }}
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

function BlogExcerpt(props) {
	return (
		<div className={props.className}  dangerouslySetInnerHTML={props.dangerouslySetInnerHTML}>
			{/* <div></div> */}
			{/* <ReadMore>Read more...</ReadMore> */}
		</div>
	)
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