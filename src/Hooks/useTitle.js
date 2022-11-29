import { useEffect } from "react"


const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Resale Cars`;
    }, [title])
}

export default useTitle