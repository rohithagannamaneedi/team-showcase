import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import data from "../data.json"
import TeamMemberCard from './components/TeamMemberCard'

function App() {
  const [members, setMembers] = useState(data)

  return (
    <>
    {
      members.map((member)=>(
        <TeamMemberCard data = {member} key={member.id}/>
      ))
    }

      
    </>
  )
}

export default App
