// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export const getArticles = async () => {
  const res =  await fetch(`http://marekgolonka.pl:7700/api/articles`)
  const {data, success} =  await res.json()
    if(!success){
      return {
        redirect: {
          destination: '/'
        }
      }
    }
    return {
      props: {},
    }
  }