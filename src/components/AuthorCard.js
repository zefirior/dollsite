import React from 'react'
import '../assets/AuthorCard.css'


const cardStyle = {
    marginTop: window.innerHeight / 3 + 'px'
};

class AuthorCard extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="card authorcard" style={cardStyle}>
                <div className="card-header">
                    <h2>Кукольный магазинчик</h2>
                </div>
                <div className="card-body">
                    <h3>небольшой набор текста</h3>
                    <p>большой набор текста большой набор текста большой набор текста
                        большой набор текста большой набор текста большой набор текста </p>
                </div>
            </div>
        )
    }

}

export default AuthorCard
