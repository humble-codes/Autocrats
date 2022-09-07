import React from 'react'
import "./Table.css";
import numeral from "numeral";

const Table = ({indStates}) => {
  return (
    <div className="table">
      {indStates.map(({state, totConfirmed}) => (
        <tr>
          <td>{state}</td>
          <td>
            <strong>{numeral(totConfirmed).format("0,0")}</strong>
          </td>
        </tr>
      ))}
    </div>
  )
}

export default Table