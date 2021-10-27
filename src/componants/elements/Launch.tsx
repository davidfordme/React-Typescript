import '../../media/scss/elements/launch.scss';

import React from 'react';

interface Props {
  data: {
    mission_name: string,
    id: number,
    rocket: {
      rocket : {
        name: string
      }
    }
  }
}

const Launch: React.FC<Props> = ({data}) => {
  console.log(data);
  return(
    <div className="launch" data-id={ data.id }>
      { data.mission_name } - { data.rocket.rocket.name }
    </div>
  )
}

export default Launch;