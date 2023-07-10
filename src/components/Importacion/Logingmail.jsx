import React from 'react'
import styles from './logingmail.module.css'
const Logingmail = () => {
  return (
    <div className={styles.mainDiv}>
      <div className={styles.childDiv}>
        <form>
        <img src='/src/assets/gmail.png'/>
          <article className={styles.mainArticle}>
            <section >
              <h1>Acceder</h1>
              <h2>Usa tu cuenta de Google</h2>
            </section>
            <section className={styles.sectioninput}>
              <input type='text' placeholder='Correo electrónico' className={styles.inputlogin}></input>
              <p>¿Olvidaste el correo electrónico?</p>
              <h3>¿Esta no es tu computadora? Usa el modo invitado para navegar de forma privada</h3>
            </section>
            <section className={styles.sectionbuttons}>
              <button type='button'className={styles.button1} >Crear cuenta</button>
              <button type='button' className={styles.button2}>Siguiente</button>

            </section>
            <section className={styles.footer}>
              <button type='button'>Ayuda</button>
              <button type='button'>Privacidad</button>
              <button type='button'>Condiciones</button>
            </section>
          </article>
        </form>
      </div>
    </div>
  )
}

export default Logingmail