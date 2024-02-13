import { createFileRoute } from "@tanstack/react-router"
import { DatePicker, Upload } from "antd"
import { useState } from "react"

export const Route = createFileRoute('/complexUpl')({
    component: () => <ComplexUpl/>
})

function ComplexUpl(){
    
    const [remaining, setRemaining] = useState(new Date)
    const [file, setFile] = useState<null | File>(null)

    const handleUpload = ({file}: {file: File}) => {
        console.log('%ccomplexUpl.tsx line:15 Object', 'color: white; background-color: #007acc;', file);
    }

    return (
        <>
            <div style={{width: '400px', backgroundColor: 'lightgreen', margin: '0 auto'}}>
                

                <Upload.Dragger
                    multiple
                    action={'http://localhost:8000'}
                >
                    Drag files here or click to UPLOAD
                </Upload.Dragger>
            </div>
        </>
    )
}
