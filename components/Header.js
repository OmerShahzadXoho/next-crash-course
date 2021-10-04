import herderStyle from '../styles/Header.module.css'

const Header = () => {
    return (
        <div className={herderStyle.title}>
            <h1><span>WebDev</span> News </h1>
            <p className={herderStyle.description}> Keep up to date with latest web dev news</p>
        </div>
    )
}

export default Header