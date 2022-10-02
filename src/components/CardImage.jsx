import MyImage from '../assets/image.jpg' 


export default function CardImage() {
  return (
    <div className='card-image-container'>
        <img src={MyImage} className='card-image' />
    </div>
  )
}