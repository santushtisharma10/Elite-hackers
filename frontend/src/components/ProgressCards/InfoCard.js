import React from 'react';
import { Card, CardContent } from "@material-ui/core"
import {CircularProgressbar} from "react-circular-progressbar"
import 'react-circular-progressbar/dist/styles.css';

function InfoCard() {
    return (
        <div className="info">
            <Card >
                <CardContent style={{display: 'flex'}}>
                    <div style={{flex: "1"}}>
                    <h4 className="info-title" >Title</h4>
                    <h5>Information</h5>
                    </div>
                    <div style={{ width: 80, height: 80}}>
  <CircularProgressbar value={66} />
</div>
                   
                </CardContent>
            </Card>
            {/* */}
        </div>
    )
}

export default InfoCard;