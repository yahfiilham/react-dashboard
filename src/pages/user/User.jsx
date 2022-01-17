import './user.css';
import nicoRobin from '../../components/widget/Nico-Robin.jfif';
import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const User = () => {
    return (
        <div className='user'>
            <div className="user-title-container">
                <h1 className="user-title">Edit User</h1>

                <Link to='/new-user'>
                    <button className="user-edit-button">Create</button>
                </Link>
            </div>

            <div className="user-container">
                <div className="user-show">
                    <div className="user-show-top">
                        <img src={nicoRobin} alt="" className='user-show-img' />
                        <div className="user-show-top-title">
                            <span className="user-show-user-username">Nico Robin</span>
                            <span className="user-show-user-title">Arkeolog</span>
                        </div>
                    </div>
                    <div className="user-show-bottom">
                            <span className="user-show-title">Account Details</span>
                            <div className="user-show-info">
                                <PermIdentity className='user-show-icon' />
                                <span className="user-show-info-title">shp_nicorobin</span>
                            </div>
                            <div className="user-show-info">
                                <CalendarToday className='user-show-icon' />
                                <span className="user-show-info-title">05-07-2002</span>
                            </div>
                            <span className="user-show-title">Contact Details</span>
                            <div className="user-show-info">
                                <PhoneAndroid className='user-show-icon' />
                                <span className="user-show-info-title">089517819502</span>
                            </div>
                            <div className="user-show-info">
                                <MailOutline className='user-show-icon' />
                                <span className="user-show-info-title">nico.robin@gmail.com</span>
                            </div>
                            <div className="user-show-info">
                                <LocationSearching className='user-show-icon' />
                                <span className="user-show-info-title">Ohara</span>
                            </div>
                    </div>
                </div>
                <div className="user-update">
                    <span className="user-update-title">Edit</span>
                    <form className="user-update-form">
                        <div className="user-update-left">
                            <div className="user-update-item">
                                <label className=''>Username</label>
                                <input 
                                    type="text" 
                                    placeholder="shp_nicorobin"
                                    className='user-update-input'
                                />
                            </div>
                            <div className="user-update-item">
                                <label className=''>Full Name</label>
                                <input 
                                    type="text" 
                                    placeholder="Nico Robin"
                                    className='user-update-input'
                                />
                            </div>
                            <div className="user-update-item">
                                <label className=''>Email</label>
                                <input 
                                    type="text" 
                                    placeholder="nico.robin@gmail.com"
                                    className='user-update-input'
                                />
                            </div>
                            <div className="user-update-item">
                                <label className=''>Phone</label>
                                <input 
                                    type="text" 
                                    placeholder="089517819502"
                                    className='user-update-input'
                                />
                            </div>
                            <div className="user-update-item">
                                <label className=''>Address</label>
                                <input 
                                    type="text" 
                                    placeholder="Ohara"
                                    className='user-update-input'
                                />
                            </div>
                        </div>
                        <div className="user-update-right">
                            <div className="user-update-upload">
                                <img src={nicoRobin} alt="" className='user-update-img' />
                                <label htmlFor="file"><Publish className='user-update-icon' /></label>
                                <input type="file" id='file' style={{display: 'none'}} />
                            </div>
                            <button className="user-update-button">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default User;
