
import Strings from '../shared/Strings'
import { IoArrowForwardOutline } from "react-icons/io5";

const Services = () => {
    
    const servicesList = [
        {
          id: 1,
          title: Strings.FRONTED,
          desc: Strings.FRONTED_DESC,
          logo: "/fontend.png",
        },
        {
          id: 2,
          title: Strings.BACKEND,
          desc: Strings.BACKEND_DESC,
          logo: "/backend.png",
        }
    ];
    
    return (
        <div className='px-12 mt-12 mb-12'>
            <div className='flex items-center'>
                <div className="w-[20px] h-[7px] bg-green-600 rounded-full"></div>
                <div className='w-full border-[1px] mx-4 mt-[-2px]'></div>
                <h2 className='text-[24px] font-bold'>{Strings.SERVICES}</h2>
                <div className='w-full border-[1px] mx-4 mt-[-2px]'></div>
                <div className="w-[20px] h-[7px] bg-green-600 rounded-full"></div>
            </div>
            <div className='flex justify-around mt-16'>
                {servicesList.map((item) => (
                    <div className='text-center flex flex-col justify-center items-center'>
                        <div className='bg-gray-200 rounded-full w-[80px] h-[80px]'>
                            <img src={item.logo} className='w-[80px] h-[80px] p-5 hover:scale-110 transition-all ease-in-out cursor-pointer'/>
                        </div>
                        <h2 className='mt-5 font-bold'>{item.title}</h2>
                        <h2 className='mt-2 text-gray-400'>{item.desc}</h2>
                        <IoArrowForwardOutline className='mt-5 bg-green-500 text-[35px] p-2 text-white rounded-full cursor-pointer hover:scale-110 transition-all ease-in-out'/>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Services