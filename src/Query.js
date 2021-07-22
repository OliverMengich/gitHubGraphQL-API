const githubQuery = {
    //pass the query to be executed
    /*query: `
    {
        viewer {
          name
          repositories(first: 10) {
            nodes {
              name
              description
              id
              url
            }
          }
        }
    }`*/
    query:`
    {
        viewer {
          name
        }
        search(query: "user:OliverMengich sort:updated-desc", type: REPOSITORY,first: 20) {
          nodes {
            ... on Repository {
              name
              id
              description
              url
              viewerSubscription
              licenseInfo{
                spdxId
              }
            }
          }
        }
      }
    `
  };
  export default githubQuery;