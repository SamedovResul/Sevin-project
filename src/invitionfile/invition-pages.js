import {React} from 'react'
const Invitations = (props) =>{
  console.log(props.imgOpacity)
  const {image, name,} = props.data
  return(
      <>
        <div   className="img-box"  >
          <img style={props.imgOpacity} src={image} alt="img" />
        </div>
        <div className="text-box">
          <p>{name}</p>
          <button style={props.imgOpacity} >Ətraflı</button>
        </div>
      </>
  )
}



export default Invitations
