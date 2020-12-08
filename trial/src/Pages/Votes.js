import React, {useState} from 'react'
import { Button } from 'react-bootstrap'

function Votes() {
    const [likes, setLikes] = useState(10)
    const [dislikes, setDislikes]=useState(26)

    
    const handleLike =() => setLikes(likes + 1)

    const handleDislike =() => setDislikes(dislikes + 1)
    

    return(
        <div>
            <span>{likes} likes </span>
            {dislikes} dislikes
            <div>
                <Button style={{marginRight: 10 }} onClick={handleLike}>Likes</Button>
               <span> <Button onClick={handleDislike}>Dislikes</Button></span>
            </div>
        </div>
    )
}
export default Votes