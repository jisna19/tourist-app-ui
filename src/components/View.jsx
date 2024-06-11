import React, { useState } from 'react'
import NavBar from './NavBar'

const View = () => {
    const [data, changedata] = useState([
        {
            "name": "Munnar",
            "areaCode": "13242",
            "description": "Famous for the tea estates, greenery, winding roads, blanket of mist, and viewpoints, Munnar is a hill station in Kerala, located in the Idukki district. Lying in the Western Ghats at 1600 metres, it is one of the most sought after and visited travel destinations globally...",
            "bestTime": "September to May",
            "url": "https://www.holidify.com/images/bgImages/MUNNAR.jpg"
        },
        {
            "name": "Varkala",
            "areaCode": "74242",
            "description": "Varkala is a coastal town in the southern part of Kerala known for the unique 15m high 'Northern Cliff' adjacent to the Arabian Sea. Located approximately 50 kilometers north of Thiruvananthapuram (Trivandrum), the capital city of Kerala, Varkala offers a perfect blend of natural beauty, s...",
            "bestTime": "October to February",
            "url": "https://www.holidify.com/images/bgImages/VARKALA.jpg"
        },
        {
            "name": "Vagamon",
            "areaCode": "3892",
            "description": "Vagamon, also known as Wagamon, is a tranquil hill station nestled near the border of Kottayam and Idukki districts in Kerala. Offering a serene retreat from the hustle and bustle of city life, Vagamon boasts meandering rivulets, verdant hills, tea gardens, pine forests...",
            "bestTime": "October - March",
            "url": "https://www.holidify.com/images/bgImages/VAGAMON.jpg"
        },
        {
            "name": "Munnar",
            "areaCode": "95242",
            "description": "Famous for its resorts and ayurvedic massage centres, Kovalam is a coastal town located around 13 km from Thiruvananthapuram in Kerala. The largest beach in Kovalam is the lighthouse beach that features a 30-metre tall lighthouse. The other two adjacent beaches are Samudra beach and Hawa beach....",
            "bestTime": "October to February",
            "url": "https://www.holidify.com/images/bgImages/KOVALAM.jpg"
        },

    ])
    return (
        <div>
            <NavBar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            {
                                data.map(
                                    (value, index) => {
                                        return <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                                            <div className="card">
                                                <img src={value.url} class="card-img-top" alt="..." />
                                                <div class="card-body">
                                                    <h5 class="card-title">{value.name}</h5>
                                                    <p class="card-text">Areacode:{value.areaCode}</p>
                                                    <p class="card-text">{value.description}</p>
                                                    <p class="card-text">Best Time:{value.bestTime}</p>
                                                    <a href="#" class="btn btn-primary">Know more</a>
                                                </div>
                                            </div>
                                        </div>
                                    }
                                )
                            }


                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default View