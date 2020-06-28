const { GET_ALL_LINKS_QUERY } = require('./utils/linkQueries');
const sendQuery = require('./utils/sendQuery');
const formatResponse = require('./utils/formatResponse');
exports.handler = async (event) => {
    try {
        const res = await sendQuery(GET_ALL_LINKS_QUERY);
        const data = res.allLinks.data;
        return {
            statusCode: 200,
            body: JSON.stringify(data),
        };
    } catch (err) {
        console.error(err);
        return formatResponse(500, { err: 'Something went wrong' });
    }
};
