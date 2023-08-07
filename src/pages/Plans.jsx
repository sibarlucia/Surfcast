import { PageLayout } from '../components/General/PageLayout'
import styles from '../styles/pages/plans.module.css'
import { PlansCard } from '../components/plans/PlanCard/PlansCard' 
import { Link } from 'react-router-dom'

const plansInfo = [
    {
        title: 'BÁSICO',
        description: 'Qué ofrece este plan y cuándo lo recomiendan',
        price: '7 UF'
    },
    {
        title: 'MEDIUM',
        description: 'Qué ofrece este plan y cuándo lo recomiendan',
        price: '9 UF'
    },
    {
        title: 'AVANZADO',
        description: 'Qué ofrece este plan y cuándo lo recomiendan',
        price: '10 UF'
    },
]

const ACTUAL_PLAN = 'MEDIUM'

const Plans = () => {
    return (
        <PageLayout
            separator={false}
            useMenu={false}
        >
            <section className={styles.mainSection}>
                <main className={styles.main}>
                    <h1 className={styles.mainTitle}>
                        Puedes escoger algunos de nuestros planes
                    </h1>
                    <div className={styles.cardsContainer}>
                        {
                            plansInfo.map((item, index) => {
                                return (
                                    <PlansCard
                                        key={`plan-${index}`}
                                        title={item.title}
                                        description={item.description}
                                        price={item.price}
                                        disableButton={ACTUAL_PLAN === item.title}
                                        onSelected={(data) => {console.log(data)}} 
                                    />   
                                )
                            })
                        }
                    </div>
                    <Link
                        to={'/home'}
                        className={styles.freeTier}
                    >
                        Quiero seguir con la prueba gratuita de 7 días
                    </Link>
                </main>
            </section>
        </PageLayout>
    
    ) 
}

export default Plans