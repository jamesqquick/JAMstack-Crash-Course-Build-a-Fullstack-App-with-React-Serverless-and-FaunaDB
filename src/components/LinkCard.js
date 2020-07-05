import React from 'react';

export default function LinkCard({ link, archiveLink, deleteLink }) {
    return (
        <li className="card my-2" key={link._id}>
            <div className="card-header">{link.name}</div>
            <div className="card-body">
                <p>{link.description}</p>
                <a href={link.url}>{link.url}</a>
            </div>
            <div className="card-footer flex">
                {!link.archived && (
                    <button
                        className="btn btn-warning mr-2"
                        onClick={() => archiveLink(link)}
                    >
                        Archive
                    </button>
                )}
                <button
                    className="btn btn-danger"
                    onClick={() => deleteLink(link._id)}
                >
                    Delete
                </button>
            </div>
        </li>
    );
}
