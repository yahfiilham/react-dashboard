import React from 'react';
import Chart from '../../components/chart/Chart';
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import './home.css'
import { userData } from '../../dummyData';
import WidgetSm from '../../components/widget/WidgetSm';
import WidgetLg from '../../components/widget/WidgetLg';

const Home = () => {
    return (
        <div className='home'>
            <FeaturedInfo />
            <Chart data={ userData } title='User Analytics' grid dataKey='Active User' />
            <div className="home-widgets">
                <WidgetSm />
                <WidgetLg />
            </div>
        </div>
    )
}

export default Home;
