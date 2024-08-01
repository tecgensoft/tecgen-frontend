import { FaUser } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { useMouse } from '../../hooks/useMouse'
import { userLogout } from '../../redux/feature/auth/authSlice'
import { useAppSelector } from '../../redux/hooks'
import Button from '../shared/Button'


export default function User() {
  const { userInfo } = useAppSelector(state => state.auth)
  const { open, setOpen, reference } = useMouse();
  const dispatch = useDispatch()
  console.log(open)
  return (
    <div ref={reference} className='flex items-center gap-2 relative'>
      <FaUser className='text-[24px] text-gray ' />
      <div className='leading-none'>
        <h4 className='text-black-dim leading-none font-medium'>Account</h4>
        {!userInfo ? 
          <span className='text-xs leading-none'>
            <Link to={"/auth/register"} className='text-black-dim font-medium underline'>Register</Link> or <Link to={"/auth/login"} className='text-black-dim font-medium underline' >Login</Link>
          </span> : <span className='text-xs leading-none'>
          <Button className='text-black-dim font-medium underline' onClick={() => setOpen(!open)} >Profile</Button> or <Button className='text-black-dim font-medium underline' onClick={()=> dispatch(userLogout())} >Logout</Button>
        </span>}
      </div>

      {open && (
        <div className="absolute bg-white top-14 right-0 py-4  w-[208px] z-50 drop-shadow-2xl rounded-5px ">
          <div
            className="absolute w-5 h-5 bg-white  right-14 -top-[10px] rotate-45 "
            style={{ boxShadow: "rgba(0, 0, 0, 0.06) 2px 3px 0px -2px inset" }}
          />
          df
        </div>
      )}
    </div>
  )
}
