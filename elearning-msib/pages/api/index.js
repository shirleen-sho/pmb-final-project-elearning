import React from 'react'
import Buttons from '../../Components/Buttons'

const api = () => {
    return (
        <div className='m-5'>
            <Buttons classColor="btn-primary">Primary</Buttons>
            <Buttons classColor="btn-secondary">Secondary</Buttons>
            <Buttons classColor="btn-light">Light</Buttons>
            <Buttons classColor="btn-dark">Dark</Buttons>
            <Buttons classColor="btn-info">Info</Buttons>
            <Buttons classColor="btn-success">Success</Buttons>
            <Buttons classColor="btn-warning">Warning</Buttons>
            <Buttons classColor="btn-danger">Danger</Buttons>
            <Buttons classColor="btn-link">Print</Buttons>
        </div>
    )
}

export default api