import React from 'react';
import './style.css';

export default ({ onClick, coins, order }) =>
    <table>
        <thead className='table_head'>
            <tr>
                <th className={order === 'asc'? 'sort_btn sort_reverse' : 'sort_btn sort_straight'} data-name='coinranking' onClick={onClick}>CRYPTOCURRENCY</th>
                <th className={order === 'asc'? 'sort_btn sort_reverse' : 'sort_btn sort_straight'} data-name='marketCap' onClick={onClick}>MARCET CAP</th>
                <th className={order === 'asc'? 'sort_btn sort_reverse' : 'sort_btn sort_straight'} data-name='price' onClick={onClick}>PRICE</th>
                <th className={order === 'asc'? 'sort_btn sort_reverse' : 'sort_btn sort_straight'} data-name='change' onClick={onClick}>CHANGE</th>
            </tr>
        </thead>
        <tbody>
            {coins.map((coin) => (
                <tr className='table_row_style' key={coin.uuid}>
                    <td className='table_date currency_style'>
                        {coin.rank}
                        <a className='list_item_link' href={coin.websiteUrl} target="_blank" rel="noopener noreferrer">
                            <img className='coin_img' src={coin.iconUrl} alt={coin.name} />
                            <h3 title={coin.description} style={{ color: coin.color }}>{coin.name}</h3>
                        </a>
                    </td>
                    <td className='table_date market_cap_style'>{Number(coin.marketCap).toLocaleString('ru-RU', { maximumFractionDigits: 2 })}</td>
                    <td className='table_date '>{Number(coin.price).toLocaleString('ru-RU', { maximumFractionDigits: 2 })}</td>
                    <td className={coin.change >= 0 ? 'table_date change_style change_indicator_green' : 'table_date change_style change_indicator_red'}>{coin.change}</td>
                </tr>
            ))}
        </tbody>
    </table>
