import React from 'react'
import { PageLayout } from '../components/General/PageLayout'  
import styles from '../styles/pages/campaignHome.module.css'


const Billing = () => {
    
    window.piriodSettings = {
        service: "signupForms",
        publishableKey: "for_dQyGmLqaDz1NOGTIbXmJzBYUypbfnHTQ46t3KzwOv261bsfC"
    };
    (function () { var s=document.createElement("script"); s.src="https://js.piriod.com/embed/piriod-embed.umd.min.js"; s.async=true; s.type="text/javascript"; var x=document.getElementsByTagName("script")[0]; x.parentNode.insertBefore(s, x); })();
       
    return (
        <PageLayout>

            {/* <header className={styles.homeHeader}>
                <div className={styles.homeHeaderInfo}>
                    <h1>
                        Pagos y facturación
                    </h1>
                    <p>
                        ¡Ten al día tu cuenta y maneja los pagos de forma automatizada y segura!
                    </p>
                </div>
                <button className={`pageButton pageButton--hover ${styles.headerButton}`}>
                    Descargar reporte
                </button>

                <div className={styles.info}>
                    <div className={styles.plan}>
                        <h2>
                                Plan de suscripción actual
                        </h2>
                        <h1>
                                BÁSICO 
                        </h1>
                        <p>
                                ¿Necesitas características adicionales?
                        </p>
                        <button>
                                Upgrade 
                        </button>
                    </div>

                    <div className={styles.infoplan}>
                        <div className={styles.incluye}>
                            <p>
                                        Qué incluye tu plan actual 
                            </p>
                            <h1>
                                        $34 K <span>por mes</span>
                            </h1>
                        </div>
                        <div className={styles.}>

                        </div>

                    </div>

                    <div className={styles.api}>

                    </div>

                    <div className={styles.renovacion}>

                    </div>
                </div>
            </header> */}
            <div id="piriod-widget">
                
            </div>


            
       
        </PageLayout>
    )
}

export default Billing