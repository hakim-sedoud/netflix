import data from "/Users/hakimsedoud/Documents/LeReacteur/react/Netflix/my-react-app/src/assets/data.json"
const List = () => {
    return (
       <div>
{data.map((element) => {
        return (element.images);
       })}
       </div>
    )
  };
  
  export default List;