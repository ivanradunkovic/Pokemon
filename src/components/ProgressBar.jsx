import React from 'react';

const ProgressBar = (props) => {
  return (
    <div className="progress-bar">
      {props.percentage}
      <div className="filler" style={{ width: `${props.percentage}%` }} />
    <div class="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
  </div>
  )
}

export default ProgressBar;