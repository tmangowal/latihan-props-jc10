import React from 'react'
import LoginChecker from './LoginChecker'

class Login extends React.Component{
    state = {
        nama : '',
        isLoggedIn : false
    }

    onChangeHandler = (e) => {
        this.setState({nama : e.target.value})
    }

    render(){
        return(
            <div className='container'>
                <div className="row mt-4">
                    <div className="col-8">
                        <input type='text' onChange={this.onChangeHandler} className='form-control' placeholder="Username"/>
                    </div>
                    <div className="col-4">
                        <input type="button" onClick={() => this.setState({isLoggedIn : true})} value="LOGIN" className='btn btn-primary btn-block'/>
                    </div>
                </div>

                <div className="row mt-3">
                    <LoginChecker username={this.state.nama} sasuke={this.state.isLoggedIn} />
                </div>
            </div>
        )
    }
}

export default Login