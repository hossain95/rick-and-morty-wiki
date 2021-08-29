import React from 'react'
import { useParams } from 'react-router-dom';
import EpisodeServer from '../Components/EpisodesFile/EpisodeInfo/EpisodeServer';

function Episode()
{
    const { id } = useParams();
    return (
        <div>
            <EpisodeServer id={id} />
        </div>
    )
}

export default Episode
