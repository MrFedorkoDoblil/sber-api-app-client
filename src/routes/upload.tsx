import { createFileRoute } from '@tanstack/react-router'
import { Button, Spin, Upload } from 'antd'

export const Route = createFileRoute('/upload')({
  component:  () => <CustomUpload/>
})

function CustomUpload(){
    
  
    return (
        <>
            <Upload.Dragger 
            listType='picture' 
            multiple action={"http://localhost:5174/Upload"}
            accept='.gitconfig'
            iconRender={() => <Spin/>}
            itemRender={() => <Button>heyhey </Button>}
            >
                Drag files here or click Upload
                <Button>Upload</Button>
            </Upload.Dragger>
            
        </>
    )
}
