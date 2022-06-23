import gql from 'graphql-tag';

export const peoples = gql`
  query allPeoples($search: String) {
    allPeoples(where: {search: $search})  {
      nodes {
        peoples {
          description
          image {
            altText
            link
            sizes
            uri
            sourceUrl
          },
          gallery {
            altText
            sourceUrl
          }
        }
        title
        id
        slug
      }
    }
  }`

export const singlePeople = gql`
  query peoples($slug: ID!) {
    peoples(id: $slug, idType: URI) {
      title
      peoples {
        description
        image {
          uri
        }
        gallery {
          altText
          id
          sourceUrl
        }
      }
    }
  },
`
