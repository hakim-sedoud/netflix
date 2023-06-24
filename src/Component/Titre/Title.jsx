import data from "/Users/hakimsedoud/Documents/LeReacteur/react/Netflix/my-react-app/src/assets/data.json"
const Title = () => {
    return (
       <h2>  {data.map((element) => {
        return (element.category);
       })}  </h2>
    )
  };
  
  export default Title;