import headmb from '../../public/assets/bg-header-mobile.svg'
import headdk from '../../public/assets/bg-header-desktop.svg'

function Header() {
  return (
    <header className='bg-ddcyan overflow-hidden'>
      <picture>
        <source srcSet={headdk} media="(min-width: 768px)"/>
        <img className='mx-auto' src={headmb}/>
      </picture> 
    </header>
  )
}
export default Header