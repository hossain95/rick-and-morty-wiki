import React from 'react'
import SearchEpisodes from './SearchEpisodes'
import { ApolloProvider, ApolloClient, InMemoryCache} from '@apollo/client';

function CallEpisodes()
{
    const client = new ApolloClient(
    {
        uri: "https://rickandmortyapi.com/graphql",
        cache: new InMemoryCache()
    });
    return (
        <div>
            <ApolloProvider client={client}>
                <SearchEpisodes />
            </ApolloProvider>,
        </div>
    )
}

export default CallEpisodes;
