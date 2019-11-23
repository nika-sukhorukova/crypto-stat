import React from 'react';
import './style.css';

export default ({ stats }) =>
    <div>
       <div>{stats.base}</div>
       <div>{stats.limit}</div>
       <div>{stats.offset}</div>
       <div>{stats.total}</div>
       <div>{stats.total24hVolume}</div>
       <div>{stats.totalExchanges}</div>
       <div>{stats.totalMarketCap}</div>
       <div>{stats.totalMarkets}</div>
    </div>
