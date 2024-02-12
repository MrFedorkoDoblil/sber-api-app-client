import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { componentsList } from '../components/components.list'

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="p-2 flex gap-2">
        {componentsList.map((item, index) => {
          return <Link key={index} to={item.url} className="[&.active]:font-bold">
            {item.name}
          </Link> 
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