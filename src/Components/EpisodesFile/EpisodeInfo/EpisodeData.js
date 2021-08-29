import React from 'react'
import { useQuery, gql } from "@apollo/client";
import EpisodeBasicInfo from './EpisodeBasicInfo';
import EpisodeCharacters from './EpisodeCharacters';
const QueryEpisode = (id) =>
{
    const episodeByid = gql`
    {
        episodesByIds(ids:${id})
        {
            id
            name
            air_date
            episode
            characters
            {
                id
                name
                status
                gender
                image
                location
                {
                    name
                }
            }
        }
    }
`;
  return episodeByid;
}

function EpisodeData(props)
{
    const id = props.id;
    const EpisodeByid = QueryEpisode(id);

    const { data, loading, error } = useQuery(EpisodeByid);
    if (loading)
    {
        return (
            <div className="center">
                <h1>Loading...</h1>
            </div>
        )
    }
    if (error) return <pre>{error.message}</pre>
    var Data = data.episodesByIds[0];
    //console.log(Data);

    const EpisodeBasicInfoData =
    {
        "id" : Data.id,
        "name" : Data.name,
        "air_date" : Data.air_date,
        "episode" : Data.episode,
    }
    const EpisodeCharactersData = [];
    
    const charactersAndLocation = Data.characters;
    //console.log(charactersAndLocation);
    //console.log(EpisodeBasicInfo);
    for(var i = 0; i < charactersAndLocation.length; i++)
    {
        const data =
        {
            "id" : charactersAndLocation[i].id,
            "name" : charactersAndLocation[i].name,
            "gender" : charactersAndLocation[i].gender,
            "status" : charactersAndLocation[i].status,
            "image" : charactersAndLocation[i].image,
            "location" : charactersAndLocation[i].location.name,

        }
        EpisodeCharactersData.push(data);
    }
    //console.log(EpisodeCharacters);
    return (
        <div>
            <div>
                <EpisodeBasicInfo data ={EpisodeBasicInfoData} />
            </div>
            <div>
                <EpisodeCharacters data = {EpisodeCharactersData} />
            </div>
        </div>
    )
}

export default EpisodeData
