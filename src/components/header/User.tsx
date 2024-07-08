import { FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function User() {
  return (
    <div className='flex items-center gap-2'>
        <FaUser className='text-[24px] text-gray ' />
        <div className='leading-none'>
            <h4 className='text-black-dim leading-none font-medium'>Account</h4>
            <span className='text-xs leading-none'>
                <Link to={"/auth/register"} className='text-black-dim font-medium underline'>Register</Link> or <Link to={"/auth/login"} className='text-black-dim font-medium underline' >Login</Link>
            </span>
        </div>
    </div>
  )
}
