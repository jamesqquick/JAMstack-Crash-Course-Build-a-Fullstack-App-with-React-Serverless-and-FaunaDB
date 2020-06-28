const GET_ALL_LINKS_QUERY = `
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

const CREATE_LINK_QUERY = `
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

module.exports = {
    GET_ALL_LINKS_QUERY,
    CREATE_LINK_QUERY,
};
