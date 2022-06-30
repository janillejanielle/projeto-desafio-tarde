import React, {useState} from 'react';
import styled from 'styled-components'
import styles from './styles.module.css'

const addButton = {
    backgroundColor: 'lightgreen'
} 

//function AddUserForm(props) {}
const AddUserForm = (props) => {



    const initFrom = {id: null, name: null, username: null, email: null}
    const [user, setUser] = useState(initFrom)

    const handleInputChange = (event) => {

        const {name, value} = event.target 

        setUser({...user, [name]: value})

    }

    return (
        <from 
        style={{
            display: "flex",
            flexDirection: "colum"
        }}
        onSubmit={
            (event) =>{

                event.preventDefault()

                if (!user.name || !user.email || !user.username) {
                    return
                }

                props.AddUser(user)
                setUser(initFrom)

            }
        }>

            <label className={styles.label}>Nome</label>
            <input type="text" name="name" value={user.name} onChange={handleInputChange} placeholder="Nome do usuário" />

            <label className={styles.label}>UserName</label>
            <input type="text" name='username' value={user.username} onChange={handleInputChange} placeholder="Nickname do usuário" />

            <label className={styles.label}>Email</label>
            <input type="email" name="email" value={user.email} onChange={handleInputChange} placeholder="Email do usuário" />

            <button style={addButton}>Registrar</button>


        </from>
    )
    
}

export default AddUserForm