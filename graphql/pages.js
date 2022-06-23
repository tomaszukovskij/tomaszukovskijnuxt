import gql from 'graphql-tag';

export const peoplesPage = gql`
query peoplesPage($title: String) {
  pages(where: {title: $title}) {
    nodes {
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
