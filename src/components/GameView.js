// component to view 1 single game
import React from 'react';

class GameView extends React.Component {
    constructor(props) {
        super(props);
        let id = window.location.href.split('=')[1]
    }
    render() {
        return (
            <div>
                This is the Game View component.
            </div>
        )
    }
}

export default GameView;