import { Card, CardContent } from '@material-ui/core'
import React from 'react'
import {ProductCard} from "react-ui-cards"

function StartupCard() {
  return (
    <div>
       
        <ProductCard
    photos={[
      'https://image.shutterstock.com/image-vector/microblog-platform-abstract-concept-vector-600w-1852998859.jpg'
        
    ]}
  
    productName='Title'
    description='Donec lectus nulla, molestie aliquam nisl vitae, tempor placerat magna. Morbi dignissim in felis vel aliquet.'
    buttonText='Explore More'
    // url='https://github.com/nukeop'
/>

    </div>
  )
}

export default StartupCard