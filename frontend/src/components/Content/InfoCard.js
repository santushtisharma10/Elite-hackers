import React from 'react';
import {Card, CardContent} from "@material-ui/core"

function InfoCard() {
    return (
        <div className="info">
            <Card >
                <CardContent>
                    <h3 className="info-title" >Title</h3>
                    <h5>Information</h5>
                </CardContent>
            </Card>
        </div>
    )
}

export default InfoCard;