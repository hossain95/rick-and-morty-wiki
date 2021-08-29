import React from 'react'
import '../../EpisodesFile/EpisodeStyle.css';
import { Link } from 'react-router-dom';
function EpisodeBasicInfo(props)
{
    const data = props.data;
    //console.log(data);
    const session = (str) =>
    {
        return str.slice(1, 3);
    }
    const episode = (str) =>
    {
        return str.slice(4, 6);
    }
    const findPhoto = (id) =>
    {
        if(id > 20)
        {
            return require(`../../EpisodesFile/EpisodesImages/id1.png`).default;
        }
        return require(`../../EpisodesFile/EpisodesImages/id${id}.png`).default;;
    }
    return (
        <div>
            <div className="card-profile-section">
                <div className="header">
                    <h1>Basic Info</h1>
                </div>
                <div className="profile-card-img">
                    <img src={findPhoto(data.id)} alt={findPhoto(data.id)} />
                </div>
                <div className="profile-card-info">
                    <div className="proflie-info-name">
                        <p>{data.name}</p>
                    </div>
                    <div className="episode-style">
                        <p><code> Session: </code><code>{session(data.episode)}</code></p>
                    </div>
                    <div className="episode-style">
                        <p><code> Episode: </code><code>{episode(data.episode)}</code></p>
                    </div>
                    <div className="episode-style">
                        <p><code>Air-Date: </code><code>{data.air_date}</code></p>
                    </div>
                    <Link to='/episodes' className='btn btn-primary btn-block'>Back</Link>
                </div>
            </div>
        </div>
    )
}

export default EpisodeBasicInfo
