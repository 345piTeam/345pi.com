import type { NextPage } from 'next'
import Head from 'next/head'
import { sanityClient } from '../../sanity';

export default function News(props) {
  return (
    <div>
      <Head>
        <title>345pi - news</title>
        <meta name="description" content="all posted 345pi news" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>

      </main>
    </div>
  )
}

export const getServerSideProps = () => {
  const query = `*[_type == "post"]`;
  const result = sanityClient.fetch(query);
  console.log(result);


} 
