import React from 'react'
import { Link } from 'react-router-dom';
import {EpisodesContext} from './SearchEpisodes';




function ShowEpisodes()
{
    const findPhoto = (id) =>
    {
        if(id > 20)
        {
            return require(`./EpisodesImages/id1.png`).default;
        }
        return require(`./EpisodesImages/id${id}.png`).default;;
    }
    const session = (episode) =>
    {
        return episode.slice(1, 3);
    }
    const episode = (episode) =>
    {
        return episode.slice(4, 6);
    }

    return (
        <div className="section search">
            <EpisodesContext.Consumer>
            {(AllData) =>
                {
                    return(
                        <div className="cards-center">
                            {AllData.map((data)=>
                            {
                                return(
                                    <article key={data.id} className="cards">
                                        <div className="cards-footer">
                                            <div className="episodesName">
                                                <h4>{data.name}</h4>
                                            </div>
                                            <div className="sessionEpisode">
                                                <h5>Session {session(data.episode)}, Episode {episode(data.episode)}</h5>
                                            </div>
                                            <div className="img-container">
                                                <img src={findPhoto(data.id)} alt="user_photo" />
                                            </div>
                                            <div className="air-date">
                                                <p> <code>Air-Date</code> <code>{data.air_date}</code></p>
                                            </div>
                                        <Link to={`/episode/${data.id}`} className="btn btn-primary btn-block">Details</Link>
                                    </div>
                                    </article>
                                )
                            })}
                        </div>
                    )
                }}
            </EpisodesContext.Consumer>
        </div>
    )
}

export default ShowEpisodes
