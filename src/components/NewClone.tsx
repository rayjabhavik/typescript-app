import React,{MouseEventHandler} from 'react'
interface MyButtonProps{
    text: string | number;
    // onClick ?: () => void
    onClick?: MouseEventHandler;
}
//  ? use for option parameter
// pass text as number write {123}
const NewClone: React.FC<MyButtonProps> = (props) =>{
    const {text,onClick} = props;
  return (
   <button onClick={onClick}>{text}</button>
  )
}

// const Button: React.FC<{text:string}> = (props) =>{
//     return (
//      <button>{props.text}</button>
//     )
//   }

export default NewClone