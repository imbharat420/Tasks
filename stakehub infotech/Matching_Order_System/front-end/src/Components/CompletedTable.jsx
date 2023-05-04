import React from 'react'

const CompletedTable = ({ orders }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Price</th>
                    <th>Qty</th>
                </tr>
            </thead>
            <tbody>
                {orders.map(order => (
                    <tr key={order.id}>
                        <td>{order.price}</td>
                        <td>{order.qty}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default CompletedTable