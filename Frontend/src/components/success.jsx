import bg from '/wallpaper.png'
import { Link } from 'react-router-dom'

const Success = () => {
  return (
    <div className='h-screen bg-no-repeat bg-center w-full object-cover bg-cover'
    style={{backgroundImage:`url(${bg})`}}>
        <div className='w-full flex flex-col gap-6 justify-center items-center h-full'>
            <h1 className='font-poppins font-[600] text-white lg:text-[45px] text-[25px] text-center lg:px-0 px-5'>Selamat Kamu Lolos di Pos ini</h1>
            <button className='font-poppins cursor-pointer transition-all hover:bg-red-700 text-[12px] lg:text-[16px] font-[600] px-8 py-3 bg-red-600 rounded-xl text-white'><Link to='/'>Kembali</Link></button>
        </div>
    </div>
  )
}

export default Success