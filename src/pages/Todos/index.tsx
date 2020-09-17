import React, {useEffect, useState} from 'react';
import Page from 'components/Page';
import Layout from "../../layout";
import Content from "../../components/Content";


function Todos() {

  const [liste, setListe] = useState ([]);
  const [count, setCount] = useState (0);
  const [refresh, setRefresh] = useState (false);

  {/*function fetchAPI() {
    fetch('API.json')
      .then( (response) =>
        response.text()
      )
      .then((data) =>{
        setListe(JSON.parse(data))
      });
  } */}

  useEffect(()=>{
    fetch('API.json')
      .then((response) =>response.json())
      .then((data) => {
        setListe(data)
      })
  },[]);

  return(
    <Layout>
      <Page className="Todos">
        <div onClick={() => setRefresh(!refresh)}>{count}</div>
        <ul>
          {liste && liste.map((item, i) =>(
            <Content  key={i} todo={item} refresh={refresh} count={count} onClick={setCount} />
          ))}
        </ul>
      </Page>
    </Layout>);
}

export default Todos;
