import styles from '../styles/Layout.module.css';
import Navbar from "./Navbar";
import Header from "../components/Header";

const Layout = ({children}) => {
    return (
        <>
            <Navbar />
            <div className={styles.container}>
                <main className={styles.main}>
                    <Header />
                    {children}
                </main>
                <h1>Layout</h1>
            </div>
        </>
    )
}

export default Layout;