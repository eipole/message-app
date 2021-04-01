const endpoint = "https://odsc1.herokuapp.com/v1/graphql"

export async function createPost(userId, caption) {
  const response = await fetch(`${endpoint}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-hasura-admin-secret": process.env.REACT_APP_HASURA
    },
    body: JSON.stringify({
      query: `
      mutation createPost(
        $userId: uuid!
         $caption: String!
      ) {
        insert_posts(
          objects: {
            user_id: $userId
             caption: $caption
          }
        ) {
          affected_rows
        }
      }
    `,
      variables: userId,
      caption
    })
  })
  const data = await response.json()
  console.log(data)
  return data
}

export async function createUser(userId, username, email) {
  const response = await fetch(`${endpoint}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: ` 
        mutation createUser($userId: String!, $username: String!, $email: String! 
            ) {
         insert_users(objects: {user_id: $userId, username: $username, email: $email}) {
           returning {
             email
             id
             user_id
             username
           }
         }
       }
      `,
      variables: userId,
      username,
      email
    })
  })
  const data = await response.json()
  return data
}

export async function getPosts() {
  const response = await fetch(`${endpoint}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-hasura-admin-secret": process.env.REACT_APP_HASURA
    },
    body: JSON.stringify({
      query: ` 
        query {
            posts {
              caption
              id
              user_id
              user {
                username
              }
            }
          }
          
        `
    })
  })
  const data = await response.json()
  return data
}

export async function deletePost(id) {
  const response = await fetch(`${endpoint}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-hasura-admin-secret": process.env.REACT_APP_HASURA
    },
    body: JSON.stringify({
      query: `
      mutation ($id: uuid!) {
        delete_posts(where: {id: {_eq: $id}}) {
          returning {
            id
            user_id
          }
        }
      }
      `,
      variables: id
    })
  })
  const data = await response.json()
  return data
}
