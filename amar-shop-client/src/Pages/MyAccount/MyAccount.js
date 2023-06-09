import React, { useContext } from 'react';
import DynamicHero from '../../Components/DynamicHero/DynamicHero';
import { useLocation } from 'react-router-dom';
import Login from './Login/Login';
import Register from './Register/Register';
import HeroBottom from '../../Components/HeroBottom/HeroBottom';
import { AuthContext } from '../../Context/AccountContext';
import RegisterFrom from './Register/RegisterFrom';

const MyAccount = () => {
    const { registerEmail, setRegisterEmail, user, loader } = useContext(AuthContext)

    const URL = useLocation()
    const path = URL.pathname.includes('my-account')
    let Pathname = {}
    if (path) {
        Pathname = {
            path1: 'My Account',
            path2: 'My account'
        }
    }
    console.log(user);

    if (loader) {
        return <div>Loading .....</div>
    }

    return (
        <div>
            <DynamicHero Pathname={Pathname} />

            {
                registerEmail ? <><RegisterFrom /></> :
                    <>
                        {user?.email ? <React.Fragment><div>User</div></React.Fragment> :
                            <div className='max-h-screen grid grid-cols-2 px-24 gap-5'>
                                <Login />
                                <Register />
                            </div>
                        }
                    </>
            }

            <HeroBottom />
        </div>
    );
};

export default MyAccount;