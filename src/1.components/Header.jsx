import React from 'react'

class Header extends React.Component{

    render(){

        const {huruf, nama} = this.props
        const {warna, tinggi, lebar} = huruf

        return(
            <div className='text-center'>
                <h1>{nama}</h1>
                <h1>{warna}</h1>
                <h1>{tinggi}</h1>
                <h1>{lebar}</h1>
            </div>
        )
    }
}

export default Header