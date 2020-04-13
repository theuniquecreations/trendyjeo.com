import React from 'react'
import { Link } from 'react-router-dom'
import './style.scss'

const cetagoryMenu = [
    { name: 'Family Law', route: "case-stadies-details" },
    { name: 'Criminal Law', route: "case-stadies-details" },
    { name: 'Business Law', route: "case-stadies-details" },
    { name: 'Personal Injury', route: "case-stadies-details" },
    { name: 'Education Law', route: "case-stadies-details" },
    { name: 'Drugs Crime', route: "case-stadies-details" },
]

const CetagorySidebar = ({ className, title }) => {
    return (
        <div className={className}>
            <h3 className="sidebarTitle">{title}</h3>
            <ul>
                {cetagoryMenu.map((cetagory,i) => (
                    <li key={i}><Link to={cetagory.route}>{cetagory.name}</Link></li>
                ))}
            </ul>
        </div>
    )
}
export default CetagorySidebar