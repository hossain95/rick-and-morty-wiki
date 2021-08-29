import React from 'react';
import EpisodeData from './EpisodeData';
import { ApolloProvider, ApolloClient, InMemoryCache} from '@apollo/client';

function EpisodeServer(props)
{
    const id = props.id;
    const client = new ApolloClient(
    {
        uri: "https://rickandmortyapi.com/graphql",
        cache: new InMemoryCache()
    });
    return (
        <div>
            <ApolloProvider client={client}>
                <EpisodeData id={id} />
            </ApolloProvider>,
        </div>
    )
}

export default EpisodeServer;
