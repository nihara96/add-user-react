import Card from "../UI/Card";
import classes from "./UsersList.module.css";

const UsersList = (props) => {
  console.log(props.users);
  return (
    <Card className={classes.users}>
      <ul>
        {
          props.users.map((user)=>{ 
            return <li>{user.name} ({user.age} years old)</li>
          })
        }
      </ul>
    </Card>
  );
};

export default UsersList;
