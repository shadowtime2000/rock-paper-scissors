import React from 'react';

function DeployButton() {
  return (
    <div className="deploy-button">
      <a href="https://app.netlify.com/start/deploy?repository=https://github.com/shadowtime2000/rock-paper-scissors"><img src="https://www.netlify.com/img/deploy/button.svg" alt="Deploy to Netlify" /></a><br/>
    </div>
  )
}

export default DeployButton;
