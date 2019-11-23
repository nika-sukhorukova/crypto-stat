import React from 'react';
import './style.css'


export default ({ coins }) =>
    <table>
        <thead>
            <tr>
                <th>CRYPTOCURRENCY</th>
                <th>HIGHEST PRICE</th>
                <th>VOLUME</th>
                <th>MARCET CAP</th>
            </tr>
        </thead>
        <tbody>
        {coins.map((coin) => (
            <tr key={coin.uuid}>
                <td className='list_item'>
                    <img href={coins.iconUrl} alt={coin.name} />
                    <h3 title={coin.description} style={{ color: coin.color }}>{coin.name}</h3>
                    <p>Web-cite: <a>{coin.websiteUrl}</a></p>
                </td>
                <td>{Number(coin.allTimeHigh.price).toFixed(2)} at {} </td>
                <td>{Number(coin.volume).toFixed(2)}</td>
                <td>{}</td>
            </tr>
        ))}
        </tbody>
    </table>
