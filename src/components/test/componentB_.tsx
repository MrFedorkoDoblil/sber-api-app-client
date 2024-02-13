interface ComponentAProps {
    width: number;
    height: number;
}

export const ComponentB = ({width, height}: ComponentAProps) => {
  return (
    <div style={{
        width: `${width}px`,
        height: `${height}px`,
        backgroundColor: 'green'
    }}>
        VEry very component BBBBBB
    </div>
  )
}