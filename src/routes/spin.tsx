import { createFileRoute } from "@tanstack/react-router"
import { Button,  Spin } from "antd"
import { useState } from "react"

export const Route = createFileRoute('/spin')({
    component: () => <CustomSpin/>
})

function CustomSpin(){
    const [l, setL] = useState(false)
    const handleToogle = () => {
      setL(prev => !prev)
    }
    return (
        <>
            <Spin
                spinning = {l}
            />
            <Spin
            spinning = {l}>
            <div 
                style={{
                    width: '300px', 
                    height: '300px', 
                    display: "flex",
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'lightcyan'
                }}
            >Div inside antd Spinner Component</div>
            </Spin>

            <Button
                onClick={handleToogle}
                children={'toggle loading'}
            />
        </>
    )
}
