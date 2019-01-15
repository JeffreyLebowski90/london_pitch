import React from 'react'

const radio = () => {
  return (
    <React.Fragment>
        <div class="input-group mb-3">
        <div class="input-group-prepend">
            <label class="input-group-text" for="inputGroupSelect01">Equipment Type</label>
        </div>
        <select class="custom-select" id="inputGroupSelect01">
            <option selected>Choose...</option>
            <option value="1">Sheet</option>
            <option value="2">Pen</option>
            <option value="3">Tape</option>
        </select>
        </div>
    </React.Fragment>
  )
}

export default radio
