import React, {useState} from 'react'
import { Button } from 'react-bootstrap'

function Votes() {
    const [likes, setLikes] = useState(0)
    const [dislikes, setDislikes]=useState(0)

    
    const handleLike =() => setLikes(likes + 1)

    const handleDislike =() => setDislikes(dislikes + 1)
    

    return(
        <div>
           
                <Button style={{marginRight: 10 }} onClick={handleLike} variant="success" size="lg">{likes} Likes</Button>
               <span> <Button onClick={handleDislike} variant="danger" size="lg"> {dislikes} Dislikes</Button></span>
            
        </div>
    )
}
export default Votes