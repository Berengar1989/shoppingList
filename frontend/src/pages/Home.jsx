import React, { useEffect, useState } from 'react';
import HomeMain from '../components/home/HomeMain';
import Create from '../components/Create';
import Edit from '../components/Edit';
import Delete from '../components/Delete';

const defaultData = {
  "data": [
    {"_id": "id-11235446",
    "title":"klobása",
    "author":"Tesco",
    "publishYear": "1kg",
    "done": false
  },{"_id": "id-586991",
    "title":"šunka",
    "author":"Lidl",
    "publishYear": "0.5kg",
    "done": true
  }]};

const Home = () => {
  const [type, setType] = useState("MAIN");
  const [data, setData] = useState([]);
  const [item, setItem] = useState();

  useEffect(() => {
    setData(defaultData.data);
  }, []);


  function onCreateClick(){
    setType("CREATE");
  }

  function onCreateSave(item){
    setData([...data, item]);
    setType("MAIN");
  }

  function onEditClick(item){
    setItem(item);
    setType("EDIT");
  }

  function onEditSave(item){
    const newData = data.map(it => { 
      if (it._id === item._id){
        const newItem = Object.assign({}, it, item);
        return newItem;
      } else return it;
    });

    setData(newData);
    setType("MAIN");
  }

  function onDeleteClick(item){
    setItem(item);
    setType("DELETE");
  }

  function onDeleteSave(item){
    const newData = data.filter(it => it._id !== item._id);
    setData(newData);
    setType("MAIN");
  }

  function onDoneClick(item){
    const newData = data.map(it => { 
      if (it._id === item._id){
        const newItem = Object.assign({}, it, {done: !it.done});
        return newItem;
      } else return it;
    });
    setData(newData);
  }
  

  function onReturn(){
    setType("MAIN");
  }

  function renderSwitch(param){
    switch(param) {
      case "MAIN": 
        return <HomeMain data={data} onCreate={onCreateClick} onEditClick={onEditClick} onDeleteClick={onDeleteClick} onDoneClick={onDoneClick}/>;
      case "CREATE": 
        return <Create onSave={onCreateSave} onReturn={onReturn}/>;  
      case "DELETE": 
        return <Delete item={item} onSave={onDeleteSave} onReturn={onReturn}/>;  
      case "EDIT": 
        return <Edit item={item} onSave={onEditSave} onReturn={onReturn}/>; 

      default:
        return 'foo';
    }
  }

  return (
    <>
      {renderSwitch(type)}
    </>);
};


export default Home;
