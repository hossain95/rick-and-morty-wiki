import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import {CharactersContext} from './Search';

function DecorateCharacters()
{
    const[input, setInput] = useState("");

    const handleInput = (event) =>
    {
        event.preventDefault();
        
        const data = event.target.value;
        setInput(data);
    }
    return (
        <div>
            <section className='section search'>
                <form className='search-form'>
                    <div className='form-control'>
                        <label htmlFor='name'><h2>search character</h2></label>
                        <input type='text' name='name' id='name' onChange={handleInput}/>
                    </div>
                </form>
            </section>
            <CharactersContext.Consumer>
                {(AllData) =>
                {
                    return(
                        <div className="cards-center">
                            {AllData.filter((data) =>
                            {
                                var str = data.name;
                                if(str.length >= input.length)
                                {
                                    var sliceStr = str.slice(0, input.length);
                                    if(input.toLowerCase() === sliceStr.toLocaleLowerCase())
                                    {
                                        return data;
                                    }
                                }
                                else if(data.name.toLocaleLowerCase().includes(input.toLocaleLowerCase()))
                                {
                                    return data;
                                }
                            }).map((data)=>
                            {
                                return(
                                    <article key={data.id} className="cards">
                                        <div className="img-container">
                                            <img src={data.image} alt={data.image} />
                                        </div>
                                        <div className="cards-footer">
                                            <h4>Name: {data.name}</h4>
                                            <h4>Status: {data.status}</h4>
                                            <Link to={`/character/${data.id}`} className="btn btn-primary btn-block" >Details</Link>
                                        </div>
                                    </article>
                                )
                            })}
                        </div>
                    )
                }}
            </CharactersContext.Consumer> 
        </div>
    )
}

export default DecorateCharacters;
