import React, {createContext} from 'react';
import { useQuery, gql } from "@apollo/client";
import DecorateCharacters from './DecorateCharacters';

const FILMS_QUERY = gql`
  {
    characters
    {
        results
        {
            id
            name
            image
            status
        }
    }
  }
`;

const CharactersContext = createContext();

function Search()
{
    const { data, loading, error } = useQuery(FILMS_QUERY);
    if (loading)
    {
        return (
            <div className="center">
                <h1>Loading...</h1>
            </div>
        )
    }
    if (error) return <pre>{error.message}</pre>
    var Data = data.characters.results;
    console.log(Data);

    return (
        <div>
          <div>
              <CharactersContext.Provider value = {Data}>
                    <DecorateCharacters />
              </CharactersContext.Provider>
          </div>
        </div>
    )
}

export default Search;
export {CharactersContext};
