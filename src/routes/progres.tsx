import { createFileRoute } from "@tanstack/react-router"
import { Button, Progress } from "antd"
import { useState } from "react"

export const Route = createFileRoute('/progres')({
    component: () => <CustomProgres/>
})

function CustomProgres(){
    const [prog, setProg] = useState(0)
    const handleChange = (num: number) => {
      const val = prog + num;
        if(val>=0 && val < 100){
            setProg(val)
        } else if (val < 0) {
            setProg(0)
        } else {
            setProg(100)
        }
    }

    const handleColor = (num: number) =>( 
        num<=0 
        ? 'black'
        : num<=10
        ? 'red' 
        : num<=30
        ? 'orange' 
        : num<=40
        ? 'yellow' 
        : num<100
        ? 'blue' 
        : 'green'
    
    )

    return (
        <>
            <Progress
                percent={prog}
                showInfo
                status="success"
            />
            <Progress
                percent={prog}
                type="circle"
            />
            <Progress
                percent={prog}
                showInfo
                type="dashboard"
            />
            <Progress
                percent={prog}
                showInfo
                strokeColor={handleColor(prog)}
            />
            
            <div className="button-container">
                <Button onClick={() => {handleChange(-10)}} >--</Button>
                <Button onClick={() => {handleChange(-2)}} >-</Button>
                <Button onClick={() => {handleChange(2)}} >+</Button>
                <Button onClick={() => {handleChange(10)}} >++</Button>
            </div>
        </>
    )
}
