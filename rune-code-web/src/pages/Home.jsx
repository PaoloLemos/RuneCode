import Layout from '../components/Layout'
import HeroSplit from '../components/HeroSplit'
import FeatureTiles from '../components/FeatureTiles'
import BigHeadline from '../components/BigHeadline'

const Home = () => {
  return (
    <Layout>
      <HeroSplit />
      <FeatureTiles />
      <BigHeadline />
    </Layout>
  )
}

export default Home
