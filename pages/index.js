// import Image from 'next/image'
import parse from 'html-react-parser';
import { useEffect, useState } from 'react'
import Image from 'next/image'


export default function Home({ homePage, lightbox_content }) {
  const [title, setTitle] = useState('')
  const [subtitle, setSubtitle] = useState('')

  useEffect(() => {
    setTitle(homePage.title)
    setSubtitle(parse(homePage.subtitle.replace(/<[^>]+>/g, '')))
  }, [])

  return (
    <section className="container home">
      <header className="header home__header">
        <aside className="home__header__aside">
          <h1>{title}</h1>
          <p className="paragraph home__paragraph">{subtitle}</p>
        </aside>
        <section>21{homePage.Slider}</section>
      </header>

      <section className="home__section">
        <header>
          <h2>Moje zrealizowane projekty</h2>
        </header>
        
          {/* {
            console.log(lightbox_content[0])

          } */}
          <section className='lightbox'>
          {
            Object.keys(lightbox_content).map((key) => {
              return <article key={key} className="lightbox__element">
                <h3 className='lightbox__title'>{lightbox_content[key].title}</h3>
                <figure className='lightbox__figure'><Image className='lightbox__image' src={(`http://marekgolonka.pl:7700${lightbox_content[key].image.data.attributes.url}`)} width="100" height="200"/></figure>
              </article>

            })
          }
       </section>
      </section>
    </section>
  )
}




export async function getStaticProps() {
  const responseAllPrimaryData = await fetch(`http://marekgolonka.pl:7700/api/homepage?populate=*`)
  const responseAllImagesFromLightboxContent = await fetch(`http://marekgolonka.pl:7700/api/homepage?populate=Lightbox_content.image`)
  const homePage = []
  homePage.push(await responseAllPrimaryData.json(), await responseAllImagesFromLightboxContent.json())

  return {
    props: {
      homePage: homePage[0].data.attributes.Header,
      lightbox_content: homePage[1].data.attributes.Lightbox_content,
    },
  }

}
