import { PageLayout } from "../components/General/PageLayout"
import styles from '../styles/pages/team.module.css'
import { TeamTable } from "../components/Team/TeamTable"

const DEFAULD_DATA = [
  {
    id: 1,
    name: 'test1',
    position: 'CTO',
    email: 'test@test.com',
    location: 'Chile'
  },
  {
    id: 2,
    name: 'test2',
    position: 'CEO',
    email: 'test@test.com',
    location: 'Chile'
  },
  {
    id: 3,
    name: 'test3',
    position: 'COO',
    email: 'test@test.com',
    location: 'Chile'
  },
  {
    id: 4,
    name: 'test4',
    position: 'Developer',
    email: 'test@test.com',
    location: 'Chile'
  }
]

const Team  = () => {
  return (
    <PageLayout>
      <section className={styles.mainSection}>
        <header className={styles.teamHeader}>
          <h1>
            ¡Mi equipo!
          </h1>
          <div className={styles.headerInfo}>
            <p>
              Trabajar en equipo es más divertido
            </p>
            <button
              className="pageButton pageButton--hover"
            >
              Invitar
            </button> 
          </div>
        </header>
        <section className={`pageSection ${styles.tableSection}`}>
          <div className={styles.tableContainer}>
            <TeamTable
              data={DEFAULD_DATA}
            />
          </div>
        </section>
      </section>
    </PageLayout>
  )
}

export default Team