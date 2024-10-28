
import { useEffect, useState } from 'react'

import Layout from '../../Components/Layout'
import Card from '../../Components/Card'
import ProductDetail from '../../Components/ProductDetail';

const apiUrl = 'https://api.escuelajs.co/api/v1';

const Home = () => {
  const [items, setItems] = useState(null);

  useEffect(() => {
    fetch(`${apiUrl}/products`)
      .then(response => response.json())
      .then(data => setItems(data))

  }, [])
  return (
    <Layout>
      <h1>Home</h1>
      <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
        {items && items.map(item => (
          <Card key={item.id} data={item} />
        ))}
      </div>
      <ProductDetail />
    </Layout>
  )
}

export default Home
