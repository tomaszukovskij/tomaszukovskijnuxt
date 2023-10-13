import gql from 'graphql-tag';

export const HomePage = gql`
  query HomePage {
    pages {
      nodes {
        homepage {
          businessPrice
          businessSalePrice
          lookbookPrice
          lookbookSalePrice
          portraitsPrice
          portraitsSalePrice
          businessImage {
            altText
            id
            sourceUrl
            slug
          }
          lookbookImage {
            altText
            slug
            sourceUrl
            id
          }
          portraitsImage {
            altText
            slug
            sourceUrl
            id
          }
        }
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
        }
      }
    }
  }`
