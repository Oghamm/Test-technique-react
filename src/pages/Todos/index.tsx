import React, {useEffect, useState} from 'react';
import Page from 'components/Page';
import Layout from "../../layout";


function Todos() {
  function fetchAPI() {
    fetch('API.json')
      .then( (response) =>
        response.text()
      )
      .then((data) =>{
        setListe(JSON.parse(data))
      });
  }

  const [liste, setListe] = useState <any[]>([])

  useEffect(()=>{
    fetchAPI()
  },[])

  return(
    <Layout>
      <Page className="Todos">
        {liste && liste.map((todo,i)=> {
          return (
            <li key={i}>
              <div>{todo.title}</div>
              <div className={'hidden'}>
                <div>{todo.content}</div>
                <button>close</button>
              </div>
            </li>)
        })}
      </Page>
    </Layout>);
}

export default Todos;
