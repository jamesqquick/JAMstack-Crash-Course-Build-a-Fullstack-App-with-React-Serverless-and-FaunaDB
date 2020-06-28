import React, { useEffect, useState } from 'react';

export default function LinkList({ links, linkDeleted, linkArchived }) {
    const deleteLink = async (id) => {
        try {
            await fetch('/api/deleteLink', {
                method: 'DELETE',
                body: JSON.stringify({ id }),
            });
            linkDeleted(id);
        } catch (err) {
            console.error(err);
        }
    };

    const archiveLink = async (link) => {
        link.archived = !link.archived;
        try {
            await fetch('/api/updateLink', {
                method: 'PUT',
                body: JSON.stringify({ link }),
            });
            linkArchived();
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <>
            <ul className="list-group mt-5">
                {links &&
                    links.map((link) => (
                        <li className="card my-2" key={link._id}>
                            <div className="card-header">{link.name}</div>
                            <div className="card-body">
                                <p>{link.description}</p>
                                <p>{link.url}</p>
                            </div>
                            <div className="card-footer flex">
                                <button
                                    className="btn btn-warning mr-2"
                                    onClick={() => archiveLink(link)}
                                >
                                    Archive
                                </button>
                                <button
                                    className="btn btn-danger"
                                    onClick={() => deleteLink(link._id)}
                                >
                                    Delete
                                </button>
                                {link.archived.toString()}
                            </div>
                        </li>
                    ))}
            </ul>
        </>
    );
}
