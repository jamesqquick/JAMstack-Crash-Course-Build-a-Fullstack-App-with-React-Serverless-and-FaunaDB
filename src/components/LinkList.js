import Reactfrom 'react';
import LinkCard from './LinkCard';

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
            <div className="mt-5">
                <h2 className="my-4">Links</h2>

                {links &&
                    links
                        .filter((link) => !link.archived)
                        .map((link) => (
                            <LinkCard
                                link={link}
                                deleteLink={deleteLink}
                                archiveLink={archiveLink}
                            />
                        ))}
                <h2 className="my-4">Archived Links</h2>
                {links &&
                    links
                        .filter((link) => link.archived)
                        .map((link) => (
                            <LinkCard
                                link={link}
                                deleteLink={deleteLink}
                                archiveLink={archiveLink}
                            />
                        ))}
            </div>
        </>
    );
}
