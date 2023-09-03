import React from 'react'
import applyRule from '../../Backend/applyRule'

const Table = ({ sheet }) => {
  return (
    <>
      <style>{`
          table {
            border-collapse: collapse;
            width: 100%;
          }
          
          th, td {
            text-align: left;
            padding: 8px;
          }
          
          tr:nth-child(even) {background-color: #f2f2f2;}
          
          th {
            background-color: #4CAF50;
            color: white;
          }
          
          table, th, td {
            border: 1px solid black;
          }
          
          table {
            outline-style: solid;
            outline-width: 2px;
          }
        `}</style>
      <table>
        <thead>
          <tr>
            <th>Year</th>
            <th>Month</th>
            <th>Profit/Loss</th>
            <th>Assets Value</th>
          </tr>
        </thead>
        <tbody>
          {sheet.map((row, index) => (
            <tr key={index}>
              <td>{row.year}</td>
              <td>{row.month}</td>
              <td>{row.profitOrLoss}</td>
              <td>{row.assetsValue}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default Table
