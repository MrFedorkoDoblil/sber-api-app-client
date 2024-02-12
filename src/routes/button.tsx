import { createFileRoute } from "@tanstack/react-router"
import { Button, DatePicker } from "antd"

export const Route = createFileRoute('/button')({
    component: () => <CustomButton/>
})

function CustomButton(){
    return (
        <>
        <Button
            children='click me'
            type="primary"
        />
        </>
    )
}
