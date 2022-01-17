import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@mui/icons-material';

import './user.css';
import { userRows } from '../../dummyData';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const UserLists = () => {
    const [data, setData] = useState(userRows);

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'user',
            headerName: 'User',
            width: 180,
            renderCell: (params) => {
                return (
                    <div className="user-list-wrapper">
                        <img src={params.row.avatar} alt="" className='user-img' />
                        { params.row.username }
                    </div>
                )
            }
        },
        {
            field: 'email',
            headerName: 'Email',
            width: 200,
        },
        {
            field: 'status',
            headerName: 'Status',
            width: 120,
        },
        {
            field: 'transaction',
            headerName: 'Transaction Volume',
            // type: 'number',
            width: 160,
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 160,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={`/user/${params.row.id}`} >
                            <button className="user-list-edit">Edit</button>
                        </Link>
                        <DeleteOutline className='user-list-delete' onClick={() => handleDelete(params.row.id)} />
                    </>
                )
            }
        },
    ];
    

    return (
        <div className='user-list'>
            <DataGrid
                rows={data}
                columns={columns}
                pageSize={10}
                checkboxSelection
                disableSelectionOnClick
            />
        </div>
    )
}

export default UserLists;
