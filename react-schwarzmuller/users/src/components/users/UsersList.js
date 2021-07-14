import Card from '../ui/Card'
import classes from './UsersList.module.css'

const UsersList = ({ users }) => {
  return (
    <Card className={classes.users}>
      {users.length > 0 &&
        <ul>
          {users.map(({ id, name, age }) => (
            <li key={id}>{name} ({age})</li>
          ))}
        </ul>
      }
      {users.length === 0 &&
        <ul>
          <li>No users have been added yet</li>
        </ul>
      }
    </Card>
  )
}

export default UsersList