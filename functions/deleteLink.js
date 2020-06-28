const { DELETE_LINK } = require('./utils/linkQueries');
const sendQuery = require('./utils/sendQuery');
const formatResponse = require('./utils/formatResponse');
exports.handler = async (event) => {
    if (event.httpMethod !== 'DELETE') {
        return formatResponse(405, { err: 'Method not supported' });
    }
    const { id } = JSON.parse(event.body);
    try {
        const { deleteLink: deletedLinkId } = await sendQuery(DELETE_LINK, {
            id,
        });
        return formatResponse(200, deletedLinkId);
    } catch (err) {
        console.error(err);
        return formatResponse(500, { err: 'Something went wrong' });
    }
};
