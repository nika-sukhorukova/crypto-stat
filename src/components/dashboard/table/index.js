import React from 'react';
import './style.css';

export default ({ onClick, coins }) =>
    <table>
        <thead>
            <tr className='table_head'>
                <th className='sort_btn' data-name='coinranking' onClick={onClick}>CRYPTOCURRENCY</th>
                <th className='sort_btn' data-name='marketCap' onClick={onClick}>MARCET CAP</th>
                <th className='sort_btn' data-name='price' onClick={onClick}>PRICE</th>
                <th className='sort_btn' data-name='change' onClick={onClick}>CHANGE</th>
            </tr>
        </thead>
        <tbody>
            {coins.map((coin) => (
                <tr key={coin.uuid}>
                    <td className='table_date'>
                        {coin.rank}
                        <a className='list_item_link' href={coin.websiteUrl} target="_blank" rel="noopener noreferrer">
                            <img className='coin_img' src={coin.iconUrl} alt={coin.name} />
                            <h3 title={coin.description} style={{ color: coin.color }}>{coin.name}</h3>
                        </a>
                    </td>
                    <td className='table_date'>{Number(coin.marketCap).toLocaleString('ru-RU', { maximumFractionDigits: 2 })}</td>
                    <td className='table_date'>{Number(coin.price).toLocaleString('ru-RU', { maximumFractionDigits: 2 })}</td>
                    <td className={coin.change >= 0 ? 'table_date change_indicator_green' : 'table_date change_indicator_red'}>{coin.change}</td>
                </tr>
            ))}
        </tbody>
    </table>
