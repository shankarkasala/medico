import React from 'react'
import { Link ,useRouteMatch,useParams} from 'react-router-dom'
function Tabs() {
    let { topicId } = useParams();
    return (
       
        <div>
      <h3>{topicId}</h3>
    </div>
    )
}

export default Tabs
