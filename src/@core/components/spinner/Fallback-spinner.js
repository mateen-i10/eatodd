// ** Logo
import logo from '@src/assets/images/my-images/OMG_icon.png'

const SpinnerComponent = () => {
  return (
    <div className='fallback-spinner app-loader'>
      <img className='fallback-logo' style={{width:50}} src={logo} alt='logo' />
      <div className='loading'>
        <div className='effect-1 effects'></div>
        <div className='effect-2 effects'></div>
        <div className='effect-3 effects'></div>
      </div>
    </div>
  )
}

export default SpinnerComponent
