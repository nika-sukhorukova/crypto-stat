import React from 'react';
import './style.css';

export default ({ stats }) =>
    <div className='stats_style'>
       <div className='stats-block'> Base: {stats.base}</div>
       <div className='stats-block'> Limit: {stats.limit}</div>
       <div className='stats-block'> offset: {stats.offset}</div>
       <div className='stats-block'> Total: {Number(stats.total).toLocaleString()}</div>
       <div className='stats-block'>Volume in 24 hours: {Number(stats.total24hVolume).toLocaleString('ru-RU')}</div>
       <div className='stats-block'>Total Exchanges: {Number(stats.totalExchanges).toLocaleString()}</div>
       <div className='stats-block'>Total Market Cap: {Number(stats.totalMarketCap).toLocaleString('ru-RU')}</div>
       <div className='stats-block'>Total Markets: {Number(stats.totalMarkets).toLocaleString()}</div>
    </div>
