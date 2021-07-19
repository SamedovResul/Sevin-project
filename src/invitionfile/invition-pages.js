import {React} from 'react'
const Invitations = (props) =>{
  const {image, name,} = props.data
  return(
      <>
        <div   className="img-box"  >
          <img src={image} alt="img" />
        </div>
        <div className="text-box">
          <p>{name}</p>
          <button >Ətraflı</button>
        </div>
      </>
  )
}



export default Invitations
