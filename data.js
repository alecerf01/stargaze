import react, { useState, useEffect } from 'react'
import axios from 'axios'

function DataFetching() {
    const [images, setImages] = useState([])

    useEffect(() => {
        axios.get('//jsonplaceholder.typicode.com/todos/1')
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
    })

    return(
        <div>
 <
        </div>
    )
}

export default DataFetching;