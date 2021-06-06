# Activity

Fetch recent activity from Github

## Queries

### GraphQL

```graphql
{
  search(query: "author:nonissue", first: 10, type: ISSUE) {
    edges {
      node {
        ... on PullRequest {
          id
          title
          url
          pullState: state
        }
        ... on Issue {
          id
          title
          url
          issueState: state
        }
      }
    }
  }
}
```

This works!

```graphql
{
  user(login: "nonissue") {
    repositories(last: 5, isFork: false) {
      nodes {
        ... on Repository {
          name
          defaultBranchRef {
            name
            target {
              ... on Commit {
                history(first: 1) {
                  totalCount
                  nodes {
                    ... on Commit {
                      committedDate
                      additions
                      messageHeadline
                      author {
                        name
                        email
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
```
