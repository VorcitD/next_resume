import Image from 'next/image'
import Header from '../Components/Header'
import SocialMediaMenu from '../Components/SocialMediaMenu'
import Button from '../Components/Button'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center overflow-x-hidden">
      <div>
        <Header />
          <section>
            <div className='relative w-screen mb-4'>
              <div className="mx-24 mt-10 flex flex-col">
                <div className='ml-12'>
                  <div className='flex w-full mb-3 items-center justify-start '>
                    <span className='border-4 h-0 border-secondary w-14 mr-4 '></span>
                    <span className='font-light text-lg'>FULL-STACK WEB DEVELOPER</span>
                  </div>
                  <div >
                    <span className='font-medium text-fontPrimary text-9xl font-serif'>VICTOR <br /> CAVALCANTI</span>
                  </div>
                </div>
                <div className='flex max-w-xl max-h-full mt-20'>
                  <div className='flex'>
                    <div className='bg-secondary h-full w-6 mr-4 '></div>
                  </div>
                  <div className='ml-4'>
                    <SocialMediaMenu />
                    <div className='mt-5 mb-8'>
                      <p className='text-fontSecondary text-sans text-sm leading-8 font-light '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus harum assumenda quasi itaque nesciunt optio suscipit nihil, earum est. Modi vero ipsum minima ab, quae consequatur assumenda molestiae nihil nisi.</p>
                    </div>
                    <div className='max-w-60'>
                      <Button text="VER PORTIFOLIO"></Button>
                    </div>
                  </div>
                </div>
              </div>
              <div  className='absolute bottom-0 right-16 -z-20 '>
              <Image width={450} height={300} src={'/Victor.png'} alt={''}></Image>
              </div>
            </div>
          </section>

          <section>
            <div className='h-630 bg-tertiary'>
              <div className='py-24 px-72 flex flex-col justify-center items-center h-full font-normal w-screen text-center'>
                <span className=' font-serif text-3xl mb-4'>“Se eu vi mais longe, foi porque estava sobre os ombros de gigantes”</span>
                <span className='font-serif'>Isaac Newton</span>
              </div>
            </div>
          </section>
      </div>

    </main>
  )
}