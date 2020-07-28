import React from "react"
import Layout from '../components/layout'

export default function Home() {
  return (
      <Layout>
      <div>
        <h1 className="intro">Ciao, sono Thomas, <br></br>un Junior Front-end Web Developer!</h1>
        <p style={{ marginTop: '50px' }} className="introText">Ho realizzato questo mini-portfolio per esercitarmi con Gatsby JS.</p>
        <p className="introText">Spero vi piaccia!</p>
      </div>
      </Layout>
    )
}
