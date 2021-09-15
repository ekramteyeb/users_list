

const cardStyle = {
    border:'solid grey 1px',
    margin:'auto',
    width:'40%',
    padding:'15px'
}

const UserDetails = ({user:{
    name,
    username,
    email,
    phone,
    company,
    website,
    address
    

}}) => {
    return (
        <div style={cardStyle}>
                - name : {name}<br/>
                - username : {username}<br/>
                - email : {email}<br/>
                - phone : {phone}<br/>
                - company : {company.name}<br/>
                - wesite : {website}<br/>
                - address : 
                <ul>
                    <li>street : {address.street}</li>
                    <li>suite : {address.suite}</li>
                    <li>city : {address.city}</li>
                    <li>zipcode : {address.zipcode}</li>
                </ul>
        </div>
    )
}

export default  UserDetails