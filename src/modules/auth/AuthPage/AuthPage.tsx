
import AuthForm from '../AuthForm'

import './style.scss'

function AuthPage() {
  return (
    <div className='auth__page'>
        <AuthForm
          classname={'auth__form'}
        />
    </div>
  )
}

export default AuthPage