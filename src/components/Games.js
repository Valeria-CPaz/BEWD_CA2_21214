//component to view all games

import React from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';

class Games extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            games: [],
            isLoaded: true
        }

    }

    componentDidMount() {
        axios.get('/game')

            .then((response) => {
                // handle success when status is 200 and OK
                // populate the dogs array with the data from the server
                // set isLoaded to true to make sure we render the right values on screen
                this.setState({
                    games: response.data,
                    isLoaded: true
                })
            })
            .catch((error) => {
                // handle error
                this.setState({
                    isLoaded: false,
                    error
                })
            })

    }

    render() {
        //assign variables using the state
        const { isLoaded, error, games } = this.state;

        //conditional rendering: https://reactjs.org/docs/conditional-rendering.html
        //if we are waiting for our server to serve us the data render this part of code
        // also render this if the SERVER is offline

        if (!isLoaded) {
            return (
                <div>
                    The page is loading or the SERVER is down...
                </div>
            )

        } else {
            return (
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>year</th>
                                <th>name</th>
                                <th>studio</th>
                                <th>isAvailable</th>
                            </tr>
                        </thead>

                        <tbody>
                            {games.map(game => (
                                <tr key={game._id}>
                                    <td>{game._id}</td>
                                    <td>{game.year}</td>
                                    <td>{game.name}</td>
                                    <td>{game.studio}</td>
                                    <td>{game.isAvailable}</td>
                                    {/* https://reactjs.org/docs/conditional-rendering.html#inline-if-else-with-conditional-operator */}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )
        }
    }
}

export default Games;