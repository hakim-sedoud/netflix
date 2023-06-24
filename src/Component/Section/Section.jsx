import Title from "../Titre/Title";
import List from "../Liste/List";
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
     {data.map ((element) => {
        let pics = {}
        const arr = element.images
        arr.map((elem) => {
            return (
                pics = elem
            )
        })
        return (
            <List 
            images = {pics}
            />
        )
    })}
</div>
    )
  };
  
  export default Section;
  