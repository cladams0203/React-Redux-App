import React, {useState} from 'react'

export function ShowSearch(props) {
    const [formValue, setFormValue] = useState('')
    console.log(formValue)
    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            props.search(formValue)
            }
        }>
            <h2>Search shows here</h2>
            <input
                onChange={(e) => 
                    setFormValue(e.target.value)
                }
                name="search"
                value={formValue}
                type='text'
            />
            <button type='submit'>Search</button>
        </form>
    )
}