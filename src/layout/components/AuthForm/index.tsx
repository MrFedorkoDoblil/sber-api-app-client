import { Button, Checkbox, Form, Input, message } from 'antd'
import useAuthStore from './authform.store'
import { CSSVariables } from '@/styles/_variables';
import { useEffect } from 'react';

const fakeData = {
    login: '123123',
    password: '123123',
    confirmCode: '123'
}

const AuthForm = () => {
    
    const {login, loginCh, allert, allertCh, confimCode, confirmCodeCh, password, passwordCh} = useAuthStore();
    useEffect(() => {
        allertCh('Заполните обязательные поля')
    }, [])


    return (
        <><Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
        >
            <Form.Item
                label="Логин"
                name="login"
                rules={[{ required: true, message: 'Введите имя пользователя или адрес электронной почты.' }]}
            >
                <Input
                    value={login}
                    onChange={(e) => { loginCh(e.currentTarget.value); } } />
            </Form.Item>

            <Form.Item
                label="Пароль"
                name="password"
                rules={[{ required: true, message: 'Введите пароль' }]}
            >
                <Input.Password 
                    onChange={(e) => {passwordCh(e.currentTarget.value)}}
                />
            </Form.Item>


            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button
                    style={{
                        backgroundColor: `${CSSVariables.primaryColor}`
                    }}
                    type="primary"
                    htmlType="submit"
                >
                    Войти
                </Button>
            </Form.Item>
        </Form>
        {allert && <div>
            {allert} 
        </div>}
        </>
    )
}
export default AuthForm

