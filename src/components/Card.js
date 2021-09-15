import Button from './Button'

/* const style = {
    width:'25%',
    border:'solid #E5E5E5 1px',
    padding:'10px',
    margin:'10px 20px',
    textAlign:'center',
    display: 'inline-block',
    borderRadius:'0.5em'
} */

const Card = ({user:{
    name,
    username,
    email,
    phone,
    company,
    website,
    address:{
        street,
        suite,
        city,
        zipcode
    }
}, handleClick, id}) => {
    return (
        <div className='card'>
            <div className='cardFoto'>
                <p>{name.slice(0,1).toUpperCase()}</p>
            </div><br/>
            <span style={{fontWeight:'bold'}}>{name}</span><br/>
            <small>@{username}</small><br/><br/>
            <p><a style={{textDecoration:'none', color:'#40E0D0'}} href={website}>{website}</a></p>
            <Button name='MORE DETAILS' handleClick={handleClick}  id={id} />
        </div> 
    )
}

export default  Card