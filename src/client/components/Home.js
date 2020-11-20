import React from 'react'

console.log('CLIENT RUNS')

const Home = () => {
    return <div>I am a different component now.
<button
            onClick={() => { console.log('hello world') }}
        >
            Press Me
        </button>
    </div >
}

export default Home