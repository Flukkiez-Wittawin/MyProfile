import './MyContact.css'
import facebook from './Logo/facebook.png'
import line from './Logo/line.png'
import github from './Logo/github.png'
import instagram from './Logo/instagram.png'

function MyContact() {
    return <div className='MyContact'>
        <h1>Contacts</h1>
        <div className="logo">
            <img onClick={()=> window.location = `https://github.com/Flukkiez-Wittawin`} src={github} alt={github} />
            <img onClick={()=> window.location = `https://www.facebook.com/SlalonZ/`} src={facebook} alt={facebook} />
            <img onClick={()=>alert(`ID LINE : @fuckkriss`)} src={line} alt={line} />
            <img onClick={()=> window.location = `https://www.instagram.com/so_borinn.g/`} src={instagram} alt={instagram} />
        </div>
    </div>
}
export default MyContact