import gql from 'graphql-tag';

export const HomePage = gql`
  query HomePage {
    pages {
      nodes {
        homepage {
          businessPrice
          lookbookPrice
          portraitsPrice
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
      }
    }
  }`
