import Title from "../Titre/Title";
import data from "/Users/hakimsedoud/Documents/LeReacteur/react/Netflix/my-react-app/src/assets/data.json"

const Section = () => {
    return (
<div className="section">
    {data.map ((element) => {
        return (
            <Title 
            category = {element.category}
            />
        )
           
    
    })}
</div>
    )
  };
  
  export default Section;
  