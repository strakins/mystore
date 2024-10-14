import { Link } from 'react-router-dom';
import ContenetBtn from '../components/ContentBtn';


const HomeHero = () => {
  return (
    <div className="home-hero flex flex-col justify-center items-center  text-white">
      <h2 className='text-4xl mb-8'>100% Freash Foods in Store </h2>
      <p className='text-sm mb-4'>We deliver organic vegetables and fruits</p>
      <Link to='/shop'>
        <ContenetBtn>
          View Details
        </ContenetBtn>
      </Link>
    </div>
  )
}

export default HomeHero
