
import React from 'react'
import PostData from './Blogpost.json'

function Data() {
    return (
        <div>
          {
              PostData.map((postdata,index) =>
              <div>
                  <h1>{postdata.title}</h1>
                  <h2>{postdata.description}</h2>
              </div>
              )
          }  
        </div>
    )
}

export default Data
