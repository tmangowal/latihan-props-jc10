import React from 'react'

const Home = (ganti) => {
    const {funKali} = ganti

    return(
        <div className='text-center'>
            <h1>{funKali}</h1>
        </div>
    )
}

export default Home