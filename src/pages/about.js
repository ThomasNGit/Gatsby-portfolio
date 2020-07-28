import React from "react"
import Layout from '../components/layout'
import me from "../utils/me.jpg"

export default function About() {
    return (
        <Layout >
        <div className="aboutContainer">
            <img className="me" src={me} alt="Me"></img>
            <div className="description">
                <h1 style={{marginTop: 0}}>Qualche parola su di me:</h1>
                <p style={{ fontSize: '20px', marginTop: '3rem' }}>
                    Sono un ragazzo con la passione per l'informatica da sempre. <br></br>
                Ho svolto molti lavori diversi, ma sono sempre stato attirato dal mondo informatico e tutto ciò che ne circonda, dall'hardware alla programmazione,
                per questo quando ho trovato l'inserzione di <a href="https://www.boolean.careers/" style={{ color: 'inherit'}}>Boolean Careers</a>  mi ci sono fiondato a capofitto.               
                </p>

                <p style={{ fontSize: '20px', marginTop: '3rem' }}>
                Voglio fare il web developer per mettere alla prova le mie conoscenze e le mie capacità di problem solving in n campo che mi piace e che sono sicuro mi porterà
                moltissime soddisfazioni professionali.
                </p>

                <p style={{ fontSize: '20px', marginTop: '3rem' }}>
                    Per quanto riguarda il mio tempo libero, mi piace molto giocare ai videogiochi, infatti gioco spesso col mio gruppo di amici e la mia ragazza a vari giochi online.<br></br>
                    Mi piace camminare e fare attività fisica in generale e adoro gli animali, in particolare i gatti.
                </p>
            </div>
        </div>
        </Layout>
    )
}