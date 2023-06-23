import React from 'react'
import CardUser from '../../components/CardUser/CardUser';
import { useState, useEffect } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";
import './CategoryPage.css'

const CategoryPage = () => {

  const [chars, setChar] = useState([]);

  let { categoryId } = useParams();
  
  let especiesFiltradas = chars.filter((element) => {
    return element.species === categoryId;
  }); 

  useEffect(() => {
    axios(`${process.env.REACT_APP_BASE_URL}`).then((json) =>
      setChar(json.data.results)
    );
  }, []);


  return (
    <div className='Cards-List'>
      
      {especiesFiltradas.map((char) => {
        return (
          
          <div style={{ margin: 10 }} key={char.id}>
            {/* <h1>{char.species}</h1> Queria poner el titulo del categorypage ya sea alien o humano pero como esta en el map lo repite las veces que sale el card */}
            <CardUser char={char} />
          </div>
        );
      })}
      
    </div>
  )
}

export default CategoryPage

//rafce echo "# PreEntrega2TelloParra"
