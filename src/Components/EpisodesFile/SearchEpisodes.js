import React from 'react'
import { useQuery, gql } from "@apollo/client";
import { createContext } from 'react';
import ShowEpisodes from './ShowEpisodes';

const FILMS_QUERY = gql`
  {
    episodes
    {
      results
      {
        id
        name
        air_date
        episode
        created
      }
    }
  }
`;

const EpisodesContext = createContext();

function SearchEpisodes()
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
    var Data = data.episodes.results;
    //console.log(Data);

    return (
        <div>
            <EpisodesContext.Provider value={Data}>
                <ShowEpisodes />
            </EpisodesContext.Provider>
        </div>
    )
}

export default SearchEpisodes;
export {EpisodesContext};