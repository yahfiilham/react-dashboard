import { Visibility } from '@mui/icons-material';
import './widget.css';
import nicoRobin from './Nico-Robin.jfif';

const WidgetSm = () => {
    return (
        <div className='widget-sm'>
            <h3 className="widget-title">New Join Members</h3>
            <ul className="widget-sm-list">
                <li className="widget-sm-list-item">
                    <img src={nicoRobin} alt="" className='widget-img' />
                    <div className="widget-sm-user">
                        <span className="widget-sm-username">Yahfi Ilham</span>
                        <span className="widget-sm-user-title">Front-end Dev</span>
                    </div>
                    <button className="widget-sm-button">
                        <Visibility className='widget-sm-icon' /> Display
                    </button>
                </li>
                <li className="widget-sm-list-item">
                    <img src={nicoRobin} alt="" className='widget-img' />
                    <div className="widget-sm-user">
                        <span className="widget-sm-username">Yahfi Ilham</span>
                        <span className="widget-sm-user-title">Front-end Dev</span>
                    </div>
                    <button className="widget-sm-button">
                        <Visibility className='widget-sm-icon' /> Display
                    </button>
                </li>
                <li className="widget-sm-list-item">
                    <img src={nicoRobin} alt="" className='widget-img' />
                    <div className="widget-sm-user">
                        <span className="widget-sm-username">Yahfi Ilham</span>
                        <span className="widget-sm-user-title">Front-end Dev</span>
                    </div>
                    <button className="widget-sm-button">
                        <Visibility className='widget-sm-icon' /> Display
                    </button>
                </li>
                <li className="widget-sm-list-item">
                    <img src={nicoRobin} alt="" className='widget-img' />
                    <div className="widget-sm-user">
                        <span className="widget-sm-username">Yahfi Ilham</span>
                        <span className="widget-sm-user-title">Front-end Dev</span>
                    </div>
                    <button className="widget-sm-button">
                        <Visibility className='widget-sm-icon' /> Display
                    </button>
                </li>
                <li className="widget-sm-list-item">
                    <img src={nicoRobin} alt="" className='widget-img' />
                    <div className="widget-sm-user">
                        <span className="widget-sm-username">Yahfi Ilham</span>
                        <span className="widget-sm-user-title">Front-end Dev</span>
                    </div>
                    <button className="widget-sm-button">
                        <Visibility className='widget-sm-icon' /> Display
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default WidgetSm;
