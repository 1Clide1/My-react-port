import react from 'react';
import {MenuItems} from './MenuItems'
import './Navbar.css'
class Navbar extends react.Component{
    state= { clicked: false}
    // functions inside the constructor function have to be an arrow function
    // setState()
    handleClick= () =>{
        this.setState({ clicked: !this.state.clicked})
    }
    render(){
        return(
            <nav className='navbar-container'>
                <div className='logo'> <a className='logo-a' href='#About Me'>Brandon Diaz</a></div>
                <div className='menu-icon' onClick={this.handleClick}> <i className={this.state.clicked ? 'lni lni-cross-circle' : 'lni lni-menu'}></i></div>
                <ul className={this.state.clicked ? 'nav-ul active' : 'nav-ul'}>
                    {MenuItems.map((item, index) =>{
                        return(
                            // make sure li always has a key
                            <li key={index}><a className={item.cName} href={item.url}>{item.name}</a></li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}

// make sure to always export
export default Navbar