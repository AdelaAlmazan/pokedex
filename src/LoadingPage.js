
import React from 'react';
import { Spin } from 'antd'
import './App.css';




import { LoadingOutlined } from '@ant-design/icons';
// import styles from './LoadingPage.module.css'
const antIcon = <LoadingOutlined style={{ fontSize: 44, color: '#FFF', marginTop: 15 }} spin />;

export const LoadingPage = () => {
    return (
        <div className='container'>
            <Spin indicator={antIcon} />
            <span style={{ color: '#FFF' }}>Cargando...</span>
        </div>
    )
}
