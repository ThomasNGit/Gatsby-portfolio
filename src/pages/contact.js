import React from "react"
import Layout from '../components/layout'


export default function Contact() {
    return (
        <Layout>
        <div>
            <h1 style={{ marginTop: '2.5rem '}}>Ecco come potete contattarmi:</h1>
                <ul style={{ listStyle: 'square', padding: '5rem 1rem' }}>
                    <li>
                        Email: <a href="mailto:thomas.neroni.dev@gmail.com">thomas.neroni.dev@gmail.com</a>
                    </li>
                    <li>
                        LinkedIn: <a href="https://www.linkedin.com/in/thomas-neroni-2a36271a1/" target='_blank' rel="noreferrer">LinkedIn Thomas Neroni</a>
                    </li>
                    <li>
                        Facebook: <a href="https://www.facebook.com/thomas.neroni/" target='_blank' rel="noreferrer">Facebook Thomas Neroni</a>
                    </li>
                    <li>
                        Cellulare: 3475774406
                    </li>
                </ul>
        </div>
        </Layout>
    )
}