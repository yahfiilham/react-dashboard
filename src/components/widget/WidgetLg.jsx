import './widget.css';
import nicoRobin from './Nico-Robin.jfif';

const WidgetLg = () => {
    const Button = ({ type }) => {
        return <button className={ 'widget-lg-button ' + type }>{ type }</button>
    }

    return (
        <div className='widget-lg'>
            <h3 className="widget-title">Latest transactions</h3>
            <table className="widget-lg-table">
                <tr className="widget-lg-tr">
                    <th className="widget-lg-th">Customer</th>
                    <th className="widget-lg-th">Date</th>
                    <th className="widget-lg-th">Amount</th>
                    <th className="widget-lg-th">status</th>
                </tr>
                <tr className="widget-lg-tr">
                    <td className="widget-lg-user">
                        <img src={nicoRobin} alt="" className='widget-img' />
                        <span className="widget-lg-name">Nico Robin</span>
                    </td>
                    <td className="widget-lg-date">17 Jan 2022</td>
                    <td className="widget-lg-amount">$189.00</td>
                    <td className="widget-lg-status">
                        <Button type='Approved' />
                    </td>
                </tr>
                <tr className="widget-lg-tr">
                    <td className="widget-lg-user">
                        <img src={nicoRobin} alt="" className='widget-img' />
                        <span className="widget-lg-name">Nico Robin</span>
                    </td>
                    <td className="widget-lg-date">17 Jan 2022</td>
                    <td className="widget-lg-amount">$189.00</td>
                    <td className="widget-lg-status">
                        <Button type='Declined' />
                    </td>
                </tr>
                <tr className="widget-lg-tr">
                    <td className="widget-lg-user">
                        <img src={nicoRobin} alt="" className='widget-img' />
                        <span className="widget-lg-name">Nico Robin</span>
                    </td>
                    <td className="widget-lg-date">17 Jan 2022</td>
                    <td className="widget-lg-amount">$189.00</td>
                    <td className="widget-lg-status">
                        <Button type='Pending' />
                    </td>
                </tr>
                <tr className="widget-lg-tr">
                    <td className="widget-lg-user">
                        <img src={nicoRobin} alt="" className='widget-img' />
                        <span className="widget-lg-name">Nico Robin</span>
                    </td>
                    <td className="widget-lg-date">17 Jan 2022</td>
                    <td className="widget-lg-amount">$189.00</td>
                    <td className="widget-lg-status">
                        <Button type='Approved' />
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default WidgetLg;
