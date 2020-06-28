const { UPDATE_LINK } = require('./utils/linkQueries');
const sendQuery = require('./utils/sendQuery');
const formatResponse = require('./utils/formatResponse');
exports.handler = async (event) => {
    if (event.httpMethod !== 'PUT') {
        return formatResponse(405, { err: 'Method not supported' });
    }
    const { link } = JSON.parse(event.body);
    const { _id: id, archived, url, description, name } = link;
    try {
        const { updateLink: updatedLink } = await sendQuery(UPDATE_LINK, {
            id,
            archived,
            url,
            description,
            name,
        });
        return formatResponse(200, updatedLink);
    } catch (err) {
        console.error(err);
        return formatResponse(500, { err: 'Something went wrong' });
    }
};
