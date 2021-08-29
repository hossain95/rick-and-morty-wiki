import React from 'react';
import { useParams } from 'react-router-dom';
import CharacterServer from '../Components/CharactersFile/CharacterInfo/CharacterServer';




function Character()
{
    const{id} = useParams();
    return (
        <div>
            <CharacterServer id={id} />
        </div>
    )
}

export default Character;
