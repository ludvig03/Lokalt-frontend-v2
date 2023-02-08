import NavBar from '../components/navbar'
import Banner from '../components/banner'
import SearchField from '../components/searchField'
import MediumCard from '../components/MediumCard'
import LargeCard from '../components/LargeCard'
import Footer from "../components/Footer"

export default function Home() {
  return (
    <>
      <div className="">
      <head>
        <title>Venue</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <NavBar />

      <Banner />
      <SearchField />

      <main className='max-w-7xl mx-auto px-6 sm:px-16'>
          <section className='pt-6 '>
              <h2 className="text-3xl font-semibold text-[#333333]">
                  Utforsk i nærheten
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                
                {/* {
                nermeLokalerStor?.map(({img, distance, location, price, _id, title, by}) => (
                  <SmallCard img={img} distance={distance} location={location} key={img} price={price} _id={_id} title={title} by={by}/>
                ))} */}
              </div>

          </section>

          <section>
            <h2 className="text-4xl font-semibold pt-8 text-[#333333]">
              Kategorier
            </h2>
            <div className='flex space-x-3 overflow-scroll scrollbar-hide py-3'>
                <MediumCard img="https://victoriapark.com.au/app/uploads/Birthday-party-venues-03.jpg" title="Bursdag"/>
                <MediumCard img="https://lunaparkvenues.com/wp-content/uploads/2019/01/BT-banquet-15.jpg" title="Store lokaler"/>
                <MediumCard img="https://cdn0.hitched.co.uk/article/5404/3_2/960/jpeg/84045-wyresdale-weddings.jpeg" title="bryllup"/>
                <MediumCard img="https://eventective-media.azureedge.net/2739080_lg.jpg" title="Komfirmasjon"/>
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
          
      </main>
      <Footer />
    </div>
      
    </>
  )
}
