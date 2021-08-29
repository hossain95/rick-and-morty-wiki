import React from 'react'
import CharacterData from './CharacterData';
import { ApolloProvider, ApolloClient, InMemoryCache} from '@apollo/client';
function CharacterServer(props)
{
    const id = props.id;
    //console.log(id);
    const client = new ApolloClient(
    {
        uri: "https://rickandmortyapi.com/graphql",
        cache: new InMemoryCache()
    });
    return (
        <div>
            <ApolloProvider client={client}>
                <CharacterData id={id} />
            </ApolloProvider>,
        </div>
    )
}

export default CharacterServer
