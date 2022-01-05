import React, { useState } from 'react'
import jwt from 'jsonwebtoken'

export default function ExportScore({ score, gameRunning }) {
    var token = jwt.sign({ score }, 'vlad')
    const [btnText, setbtnText] = useState("Copy my score to clipboard")
    const text = `:h_: **FLAPPY HAPE** :h_:\n ----------------------------------------------- \n :star: *I just got ${score} point in @Un_Like#6483 game* :star: \n \n **Can you be better**:question: \n ----------------------------------------------\n @Un_Like#6483 @SirVaalok | HVPE#9067 \n my security token: ${token}`

    if (!gameRunning && score > 0) {
        return (
            <div onClick={() => {
                navigator.clipboard.writeText(text); setbtnText("COPIED! paste it into hapes chat"); setTimeout(() => {
                    setbtnText("Copy my score to clipboard")
                }, 4000);
            }} className="exp-btn">
                {btnText}
            </div>
        )
    } else {
        return null
    }
}
