import React from 'react';
import { collection, getDocs } from "firebase/firestore"; 
import { db } from "../firebase-config.js"
import './Home.css';

class Home extends React.Component {
  state = {
    isLoading: true,
    querySnapshot: "",
    mainStates: "",
    mainConnection: "",
    docs: []
  };

  getDB = async () => {
    const querySnapshot = await getDocs(collection(db, "main"));
    const docs = [];
    querySnapshot.forEach((doc) => {
      docs.push(doc.data())
    })
    this.setState({docs: docs, isLoading: false});
  };

  componentDidMount(){
    this.getDB();
  }

  Aaa = ({ name, s }) => {
    return (
      <div>
        <p>this is Modal call</p>
        <p>DB connection Done.</p>
        <h3>{name}</h3>
        <h4>main connect state {s}</h4>
        {/* <h3>{mainstate}</h3> */}
      </div>
    )
  }
  
  render() {
    const { isLoading, mainStates, docs } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">'Loading...'</span>
          </div>
          ) : (
          <div className="Home_1">
            <h1>This is Home</h1>
            <h2>DB 연결 확인</h2>
            {/* <this.Aaa /> */}
            {console.log(mainStates)}

            {docs.map((el) => (
              <this.Aaa name={el.name} s={el.mainstate}/>
            ))}
            <div>
              <br/>
              <h2>실용 프로그래밍 Web App/ 정민재</h2>
            </div>
          </div>
          )}
      </section>
    );
  }
}

export default Home;
