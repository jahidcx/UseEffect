import { useState } from "react"

export default function Team (){

    const [count, countMember] = useState(0)

    const handleAddMember = () => {
        const newMember = count + 1;
        countMember(newMember);
    }

    const handleRemove = () => {
        const newTeam = count - 1;
        countMember (newTeam);
    }
    const teamStyle = {
        border: '4px solid black',
        margin: '20px',
        padding: '10px',
        borderRadius: '20px'
    }

    return (
        <div style={teamStyle}>

            <h3>Team Member:{count} </h3>
            <button onClick={handleAddMember}>Add Member</button>
            <button onClick={handleRemove}>Remove Member</button>
        </div>
    )
}