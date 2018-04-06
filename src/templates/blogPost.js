import React from "react";
import styled from 'styled-components';


const BlogPostContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2em;
  align-items: center;
  justify-content: center;
`

const BlogPost = styled.div`
  display: flex;
  flex-direction: column;
`

const Title = styled.div`
  display: flex;
  font-size: 2em;
  margin-bottom: 0.5em;
`

const Subtitle = styled.div`
  display: flex;
  color: #999;
  margin-bottom: 1.5em;
`

const BlogPostContent = styled.div`
  text-align: left;
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
        <Subtitle>By {frontmatter.author}, {frontmatter.date}</Subtitle>
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