import gql from 'graphql-tag';

export const singlePage = gql`
  query singlePage($title: String) {
    pages(where: {title: $title}) {
      nodes {
        content,
        peoplesPage {
          title
          gallery {
            altText
            slug
            sourceUrl
          }
          galleryMobile {
            altText
            slug
            sourceUrl
          }
        }
        slug
        title
      }
    }
  }`

export const aboutPage = gql`
  query aboutPage {
    pages(where: {id: 262}) {
      nodes {
        content
      }
    }
  }`
