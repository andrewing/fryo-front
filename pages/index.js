import { pages } from '../components/pages'

const Home = ({ page, ...props}) => {
  return (
    <div className="main-container">
      {pages(props)[page]?.component}
    </div>
  )
}

export default Home

export const getStaticProps = async () => {
  const products = await fetch(`${process.env.BASE_URL}products`).then(r=>r.json())
  return {
    props: {
      products
    }
  }
}