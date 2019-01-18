import React from 'react'

const tBSheet = (props) => {
  return (
    <tbody>
        <tr>
            <th style={{fontSize: '75%', padding: '12px 3px'}} scope="row">#1</th>
            <td style={{fontSize: '75%', padding: '12px 3px'}}>{props.data[0][0]}</td>
            <td style={{fontSize: '75%', padding: '12px 3px'}}>{props.data[0][1]}</td>
            <td style={{fontSize: '75%', padding: '12px 3px'}}>{props.data[0][2]} IMI₵</td>
            <td style={{fontSize: '75%', padding: '12px 3px'}}>{props.data[0][3]} s</td>
            <td style={{fontSize: '75%', padding: '12px 3px'}}><button className="btn btn-primary btn-sm"
                onClick={() => props.selectClick(0)} >Select</button></td>
        </tr>
        <tr>
            <th style={{fontSize: '75%', padding: '12px 3px'}} scope="row">#2</th>
            <td style={{fontSize: '75%', padding: '12px 3px'}}>{props.data[1][0]}</td>
            <td style={{fontSize: '75%', padding: '12px 3px'}}>{props.data[1][1]}</td>
            <td style={{fontSize: '75%', padding: '12px 3px'}}>{props.data[1][2]} IMI₵</td>
            <td style={{fontSize: '75%', padding: '12px 3px'}}>{props.data[1][3]} s</td>
            <td style={{fontSize: '75%', padding: '12px 3px'}}><button className="btn btn-primary btn-sm"
                onClick={() => props.selectClick(1)} >Select</button></td>
        </tr>
        <tr>
            <th style={{fontSize: '75%', padding: '12px 3px'}} scope="row">#3</th>
            <td style={{fontSize: '75%', padding: '12px 3px'}}>{props.data[2][0]}</td>
            <td style={{fontSize: '75%', padding: '12px 3px'}}>{props.data[2][1]}</td>
            <td style={{fontSize: '75%', padding: '12px 3px'}}>{props.data[2][2]} IMI₵</td>
            <td style={{fontSize: '75%', padding: '12px 3px'}}>{props.data[2][3]} s</td>
            <td style={{fontSize: '75%', padding: '12px 3px'}}><button className="btn btn-primary btn-sm"
                onClick={() => props.selectClick(2)} >Select</button></td>
        </tr>
    </tbody>
  )
}

export default tBSheet