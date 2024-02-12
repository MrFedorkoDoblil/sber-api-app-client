import { createFileRoute } from "@tanstack/react-router"
import { Button, Progress } from "antd"
import { useState } from "react"

export const Route = createFileRoute('/progres')({
    component: () => <CustomProgres/>
})

function CustomProgres(){
    const [prog, setProg] = useState(0)
    const handleChange = (num: number) => {
      setProg(prev => prev + num)
    }
    return (
        <>
            <Progress
                percent={prog}
                showInfo
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
