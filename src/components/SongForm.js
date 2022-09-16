import { useState } from "react";
import styles from 'styled-components';

const initialForm = {
    artist: "",
    song: ""
}

function SongForm({handleSearch}) {
    const [form, setForm] = useState(initialForm);

    // console.log(form);
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!form.artist || !form.song){
            alert("Datos incompletos");
            return;
        }

        handleSearch(form);
        setForm(initialForm);
    }

    return (
        <>
            <FormContainer onSubmit={handleSubmit}>
                <input type='text' name='artist' placeholder='Artista'onChange={handleChange} value={form.artist}/>
                <input type='text' name='song' placeholder='Cancion'onChange={handleChange} value={form.song}/>
                <input type='submit' value='Buscar'/>
            </FormContainer>  
        </>
    )
}

export default SongForm;

const FormContainer = styles.form`
    background: #FFB200;
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    width: 90vw;
    margin: 0 auto;

    input{
        margin-top: 0.5rem;
        padding: 0.5rem;
        border-radius: 10px;
        border: none;
    }

    input:focus{
        background: #FFCB42;
    }

    input[type= "submit"]{
        width: 5rem;
        margin: 0.5rem auto;
        background: #277BC0;
        color: #FFF;
    }

    input[type= "submit"]:hover{
        background: #277BC099;
    }

    @media(min-width: 850px){
        width: 765px;
    }
`
