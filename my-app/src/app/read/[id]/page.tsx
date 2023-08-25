type ReadProps = {
  params: {
    id: string;
  }
}

export default function Read(props: ReadProps) {
  return (
    <>
      <h2>Read</h2>
      paramters : {props.params.id}
    </>
  )
}