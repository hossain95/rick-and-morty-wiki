import React from 'react';
import { Link } from 'react-router-dom';
function EpisodeCharacters(props)
{
    const characters = props.data;
    //console.log(characters);
    return (
        <div>
            <div className="header">
                <h1>Characters</h1>
            </div>
            {characters.map((data) =>
            {
                return(
                    <div key={data.id} className="card-profile-section">
                        <div className="profile-card-img">
                            <img src={data.image} alt={data.image} />
                        </div>
                        <div className="profile-card-info">
                            <div className="proflie-info-name">
                                <p>{data.name}</p>
                            </div>
                            <div>
                                <p><code> Gender: </code><code>{data.gender}</code></p>
                            </div>
                            <div>
                                <p><code> status: </code><code>{data.status}</code></p>
                            </div>
                            <div>
                                <p><code>Location: </code><code>{data.location}</code></p>
                            </div>
                            <Link to='/episodes' className='btn btn-primary btn-block'>Back</Link>
                        </div>
                </div>
                )
            })}
        </div>
    )
}

export default EpisodeCharacters;
