//component to edit a game entry

import React from 'react';

class GameEdit extends React.Component {
    constructor(props) {
        super(props);
        let id = window.location.href.split('=')[1]
        this.state = {
        }
    }
    render() {
        return (
            <div>
                This is the Game Edit component.
            </div>
        )
    }
}

export default GameEdit;