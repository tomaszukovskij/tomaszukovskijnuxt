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
            mediaDetails {
              sizes {
                width
                height
              }
            }
            caption
            altText
            description
          }
          headingText
          headingTextEn
          serviceBulletPointLt
          serviceBulletPointEn
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
