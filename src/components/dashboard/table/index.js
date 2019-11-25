import React from 'react';
import './style.css';
import nanoid from 'nanoid';




export default ({ coins }) =>
    <table>
        <thead>
            <tr>
                <th>CRYPTOCURRENCY</th>
                <th>LINKS</th>
                <th>HIGHEST PRICE</th>
                <th>VOLUME</th>
                <th>MARCET CAP</th>
                <th>CHANGE</th>
                <th>CIRCULATING SUPPLY</th>
                <th>FIRST SEEN</th>
                <th>NUMBER OF EXCHANGES</th>
                <th>NUMBER OF MARKETS</th>
                <th>PRICE</th>
                <th>TOTAL SUPPLY</th>
            </tr>
        </thead>
        <tbody>
            {coins.map((coin) => (
                <tr key={coin.uuid}>
                    <td className='table_date'>
                        <img className='coin_img' src={coin.iconUrl} alt={coin.name} />
                        <h3 title={coin.description} style={{ color: coin.color }}>{coin.name}</h3>
                    </td>
                    <td className='table_date'>
                        <p className='list_item_link'>Web-cite: <a href={coin.websiteUrl} target="_blank" rel="noopener noreferrer">{coin.websiteUrl}</a></p>
                        <p> Socials: {coin.socials.map((social, id) => (
                            <span className='list_item_link' key={nanoid()}><a href={social.Url} target="_blank" rel="noopener noreferrer">{social.type}</a></span>))}
                        </p>
                    </td>
                    <td className='table_date'>{Number(coin.allTimeHigh.price).toLocaleString('ru-RU', { maximumFractionDigits: 2 })} at {new Date(coin.allTimeHigh.timestamp).toLocaleDateString()} </td>
                    <td className='table_date'>{Number(coin.volume).toLocaleString('ru-RU', { maximumFractionDigits: 2 })}</td>
                    <td className='table_date'>{Number(coin.marketCap).toLocaleString('ru-RU', { maximumFractionDigits: 2 })}</td>
                    <td className='table_date'>{coin.change}</td>
                    <td className='table_date'>{Number(coin.circulatingSupply).toLocaleString('ru-RU', { maximumFractionDigits: 2 })}</td>
                    <td className='table_date'>{new Date(coin.firstSeen).toLocaleDateString()}</td>
                    <td className='table_date'>{coin.numberOfExchanges}</td>
                    <td className='table_date'>{coin.numberOfMarkets}</td>
                    <td className='table_date'>{Number(coin.price).toLocaleString('ru-RU', { maximumFractionDigits: 2 })}</td>
                    <td className='table_date'>{Number(coin.totalSupply).toLocaleString('ru-RU', { maximumSignificantDigits: 6, maximumFractionDigits: 2 })}</td>
                </tr>
            ))}
        </tbody>
    </table>
