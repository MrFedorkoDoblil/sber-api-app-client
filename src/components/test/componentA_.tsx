interface ComponentAProps {
    width: number;
    height: number;
}

export const ComponentA = ({width, height}: ComponentAProps) => {
  return (
    <div style={{
        width: `${width}px`,
        height: `${height}px`,
        backgroundColor: 'greenyellow'
    }}>
        VEry very component A
    </div>
  )
}