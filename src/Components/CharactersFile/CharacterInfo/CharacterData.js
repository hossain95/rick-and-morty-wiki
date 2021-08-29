import React from 'react'
import { useQuery, gql } from "@apollo/client";
import CharacterProfile from './CharacterProfile';
import CharacterEpisode from './CharacterEpisode';

const QueryProfile = (id) =>
{
    const characterbyid = gql`
    {
        charactersByIds(ids:${id})
        {
            id
            name
            status
            species
            gender
            image
            location
            {
                name
            }
            episode
            {
                id
                name
                air_date
                episode
            }
        }
    }
`;
  return characterbyid;
}


function CharacterData(props)
{
    const id = props.id;
    const characterbyid = QueryProfile(id);

    const { data, loading, error } = useQuery(characterbyid);
    if (loading)
    {
        return (
            <div className="center">
                <h1>Loading...</h1>
            </div>
        )
    }
    if (error) return <pre>{error.message}</pre>
    var Data = data.charactersByIds[0];
    //console.log(Data);

    const profileData =
    {
        "id" : Data.id,
        "name" : Data.name,
        "gender" : Data.gender,
        "status" : Data.status,
        "species" : Data.species,
        "image" : Data.image,
        "location" : Data.location.name,
    }
    const episodeData =
    {
        "episode": Data.episode,
    }
    //console.log(profileData);
    //console.log(episodeData);

    return (
        <div>
            <div>
                <CharacterProfile data ={profileData} />
            </div>
            <div>
                <CharacterEpisode data={episodeData} />
            </div>
        </div>
    )
}

export default CharacterData;
