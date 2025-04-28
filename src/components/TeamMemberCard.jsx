import React from 'react'

const TeamMemberCard = ({data}) => {
  return (
    <div>
        <h3>{data.name}</h3>
        <p>JobTitle: {data.jobtitle}</p>
    </div>
  )
}

export default TeamMemberCard