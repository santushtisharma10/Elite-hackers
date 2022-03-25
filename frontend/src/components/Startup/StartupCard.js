import { Card, CardContent } from '@material-ui/core'
import React from 'react'

function StartupCard() {
  return (
    <div>
        <Card className='startup__card'>
            <img height={200} width="100%" src="https://image.shutterstock.com/image-vector/microblog-platform-abstract-concept-vector-600w-1852998859.jpg"/>
            <CardContent >
                <h3>Title</h3>
                <p style={{color: 'gray'}}>Lorem ipsum tezt</p>
            </CardContent>
        </Card>
    </div>
  )
}

export default StartupCard