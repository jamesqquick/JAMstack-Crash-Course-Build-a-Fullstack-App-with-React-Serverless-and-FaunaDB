import React from 'react';
import LinkCard from './LinkCard';
export default function LinkList({ links, refreshLinks }) {
    return (
        <div>
            <h2 className="my-4">Links</h2>
            {links &&
                links
                    .filter((link) => !link.archived)
                    .map((link) => (
                        <LinkCard
                            key={link._id}
                            link={link}
                            refreshLinks={refreshLinks}
                        />
                    ))}
            <h2 className="my-4">Archived</h2>
            {links &&
                links
                    .filter((link) => link.archived)
                    .map((link) => (
                        <LinkCard
                            key={link._id}
                            link={link}
                            refreshLinks={refreshLinks}
                        />
                    ))}
        </div>
    );
}
