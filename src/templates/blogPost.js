import React from "react";
import styled from 'styled-components';


const BlogPostContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 6em;
  margin-bottom: 2em;
  align-items: center;
  justify-content: center;

  font-family: 'Open Sans', sans-serif;

`

const BlogPost = styled.div`
  display: flex;
  flex-direction: column;
`

const Title = styled.div`
  display: flex;
  font-size: 2em;
  margin-bottom: 0.5em;
  justify-content: center;
  text-align: center;
`

const Subtitle = styled.div`
  display: flex;
  color: #999;
  font-size: 1em;

  justify-content: center;
  text-align: center;
`

const BlogPostContent = styled.div`
  text-align: left;

  margin-top: 3em;
  margin-bottom: 3em;
`



export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark;
  return (
    <BlogPostContainer>
      <BlogPost>
        <Title>{frontmatter.title}</Title>
        <Subtitle>By {frontmatter.author} - {frontmatter.date}</Subtitle>
        <BlogPostContent
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </BlogPost>
    </BlogPostContainer>
  );
}


export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        author
      }
    }
  }
`;