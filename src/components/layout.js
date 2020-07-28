import React from "react"
import { Link } from "gatsby"

const ListLink = props => (
    <li style={{ display: `inline-block`, marginRight: `1rem` }}>
        <Link to={props.to}>{props.children}</Link>
    </li>
)

export default function Layout({ children }) {
    return (
        <div style={{ height: '100%', margin: `3rem auto`, maxWidth: 1250, padding: `0 1rem` }}>
            <header style={{ marginBottom: `1.5rem` }}>
                    <h3 style={{ display: `inline` }} className="title">Thomas Neroni Portfolio</h3>
                <ul style={{ listStyle: `none`, float: `right` }}>
                    <ListLink to="/">Home</ListLink>
                    <ListLink to="/about/">Su di me</ListLink>
                    <ListLink to="/riconoscimenti/">Riconoscimenti</ListLink>
                    <ListLink to="/contact/">Contatti</ListLink>
                </ul>
            </header>
            {children}
        </div>
    )
}