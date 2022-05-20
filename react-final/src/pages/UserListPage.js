import { useEffect, useState } from 'react';

export default function UserListPage(props) {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect( //hook function
        () => { //callback fun started
           
            fetch('https://reqres.in/api/users?page=1') //browser function to send api / backend
                .then(res => res.json()) // return promise 
                .then(
                    (success) => {
                        setUsers(success.data);
                        setIsLoaded(true)
                    },
                    (error) => {
                        setError(error)
                    }
                )

        } //end of callback
    )

        return (
            <ul>
                <b>Fetching API inside function based component</b>
                <br></br>
                <br></br>
                <div className="container">
                <div className='row'>
                    {users.map(item => (
                        <div key={item.id} className='col-4'>
                            <div className="card" >
                                <img src={item.avatar} width="80" height={200} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{item.first_name} {item.last_name}</h5>
                                    <p className="card-text">{item.email}</p>
                                    <a className="btn btn-primary">View</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                </div>
            </ul>
        );
  //  }

}