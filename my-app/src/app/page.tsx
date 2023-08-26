import Image from 'next/image'

export default function Home() {
  return (
    <>
      <h2>Welcome</h2>
      Hello, WEB
      <Image src='/Notion-logo.png' alt='' width={20} height={20} />
    </>
  )
}
