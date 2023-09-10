// import Hamburger from "./Hamburger"

const Navigation = () => {
    const links = {
        home: 'home',
        about: 'about us',
        contact: 'contact us',
        team: 'team',
        products: 'products'
    }

    return (
        <nav className='navigation'>
            <div className="navigation-background">
                <div className='max-width-12'>
                    <div className='navigation-content flexed'>
                        <Logo />
                        <ul className='navigation-list flexed'> 
                            <NavLinks links={links} />
                        </ul>
                    </div>
                </div> 
            </div>
        </nav>
    )
}

const Logo = () => {
    return (
        <div className='logo-box'>
            <h1 className='logo'>Dairy Tech</h1> 
        </div>
    )
}
const NavLinks = ({ links }) => {
    return (
        <>
            {Object.values(links).map((title) =>
                <li className='navigation-item'> <a href={`#${title}`} className="navigation-link">{title}</a> </li>
            )} 
        </> 
    )
}  

// const Hamburger = ()=> {
//     return (
//         <div className="hamburger-menu"> <span className="hamburger-bar">  </span> </div>
//     ) 
// }

export default Navigation;  