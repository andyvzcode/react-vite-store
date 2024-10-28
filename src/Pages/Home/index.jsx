
import { useEffect, useState } from 'react'

import Layout from '../../Components/Layout'
import Card from '../../Components/Card'

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
      {items && items.map(item => (
        <Card key={item.id} title={item.title} body={item.body} />
      ))}
      <Card />
    </Layout>
  )
}

export default Home