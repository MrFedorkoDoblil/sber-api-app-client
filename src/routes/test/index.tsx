import { createFileRoute } from '@tanstack/react-router'
import { ComponentA } from '../../components/test/componentA_.tsx'
import { ComponentB } from '../../components/test/componentB_.tsx'

const TestIndexPage = () => {
  return <>
    <ComponentA
        width={100}
        height={100}
    />
    <ComponentB
        width={100}
        height={300}
    />
  </>
}
export const Route = createFileRoute('/test/')({
  component: TestIndexPage
})
