function App() {

  // const userNames=['neha','sam','ram'];

  const userData = [
    {
      name: 'neha',
      age: 20,
      email: "neha@123.com",
      id: 1
    },
    {
      name: 'sam',
      age: 20,
      email: "sam@123.com",
      id: 2
    },
    {
      name: 'ram',
      age: 21,
      email: "sam@123.com",
      id: 3
    }

  ]


  return (
    <div>
      <h1>Loop in Js with Map function</h1>
      <table border="1">
        <thead>
          <tr>
            <td>Id</td>
            <td>name</td>
            <td>email</td>
            <td>age</td>
          </tr>

        </thead>

        <tbody>
          {
            userData.map((user)=>(
              <tr key={user.id}>
              <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.age}</td>
            </tr>
            ))
          }
        </tbody>
      </table>

      <h1>Dummy data</h1>
      <table border="1">
        <thead>
          <tr>
            <td>Id</td>
            <td>name</td>
            <td>age</td>
            <td>email</td>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td>neha</td>
            <td>20</td>
            <td>neha@123.com</td>
          </tr>
          <tr>
            <td>1</td>
            <td>neha</td>
            <td>20</td>
            <td>neha@123.com</td>
          </tr>
          <tr>
            <td>1</td>
            <td>neha</td>
            <td>20</td>
            <td>neha@123.com</td>
          </tr>
          <tr>
            <td>1</td>
            <td>neha</td>
            <td>20</td>
            <td>neha@123.com</td>
          </tr>
        </tbody>
      </table>

    </div>
  )
}

export default App;