const GET_LINKS = `
# Write your query or mutation here
query{
  allLinks{
    data {
      name
      _id
      url
      description
      completed
    }
  }
}`;

const CREATE_LINK = `
    mutation($name: String!, $url: String!, $description: String! ) {
        createLink( data: { name:$name, url: $url, description: $description, completed: false }) {
            name
            _id
            url
            description
            completed
        }
    }
`;

const UPDATE_LINK = `
  mutation($id: ID!, $completed: Boolean!, $name: String!, $url: String!, $description: String!  ) {
        updateLink( id: $id, data: { name:$name, url: $url, description: $description, completed: $completed }) {
            name
            _id
            url
            description
            completed
        }
    }
`;

const DELETE_LINK = `
  mutation($id: ID!) {
        deleteLink( id: $id) {
            _id
        }
    }
`;

module.exports = {
    GET_LINKS,
    CREATE_LINK,
    UPDATE_LINK,
    DELETE_LINK,
};
