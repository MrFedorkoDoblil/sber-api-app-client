import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { componentsList } from '../components/components.list'

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="p-2 flex gap-2">
        {componentsList.map((item, index) => {
          return <div style={{margin: '0 10px', display: 'inline-block'}}>
            <Link key={index} to={item.url} className="[&.active]:font-bold">
              {item.name}
            </Link>
          </div> 
        })}
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>{' '}
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
      
    </>
  ),

})