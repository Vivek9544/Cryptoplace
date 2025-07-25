import React,{useContext} from 'react';
import './Navbar.css'
import logo from '../../assets/logo.png'
// import arrow_icon from '../../assets/arrow_icon.png'
import {CoinContext} from '../../context/CoinContext'
import {Link} from 'react-router-dom'

const Navbar=()=>{

    const {setCurrency}=useContext(CoinContext)// object destructuring

    const currencyHandler=(event)=>{
        switch(event.target.value){
            case "usd":{
                setCurrency({name:"usd",symbol:"$"});
                break;
            }
            case "eur":{
                setCurrency({name:"eur",symbol:"€"});
                break;
            }
            case "inr":{
                setCurrency({name:"inr",symbol:"₹"});
                break;
            }
            default:{
                setCurrency({name:"usd",symbol:"$"});
                break;
            }
        }
    }

    return(
        <div className='navbar'>
            <Link to={'/'}><img src={logo} alt="" className='logo'/></Link>
            <ul>
                <Link to={'/'}><li id='Home'>Home</li></Link>
            </ul>
            <div className="nav-right">
                <select name="" id="" onChange={currencyHandler}>
                    <option value="usd">USD</option>
                    <option value="eur">EUR</option>
                    <option value="inr">INR</option>
                </select>
            </div>
        </div>
    )
}

export default Navbar