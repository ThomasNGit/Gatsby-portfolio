import React from "react"
import Layout from "../components/layout"
import attestato from "../utils/attestato.jpg"

export default function Riconoscimenti() {
    return(
        <Layout>
            <div style={{ textAlign: 'center' }}>
                <h1 style={{ marginTop: '70px' }}>Attestato di termine corso Boolean Careers</h1>
                <img src={attestato} alt="Attestato Boolean" className="att-img" style={{ maxWidth: '600px', maxHeight: '700px' }} />
            </div>
        </Layout>
    )
}