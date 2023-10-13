import gql from 'graphql-tag';

export const projects = gql`
  query allProjects {
    allProjects {
      nodes {
        id
        slug
        title
        projects {
          description
          image {
            altText
            slug
            uri
            sourceUrl
          }
        }
      }
    }
  }`

export const singleProjects = gql`
  query singleProjects($slug: ID!) {
    projects(id: $slug, idType: URI) {
      projects {
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
