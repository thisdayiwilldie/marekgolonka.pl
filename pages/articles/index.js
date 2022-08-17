
export default function Articles({articles}) {

  return (
    <ul>
      test
      { articles.map((article)=>{
        return  <li key={article.id}>{article.attributes.title}</li>
      })
      }
    </ul>
  )
}


export async function getStaticProps() {
    const res = await fetch("http://marekgolonka.pl:7700/api/articles")
    const articles = await res.json();
    // if(!success){
    //   return {
    //     redirect: {
    //       destination: '/',
    //       permanent: false,
    //     }
    //   }
    // }

    return {
      props: {
        articles: articles.data
      },
    }
    
  }

