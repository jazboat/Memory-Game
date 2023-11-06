import '../App.css';

const Four = () => {

    return (
        <>
        <div className='memory-four'>
            <div className='top-header'>
                <h1 className='four-heading'>memory</h1>
                <div>
                <button className='btn-restart'>Restart</button>
                <button className='btn-new-game'>New Game</button>
                </div>
            </div>
            <div className='game-board'>
                <div className='game-grid'>
                    <div id='1' className='circle'>1</div>
                    <div id='2' className='circle'>2</div>
                    <div id='3' className='circle'>3</div>
                    <div id='4' className='circle'>4</div>
                    <div id='5' className='circle'>5</div>
                    <div id='6' className='circle'>6</div>
                    <div id='7' className='circle'>7</div>
                    <div id='8' className='circle'>8</div>
                    <div id='9' className='circle'>9</div>
                    <div id='10' className='circle'>10</div>
                    <div id='11' className='circle'>11</div>
                    <div id='12' className='circle'>12</div>
                    <div id='13' className='circle'>13</div>
                    <div id='14' className='circle'>14</div>
                    <div id='15' className='circle'>15</div>
                    <div id='16' className='circle'>16</div>
                </div>
                <div className='bottom-footer'>
                    <div id='p1' className='player'>
                        <h2 className='player-heading'>Player 1</h2>
                        <div className='score'>1</div>
                    </div>
                    <div id='p2' className='player'>
                        <h2 className='player-heading'>Player 2</h2>
                        <div className='score'>1</div>
                    </div>
                    <div id='p3' className='player'>
                        <h2 className='player-heading'>Player 3</h2>
                        <div className='score'>1</div>
                    </div>
                    <div id='p4' className='player'>
                        <h2 className='player-heading'>Player 4</h2>
                        <div className='score'>1</div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Four;