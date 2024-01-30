import React from 'react'
import { useQuery } from 'react-query'
import { getClients } from './api'
import { Button, Card } from 'antd'
import { IClient } from './types/types'
import { CSSVariables } from '@/styles/_variables'
import { useNavigate } from 'react-router-dom'




function Clients() {
  // const navigate = useNavigate();
  const { data , isError, isLoading } = useQuery('todos', getClients)
  const ddd: IClient = data as IClient
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/transactions')
  }

  return (
    <>
    
        IAM CLIENT
        {isLoading && <p>Loading</p>}
        {isError && <p>Error</p>}
        {!isLoading && !isError && 
          <Card 
            title={ddd.shortName} 
            extra={<Button 
              type='default' 
              style={{marginLeft: '30px', }} 
              children='Подробнее о счетах'
              onClick={handleClick}
              />} 
            style={{ width: 600, background: CSSVariables.lightGreenGradient }}
          >
            <p>ИНН: {ddd.inn}</p>
            {!!ddd.accounts?.length && <p>Количество счетов: {ddd.accounts?.length}</p>}
            {!ddd.accounts?.length && <p>Открытых счетов</p>}
          </Card>
        }
    </>
  )
}

export default Clients