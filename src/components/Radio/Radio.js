import React from 'react'

const radio = (props) => {
  return (
    <React.Fragment>
        <div className="input-group mb-3"
            style={{maxWidth: '500px', margin: 'auto'}}>
            <div className="input-group-prepend">
                <label className="input-group-text"
                    htmlFor="inputGroupSelect01">
                    <strong>Equipment Type</strong></label>
            </div>
            <select className="custom-select" id="inputGroupSelect01"
                onChange={props.dropChange} value={props.value}>
                <option value="" >Choose...</option>
                <option value="sheet" disabled={!props.sheetRow}>sheet</option>
                <option value="pen" disabled={!props.penRow}>pen</option>
                <option value="tape" disabled={!props.tapeRow}>tape</option>
            </select>
        </div>
    </React.Fragment>
  )
}

export default radio
