import '../App.css';

const Home = () => {

    return (
        <>
        <div className='App'>
            <div >
                <h2 className='select-heading'>Select Theme</h2>
                <div className='space'>
                <button className='btn'>Numbers</button> 
                <button className='btn'>Icons</button>
                </div>
                <h2 className='select-heading'>Numbers of Players</h2>
                <div className='space'>
                <button className='btn-numbers'>1</button>
                <button className='btn-numbers'>2</button>
                <button className='btn-numbers'>3</button>
                <button className='btn-numbers'>4</button>
                </div>
                <h2 className='select-heading'>Grid Size</h2>
                <div className='space'>
                <button className='btn'>4x4</button>
                <button className='btn'>6x6</button>
                </div>
                <br/>
                <button className='btn-start'>Start Game</button>

            </div>
            </div>
        </>
    )
}

export default Home;