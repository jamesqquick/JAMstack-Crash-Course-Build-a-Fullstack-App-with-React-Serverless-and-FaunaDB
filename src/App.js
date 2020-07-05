import React, { useEffect, useState } from 'react';
import LinkForm from './components/LinkForm';
import LinkList from './components/LinkList';

function App() {
    const [links, setLinks] = useState([]);
    useEffect(() => {
        loadLinks();
    }, []);

    const loadLinks = async () => {
        try {
            const res = await fetch('/.netlify/functions/getLinks');
            const links = await res.json();
            setLinks(links);
        } catch (err) {
            console.error(err);
        }
    };

    const addLink = (link) => {
        setLinks((links) => [link, ...links]);
    };
    return (
        <div className="container py-5">
            <h1 className="text-center mb-5">List O' Links</h1>
            <LinkForm linkCreated={addLink} />

            <LinkList
                links={links}
                linkDeleted={loadLinks}
                linkArchived={loadLinks}
            />
        </div>
    );
}

export default App;
