import Sidebar from "../../components/Sidebar";
import Feed from "../../components/Feed";
import styles from '../styles/Container.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>
      <div className={styles.feed}>
        <Feed />
      </div>
    </div>
    
 )
}

/* 
Sidebar
Feed
Widgets
Modal
*/