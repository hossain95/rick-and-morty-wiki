import React from 'react'
import Search from './Search'
import { ApolloProvider, ApolloClient, InMemoryCache} from '@apollo/client';

function CallCharacters()
{
    const client = new ApolloClient(
    {
        uri: "https://rickandmortyapi.com/graphql",
        cache: new InMemoryCache()
    });
    return (
        <div>
            <ApolloProvider client={client}>
                <Search></Search>
            </ApolloProvider>,
        </div>
    )
}

export default CallCharacters;
