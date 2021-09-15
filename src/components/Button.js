import { Link } from 'react-router-dom'

/* const buttonStyle = {
   padding:'5px', 
   backgroundColor:'#4185F3',
   color:'white',
   borderRadius:'0.5em',
   width:'60%', 
   border:'none',
   margin:'25px 0px 0px ',
   textDecoration:'none'
} */

const Button = ({id, handleClick, name}) => {
    return (
        <div>
            <Link  
                to={`/users/${id}`} 
                onClick={handleClick} 
                className='buttonStyle'>
                {name}
            </Link>
        </div>
    )
}

export default Button