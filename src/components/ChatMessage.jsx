import robotprofimg from '../assets/robot.png'
import userprofimg from '../assets/user.png'
export function ChatMessage({message , sender}) {
        //const message=props.message;
       //const sender= props.sender;
      // const { message , sender }=props;

        return(
          <div className={sender==='user'?'chtmsguser':'chtmsgrobot'}>
            {sender ==='robot' &&  <img  src={robotprofimg}   className="chtmsgprof"/>}
            <div className="chtmsgtxt">
            {message}
            </div>
             {sender ==='user' && <img  src={userprofimg}   className="chtmsgprof"/>}
          </div>
        )
      } 