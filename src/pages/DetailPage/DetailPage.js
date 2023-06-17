import CardUser from "../../components/CardUser/CardUser";
import {useState, useEffect} from "react";
import axios from 'axios';
import {useParams} from "react-router-dom";
import "./DetailPage.css"

const DetailPage = () => {

  const [char, setChar] = useState({});

  let {id} = useParams();

  console.log(char)

  useEffect(() => {
    axios(`${process.env.REACT_APP_BASE_URL}/${id}`).then((json) =>
      setChar(json.data)
    );
  }, [id]);

  return (
    <div className="Detail-List">
      {char.id ? <CardUser char={char} /> : null }
    </div>
  )
}

export default DetailPage