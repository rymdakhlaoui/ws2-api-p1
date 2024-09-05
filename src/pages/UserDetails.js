import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card, Spinner } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

const UserDetails = () => {
    const navigate = useNavigate()
    const [user, setUser] = useState({})

    const {id} = useParams()

    useEffect(() => {
      axios
      .get(`https://jsonplaceholder.typicode.com/users?id=${id}`)
      .then((res)=> setUser(...res.data))
      .catch((err)=> console.log(err))
    }, [id])
    
  return (
    <div style={{display: "flex", justifyContent: "center", marginTop: "5%"}}>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="https://cdn-icons-png.flaticon.com/512/149/149071.png" />
        <Card.Body>
            {
                !user? 
                <Spinner animation="border" variant="secondary" />
                :
                <>          
                <Card.Title>{user.name}</Card.Title>
                <Card.Text>
                  {user?.address?.street}
                </Card.Text>
                <Card.Text>
                  {user?.address?.city}
                </Card.Text>
                </>
            }


          <Button variant="primary" onClick={()=> navigate(-1)}>Back</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default UserDetails;
