import styles from 'styled-components';

const Message = ({msg}) => {
    return (
        <>
            <MessageContainer>
                <p>{msg}</p>
            </MessageContainer>
        </>
    )
};

export default Message;

const MessageContainer = styles.div`
    width: 90vw;
    height: 10%;
    margin: 2rem auto;
    background: #dc3545;
    font-weight: bold;
    color: #fff;
    padding: 0.2rem;

    @media(min-width: 850px){
        width: 765px;
    }
`