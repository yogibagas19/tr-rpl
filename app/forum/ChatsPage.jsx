import { MultiChatSocket, MultiChatWindow, useMultiChatLogic} from 'react-chat-engine-advanced'

const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic(
      "b785b52a-af33-4cfa-9e10-6811b74497af",
      props.user.username,
      props.user.secret
    );
  return (
    <>
        <div className='h-screen'>
            <MultiChatSocket {...chatProps} />
            <MultiChatWindow {...chatProps} style={{ height: "100vh"}} />
        </div>
    </>
  );
};
export default ChatsPage;
