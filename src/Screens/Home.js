import './Home.css';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

export function Home() {
    let solar = "Solar energy is radiant light and heat from the Sun that is harnessed using a range of technologies such as solar power to generate electricity, solar thermal energy (including solar water heating), and solar architecture. It is an essential source of renewable energy, and its technologies are broadly characterized as either passive solar or active solar depending on how they capture and distribute solar energy or convert it into solar power. Active solar techniques include the use of photovoltaic systems, concentrated solar power, and solar water heating to harness the energy. Passive solar techniques include orienting a building to the Sun, selecting materials with favorable thermal mass or light-dispersing properties, and designing spaces that naturally circulate air."
    let hydro = "A photovoltaic (PV) cell, also known as a solar cell, is a semiconductor device that converts light into electrical energy through the photovoltaic effect. This process involves the generation of electric current or voltage when light photons strike the surface of the semiconductor material within the cell.";
    let wind = "Wind power is the use of wind energy to generate useful work. Historically, wind power was used by sails, windmills and windpumps, but today it is mostly used to generate electricity. This article deals mostly with wind power for electricity generation. Today, wind power is almost completely generated with wind turbines, generally grouped into wind farms and connected to the electrical grid. In 2021, wind supplied over 1800 TWh of electricity, which was over 6% of world electricity and about 2% of world energy. With about 100 GW added during 2021, mostly in China and the United States, global installed wind power capacity exceeded 800 GW. To help meet the Paris Agreement goals to limit climate change, analysts say it should expand much faster - by over 1% of electricity generation per year.";
    const [newsData, setNewsData] = useState([]);

    async function getNewsData() {
        const resp = await axios.get("https://newsapi.org/v2/everything?q=sustainable development&apiKey=dbecf8f4544f452892e5ec3b3f26b8cc");
        setNewsData(resp.data.articles);
    }

    useEffect(() => {
        getNewsData();
    }, []);
    return (
        <div className="home">
            <div className='blur'>
                <div id='home-content'>
                    <div >
                        <h1>SolarMate</h1>
                        <p id='intro'>
                            SolarMate is a solar energy and sustainable development-based information and product website that promotes renewable energy sources, such as solar, wind, and hydroelectric power. With the current scenario of global energy and resource management, sustainable development is essential for the efficient utilization and management of resources.
                        </p>
                        <div id="about-left"><NavLink to="/About" className="button">About Us</NavLink> </div>
                    </div>
                    {/* <img src='https://github.com/akankshaajoshi/EcoSavvy/blob/master/src/Resources/logo1.png?raw=true' className='logo2' alt='logo'/> */}
                </div>

                <div id='resource-section'>
                    <div id='res-1' className='resource'>
                        <div><h1>Solar Panels</h1>
                        <p>
                            {solar.slice(0, 400) + "..."}
                        </p>
                        </div>
                        <br />
                        <a href='https://en.wikipedia.org/wiki/Solar_panels' className="button">Read More</a>

                        <a className="button" href='https://www.amazon.in/Solar-Panels/b?ie=UTF8&node=3639338031'>Buy Here</a>
                        <br />
                        <img src='https://lumprodsta.blob.core.windows.net/prodcontainer/Images/b10f1ebb-4e14-45f4-823f-cf0ab0e1cf41_540W-Mono-perc-half-cut-panel_1%20%281%29.png' className='im' alt='solar energy' />
                    </div>
                    <div id='res-2' className='resource'>
                        <h1>Photovoltaic cells</h1>
                        <p>
                            {hydro.slice(0, 400) + "..."}
                        </p>
                        <br />
                        <a className="button" href='https://en.wikipedia.org/wiki/Solar_cell'>Read More</a>

                        <a className="button" href='https://www.energy.gov/energysaver/articles/energy-101-video-hydroelectric-power'>Know More</a>
                        <br />
                        <img src='data:image/png;base64,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' className='im' alt='hydro energy' />
                    </div>
                    <div id='res-3' className='resource'>
                        <h1>Wind Energy</h1>
                        <p>
                            {wind.slice(0, 400) + "..."}
                        </p>
                        <br />
                        <a className="button" href='https://en.wikipedia.org/wiki/inverters'>Read More</a>

                        <a className="button" href='https://dir.indiamart.com/impcat/wind-turbine.html'>Buy Here</a>
                        <br />
                        <img src='https://github.com/akankshaajoshi/EcoSavvy/blob/master/src/Resources/wind%20power.jpg?raw=true' className='im' alt='wind energy' />
                    </div>
                </div>

                <h1>News</h1>
                <div id='news-section'>
                    {newsData.slice(0, 5).map((newsData, index) =>
                        <div key={index} id='vert-newsbox'>
                            <a target="_blank" href={newsData.url} rel='noreferrer'>
                                <div id='vert-news-content'>
                                    <h2 id='vert-news-title'>{newsData.title}</h2>
                                    {/* <p id='vert-news-para'>{newsData.description}</p> */}
                                </div>
                            </a>
                            <a target="_blank" href={newsData.url} rel='noreferrer'>
                                <img id='vert-news-img' src={newsData.urlToImage} width="200px" alt='newsImage' />
                            </a>
                        </div>
                    )}

                </div>
                <NavLink to='/News' className='button' id="read-more">Read More</NavLink>
            </div>
            <div id='footer'>
                Copyright@SolarMate2023
            </div>
        </div>
    )
}