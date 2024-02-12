import { createFileRoute } from "@tanstack/react-router"
import { DatePicker } from "antd"

export const Route = createFileRoute('/datePicker')({
    component: () => <CustomDatePicker/>
})

function CustomDatePicker(){
    return (
        <>
            <DatePicker picker="year"/>
            <DatePicker.RangePicker />
            <DatePicker.TimePicker />
        </>
    )
}
