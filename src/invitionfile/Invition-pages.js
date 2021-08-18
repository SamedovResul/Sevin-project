import {React} from 'react'
const Invitations = (props) =>{
  // console.log(props.imgOpacity)
  const {image, name,kod} = props.data
  return(
      <>
        <div   className="invitation-img-box"  >
          <img style={props.imgOpacity} src={image} alt="img" />
        </div>
        <div className="invitation-text-box">
          <p>{name}</p>
          <button style={props.imgOpacity} >Ətraflı</button>
        </div>
      </>
  )
}



export default Invitations
