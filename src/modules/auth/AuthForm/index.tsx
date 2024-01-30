import { Button,  Form, Input,  } from 'antd'
import { CSSVariables } from '@/styles/_variables';
import useGlobalStore from '@/global.store';
import useAuthStore from '../auth.store';
import SBButton from '@/layout/components/Button/SBButton';
import { UISize } from '@/layout/types/uiTypes';

const fakeData = {
    login: '123123',
    password: '123123',
    confirmCode: '123'
}

const AuthForm = ({classname}:{classname?: string}) => {
    
    const {login, loginCh, allert, password, passwordCh, allertCh} = useAuthStore();
    const {isAuthCh} = useGlobalStore() 

    const handleLogin = () => {
        if (login === fakeData.login && password === fakeData.password){
            allertCh('')
            isAuthCh(true)
        } else {
            allertCh('Неверный логин или пароль');
            setTimeout(() => {
                allertCh('')
            }, 2000);
        }
    }

    return (
        <><Form
            className={classname}
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
                    value={password}
                />
            </Form.Item>


            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button
                    style={{
                        backgroundColor: `${CSSVariables.primaryColor}`
                    }}
                    type="primary"
                    htmlType="submit"
                    onClick={handleLogin}
                >
                    Войти
                </Button>
            </Form.Item>
            <SBButton
                actionType='login'
                onClick={() => {}}
                size={UISize.MD}
                variant='primary'
            />
        {allert && <div>
            {allert} 
        </div>}
        </Form>
        </>
    )
}
export default AuthForm


