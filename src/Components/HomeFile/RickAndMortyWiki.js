import React from 'react'
function RickAndMortyWiki()
{
    return (
        <div>
            <div className="section">
                <div className="section-title">
                    <h1>Rick and Mory</h1>
                </div>
                <div className="about-paragraph">
                    <p>
                        <code>"Rick and Morty"</code> is an American adult animated science fiction sitcom created by <code>Justin Roiland</code> and <code>Dan Harmon</code> for Cartoon Network's nighttime programming block, Adult Swim. The series follows the misadventures of cynical mad scientist Rick Sanchez and his good-hearted, but fretful grandson Morty Smith, who split their time between domestic life and interdimensional adventures.
                        Roiland voices the eponymous characters, with Chris Parnell, Spencer Grammer and Sarah Chalke voicing the rest of Rick and Morty's family. The series originated from an animated short parody film of Back to the Future, created by Roiland for Channel 101, a short film festival co-founded by Harmon. The series has been acclaimed by critics for its originality, creativity and humor.
                        The fourth season premiered on November 10, 2019, and consists of ten episodes. A fifth season was confirmed in July 2020, as part of a long-term deal in May 2018 that ordered 70 new episodes over an unspecified number of seasons. The fifth season premiered on June 20, 2021 and will consist of ten episodes.
                    </p>
                </div>
                <div className="table">
                    <h1>Episodes</h1>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Session</th>
                                <th>Episodes</th>
                                <th>First aired</th>
                                <th>Lst aired</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>11</td>
                                <td>December 2, 2013</td>
                                <td>April 14, 2014</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>10</td>
                                <td>July 26, 2015</td>
                                <td>October 4, 2015</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>10</td>
                                <td>April 1, 2017</td>
                                <td>October 1, 2017</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>10</td>
                                <td>November 10, 2019</td>
                                <td>May 31, 2020</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>10</td>
                                <td>June 20, 2021</td>
                                <td>September 5, 2021</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default RickAndMortyWiki
