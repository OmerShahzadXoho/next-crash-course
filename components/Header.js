import headerStyle from '../styles/Header.module.css'

const Header = () => {
    return (
        <div className={headerStyle.title}>
            <h1><span>WebDev</span> News </h1>
            <p className={headerStyle.description}>
                Keep up to date with latest web dev news</p>
        </div>
    )
}

export default Header