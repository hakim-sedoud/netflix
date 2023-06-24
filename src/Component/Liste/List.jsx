import data from "/Users/hakimsedoud/Documents/LeReacteur/react/Netflix/my-react-app/src/assets/data.json"
const List = ({images}) => {
    return (
       <img src={`${images}`} alt="" />  
    )
  };
  
  export default List;