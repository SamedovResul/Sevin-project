import {React} from 'react'
const Invitations = (props) =>{
  // console.log(props.imgOpacity)
  const {image, name,} = props.data
  return(
      <>
        <div   className="invitation-img-box"  >
          <img style={props.imgOpacity} src={image} alt="img" />
        </div>
        <div className="invitation-text-box">
          <p>{name}</p>
          <button style={props.imgOpacity} className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Ətraflı</button>
        </div>
      </>
  )
}



export default Invitations
