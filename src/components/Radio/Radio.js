import React from 'react'

const radio = (props) => {
  return (
    <React.Fragment>
        <div className="input-group mb-3">
            <div className="input-group-prepend">
                <label className="input-group-text"
                    htmlFor="inputGroupSelect01">
                    Equipment Type</label>
            </div>
            <select className="custom-select" id="inputGroupSelect01"
                onChange={props.dropChange}>
                <option >Choose...</option>
                <option value="sheet">sheet</option>
                <option value="pen">pen</option>
                <option value="tape">tape</option>
            </select>
        </div>
    </React.Fragment>
  )
}

export default radio
