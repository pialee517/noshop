import { useNavigate } from "react-router-dom"

const HandlePage = (e, page= '..') => {
    const navigate = useNavigate()
    e.preventDefault()
    navigate({page})
}
export default HandlePage