import React from 'react'


const HomePage = () => {
    return <div>I am a different component now.
<button
            onClick={() => { console.log('hello world') }}
        >
            Press Me
        </button>
    </div >
}

export default {
    component: HomePage
}
