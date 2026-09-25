import { useNavigate, useParams } from "react-router"


function ProductDetailPage () {
    const { id } = useParams()
    const navigate = useNavigate()

    return (
        <>
            <button onClick={()=> navigate(-1)}>Volver</button>
            <p>El producto recibido es: {id}</p>
        </>
    )
}

export default ProductDetailPage