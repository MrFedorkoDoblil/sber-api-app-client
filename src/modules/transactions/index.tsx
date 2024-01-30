import styles from './style.module.scss'
import { useQuery } from 'react-query'
import { getClients } from './api'


function Transactions() {

  const { data, isError, isLoading } = useQuery('todos', getClients)
  
  return (
    <div className={styles.title}>
      IAM TRANSACTION
      {isLoading && <p>Loading</p>}
      {isError && <p>Error</p>}
      {!isLoading && !isError && <p>
        {data.shortName}  
      </p>}
    </div>
  )
}

export default Transactions