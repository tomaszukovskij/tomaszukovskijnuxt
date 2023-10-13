import gql from 'graphql-tag';

export const prints = gql`
  query allPrints {
    allPrints {
      nodes {
        id
        slug
        title
        uri
        printSingle {
          printContent {
            listImage {
              altText
              id
              sourceUrl
              title
            }
            price
            sizes {
              size
            }
          }
        }
      }
    }
  }`

// export const singleProjects = gql`
//   query singleProjects($slug: ID!) {
//     projects(id: $slug, idType: URI) {
//       projects {
//         description
//         gallery {
//           altText
//           sourceUrl
//           slug
//           description
//         }
//       }
//       slug
//       title
//     }
//   },
// `
