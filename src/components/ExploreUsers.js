import { useParams } from 'react-router-dom'
import UserDetails from './UserDetails'

function ExploreUsers ( { data } ) {
  let { id } = useParams()

   return data.filter(user => user.id === +id).map(u => <UserDetails key = {u.id} user={u} />)
}

export default ExploreUsers