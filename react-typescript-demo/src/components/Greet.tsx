type GreetProps={
    name:string,
    messageCount:10,
    isLoggedIn:boolean
}
export const Greet = (props:GreetProps) => {
  const {messageCount=0}=props
  return (
    <div>
        {props.isLoggedIn ? `Greet ${props.name}....You have ${props.messageCount} messages`:'Welcome Guest'}
    </div>
  )
}