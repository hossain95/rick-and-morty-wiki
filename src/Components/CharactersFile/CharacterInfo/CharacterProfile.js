import React from 'react'
import '../../CharactersFile/CharacterStyle.css';
import { Link } from 'react-router-dom';
function CharacterProfile(props)
{
    const data = props.data;
    //console.log(data);
    return (
        <div>
            <div className="card-profile-section">
                <div className="header">
                    <h1>Basic Info</h1>
                </div>
                <div className="profile-card-img">
                    <img src={data.image} alt={data.image} />
                </div>
                <div className="profile-card-info">
                    <div className="proflie-info-name">
                        <p>{data.name}</p>
                    </div>
                    <div>
                        <p><code>Gender:</code><code>{data.gender}</code></p>
                    </div>
                    <div>
                        <p><code>Status:</code><code>{data.status}</code></p>
                    </div>
                    <div>
                        <p><code>Species:</code><code>{data.species}</code></p>
                    </div>
                    <div>
                        <p><code>Location:</code><code>{data.location}</code></p>
                    </div>

                    <Link to='/characters' className='btn btn-primary btn-block'>Back</Link>
                </div>
            </div>
        </div>
    )
}

export default CharacterProfile;