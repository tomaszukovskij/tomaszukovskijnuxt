import gql from 'graphql-tag';

export const exhibitions = gql`
  query allExhibitions {
    allExhibitions {
      nodes {
        title
        slug
        id
        exhibitions {
          image {
            altText
            slug
            sourceUrl
            description
          }
        }
      }
    }
  }`

export const singleExhibition = gql`
  query singleExhibition($slug: ID!) {
    exhibitions(id: $slug, idType: URI) {
      exhibitions {
        description
        gallery {
          altText
          sourceUrl
          slug
          description
        }
      }
      slug
      title
    }
  },
`
