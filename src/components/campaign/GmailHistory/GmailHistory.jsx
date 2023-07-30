import profileImg from '../../../assets/campaign/defaultProfile.svg'
const defaultHistory = [
    {
        user: {
            icon: profileImg,
            name: 'Javier Mansilla',
            mail: 'jmansillomo@gmail.com'
        },

        message: `"Sed ut perspiciatis unde omnis

        iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
       
        Nemo enim ipsam voluptatem: quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos.`,
        date: '18 de abr 2023, 7:23',
        for: 'Royer'
    },
    {
        user: {
            icon: profileImg,
            name: 'Javier Mansilla',
            mail: 'jmansillomo@gmail.com'
        },

        message: `"Sed ut perspiciatis unde omnis

        iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
       
        Nemo enim ipsam voluptatem: quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos.`,
        date: '18 de abr 2023, 7:23',
        for: 'Royer'
    },
    
]

export const GmailHistory = ({ history = defaultHistory, leadId }) => {
    return (
        <section>
            <header>
                <h1>
                    {/* cargar desde api de historial o campaña con el id */}
                    Fwd: Campaña Numero 1
                </h1>
            </header>
            <main>
                <ul>
                    {
                        history.map((item, index) => {
                            return (
                                <li key={`history-message-gmail-${index}`}>
                                    <img src={item.user.icon} alt={item.user.name} />
                                    <article>
                                        <div>
                                            <div>
                                                <h2>
                                                    {item.user.name}
                                                    <span>{`<${item.user.mail}>`}</span>
                                                </h2>
                                                <div>
                                                    para {item.for}
                                                </div>
                                            </div>
                                            <div>
                                                <p>
                                                    {item.date}
                                                </p>

                                            </div>
                                        </div>
                                        <p>
                                            {item.message}
                                        </p>
                                    </article>
                                </li>
                            )
                        })
                    }
                </ul>
            </main>
            {/* <footer>
                <button>
                    Responder
                </button>
                <button>
                    Reenviar
                </button>
            </footer> */}
        </section>
    )
}