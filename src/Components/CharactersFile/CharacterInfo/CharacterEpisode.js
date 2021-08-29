import React from 'react'
import { Link } from 'react-router-dom';
function CharacterEpisode(props)
{
    const session = (str) =>
    {
        return str.slice(1, 3);
    }
    const episode = (str) =>
    {
        return str.slice(4, 6);
    }
    const temData = props.data;
    const Data = temData.episode;
    console.log(Data);
    return (
        <div>
            <div className="header">
                <h1>Episodes</h1>
            </div>
            {Data.map((data) =>
            {
                return(
                    <div key={data.id} className="card-center">
                        <div className="episode-card">
                            <div className="proflie-info-name">
                                <h3>{data.name}</h3>
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
                            <Link to='/characters' className='btn btn-primary btn-block'>Back</Link>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default CharacterEpisode
