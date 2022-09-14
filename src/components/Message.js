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
    width: 70%;
    margin: 5rem auto;
    background: #dc3545;
    font-weight: bold;
    color: #fff;
    padding: 1rem;
`