import '../../media/scss/elements/launch.scss';

import React, { useState } from 'react';

interface Props {
  data: {
    mission_name: string,
    id: number,
    details: string,
    rocket: {
      rocket : {
        name: string
      }
    }
  }
  content_visible: boolean
}

const Launch: React.FC<Props> = ({data, content_visible}) => {
  const [ contentVisible, setContentVisible ] = useState<boolean>(content_visible);

  const launchClick = () => {
    setContentVisible(!contentVisible);
  }

  return(
    <div
      className={ `launch ${ contentVisible ? 'slidedown' : 'slideup' }`}
      data-id={ data.id }
    >
      <h2 onClick={ launchClick }>
        <div className="rocket"></div>
        { data.mission_name } - { data.rocket.rocket.name }
      </h2>
      <div className="content">
        <p>{ data.details }</p>
      </div>
    </div>
  )
}

export default Launch;