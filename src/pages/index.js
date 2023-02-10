import NavBar from '../components/navbar'
import Banner from '../components/banner'
import SearchField from '../components/searchField'
import SliderCard from '../components/sliderCard'
import LargeCard from '../components/LargeCard'
import Footer from "../components/Footer"
import SmallCard from '../components/smallCard'
import MediumCard from '../components/mediumCard'
import { useUser } from '@auth0/nextjs-auth0/client'

export default function Home({lokaler}) {

  const {user, error, isLoading } = useUser()

  console.log(user)

  return (
    
      <div className="">
      <NavBar />

      <Banner />
      <SearchField />

      <div className='max-w-7xl mx-auto px-6 sm:px-16'>
          <section className='pt-6 '>
              <h2 className="text-3xl font-semibold text-[#333333]">
                  Utforsk i nærheten
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {lokaler?.map(({bilder, navn, geoLokasjon, _id }) => (
                  <SmallCard bilde={bilder[0]} navn={navn} by={geoLokasjon.by} key={_id} id={_id}/>
                ))} 
              </div>


          </section>

          <section>
            <h2 className="text-4xl font-semibold pt-8 text-[#333333]">
              Kategorier
            </h2>
            <div className='flex space-x-3 overflow-scroll scrollbar-hide py-3'>
                <SliderCard img="https://victoriapark.com.au/app/uploads/Birthday-party-venues-03.jpg" title="Bursdag"/>
                <SliderCard img="https://lunaparkvenues.com/wp-content/uploads/2019/01/BT-banquet-15.jpg" title="Store lokaler"/>
                <SliderCard img="https://cdn0.hitched.co.uk/article/5404/3_2/960/jpeg/84045-wyresdale-weddings.jpeg" title="bryllup"/>
                <SliderCard img="https://eventective-media.azureedge.net/2739080_lg.jpg" title="Komfirmasjon"/>
            </div>

          </section>
          
          <section>
            <LargeCard 
              img="https://www.prettyandpunk.co.uk/blogimages/691405723/pretty-and-punk0245-barn-wedding-inspiration-hampshire-wedding.jpg"
              title='Våre top 10 lokaler i Oslo'
              description="Toppliste håndplukket av Venue"
              buttonText="Sjekk ut"
            />
          </section>
          
      </div>
      <Footer />
    </div>
      
    
  )
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const res = await fetch('https://venue-backend-v2.herokuapp.com/api/lokaler')
  const response = await res.json()

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      lokaler: response,
    },
  }
}

