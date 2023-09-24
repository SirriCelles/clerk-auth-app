import Image from 'next/image';

export default function Home() {
  return (
    <>
      <h1 className='text-2xl font-bold mb-5'>Home</h1>
      <p className='mb-5'>
        Testing Out Auth and Custom Authentication with Clerk
      </p>
      <p className='mb-5'>
        Go ahead to SignUp and SignIn to explore features
      </p>
    </>
  )
}

