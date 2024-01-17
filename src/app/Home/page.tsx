import Image from 'next/image'
import Header from '../Components/Header'
import SocialMediaMenu from '../Components/SocialMediaMenu'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div>
        <Header/>
        <div>
          <section>
            <div className="mx-24 flex flex-col">
              <div className='flex w-full items-center justify-start'>
                <span className='border-4 h-0 border-secondary w-14 mr-4 '></span>
                <span className='font-light text-lg'>FULL-STACK WEB DEVELOPER</span>
              </div>
              <div>
                <span className='font-medium text-fontPrimary text-9xl font-serif'>VICTOR <br /> CAVALCANTI</span>
              </div>
              <div className='flex'>
                <div className='flex'>
                  <span className='border-8 h-52 border-secondary w-0 mr-4 '></span>
                </div>
                <div>
                  <SocialMediaMenu/>
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>

    </main>
  )
}