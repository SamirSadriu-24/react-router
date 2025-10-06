import { useEffect, useState } from "react";

const Prodotti = () => {

    const [prodotti, impostaProdotti] = useState([]);

    useEffect(() => {
        const Url = "https://fakestoreapi.com/products";
        fetch(Url)
            .then((risposta) => risposta.json())
            .then(data => impostaProdotti(data))
            .catch(error => { console.log(error) });

    }, [])

    return (
        <div className="default-link">
            <div className="card-container">
                {prodotti.map((prodotto) => (
                    <div className="card-prodotto" key={prodotto.id}>
                        <div className="card">
                            <div className="card-info">
                                <img src={prodotto.image} alt={prodotto.title} />
                                <p className="title">{prodotto.title}</p>
                                <p> <span className="title">Categoria:</span> {prodotto.category}</p>
                                <p className="card-description">
                                    <span className="title">Descrizione:
                                    </span> {prodotto.description}</p>
                                <p>{prodotto.price} + "€"
                                </p>
                            </div>
                            <div className="card-rating">
                                <p className="title">Valutazione:</p>
                                <div className="rating">
                                    <p>Recensioni totali: {prodotto.rating.count}</p>
                                    <p>Stelle: {prodotto.rating.rate} / 5</p>
                                </div>
                            </div>
                            <button>BUY</button>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Prodotti