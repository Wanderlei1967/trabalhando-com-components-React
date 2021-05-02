import { useState } from 'react';
import Button from '../Button';

const Card = () => {

    const [Valor, setValor] = useState(0)

    function Adicionar (){
        setValor(Valor + 1)
    }

    function Remover (){
        setValor(Valor - 1)
    }


    return(
        <div class="card">
            <div className="card-header">
                Meu primeiro card
            </div>
            <div className="card-body">
                <Button
                    className="btn btn-success"
                    onClick={Adicionar}
                >
                    Adicionar    
                </Button>
                <Button
                    className="btn btn-danger"
                    onClick={Remover}
                >
                    Remover    
                </Button>
                <p>{Valor}</p>
            </div>
        </div>
    )
}

export default Card;