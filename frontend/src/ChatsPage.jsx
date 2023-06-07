import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from "react-chat-engine-advanced";

const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic('8cedda7c-b268-46ae-93c5-242441f20622', props.user.username, props.user.secret);
    return (
    <div style={{ height: '100vh'}}>
       <MultiChatSocket {...chatProps} />
       <MultiChatWindow {...chatProps} style={{ height: '100vh'}}/>
    </div>  
    )
}

export default ChatsPage
