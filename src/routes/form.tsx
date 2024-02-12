import { createFileRoute } from '@tanstack/react-router'
import { useState, useCallback } from 'react';
import { Form, Input, Button, message } from 'antd'

const credentials = {
  userName: '123123',
  password: '123123'
}

export const Route = createFileRoute('/form')({
  component: () => <LoginForm/>
})

function LoginForm() {

  const [userName, setUserName] = useState('')
  const [pass, setPass] = useState('')
  const [isAuth, setIsAuth] = useState(false)

  const handleSubmit = () => {
    if(userName !== credentials.userName
      || pass !== credentials.password){
        handleReset()
      } else {
        setIsAuth(true)
      }
  }
  const handleFinish = (e: any) => {
    console.log(e)
    setTimeout(() => {
        message.success('Loged in successfuly')
    }, 2000);
  }
  const handleReset = useCallback(() => {
    setUserName('')
    setPass('')
  }, [pass, userName])
  return (
    <div style={{width: '300px'}}>
      <div className="data-container">
        {pass && <p>password: {pass}</p>}
        {userName && <p>userName: {userName}</p>}
        {<p>isAuth: {isAuth ? 'true' : 'false'}</p>}

      </div>
      <Form onFinish={handleFinish}>
        <Form.Item label='username' name='username'>
          <Input
            placeholder='user name'
            value={userName}
            onChange={(e) => {setUserName(e.currentTarget.value)}}
            type='text'
          />  
        </Form.Item >
        <Form.Item label='password' name='password'>
          <Input
            placeholder='user name'
            value={pass}
            onChange={(e) => {setPass(e.currentTarget.value)}}
            type='password'
          />  
        </Form.Item>
        <Form.Item>
          <Button
            type='primary'
            block
            onClick={handleSubmit}
            htmlType='submit'
          >
            {!isAuth ? 'Log in' : 'Log out'}  
          </Button> 
        </Form.Item>
      </Form>
    </div>
  )
}