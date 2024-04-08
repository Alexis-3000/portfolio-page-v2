import { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";
import { teachingInfo } from "../data";
import ButtonShowToggle from "./ButtonShowToggle";

function TeachingInfo() {
  const { state, dispatch } = useContext(GlobalContext);

  return (
    <>
        <section className="teachingSection">
            <h2>Teaching, Talks & Jury Experience</h2>

            {/* key / index ok? */}
            { state.screenWidth < 768 && !state.showMore.teaching ? 
                <>
                { 
                    teachingInfo.filter((item, index) => index < 3).map((item, index) => <div key={index}><p>{item.date}</p><p>{item.info}</p></div>) 
                }
                <ButtonShowToggle buttonType={"teaching"} dispatchType={"toggleShowTeachingInfo"}/> 
                </>
                : 
                state.screenWidth < 768 && state.showMore.teaching ?
                <>
                { 
                    teachingInfo.map((item, index) => <div key={index}><p>{item.date}</p><p>{item.info}</p></div>) 
                }
                <ButtonShowToggle buttonType={"teaching"} dispatchType={"toggleShowTeachingInfo"}/> 
                </>
                :
                teachingInfo.map((item, index) => <div key={index}><p>{item.date}</p><p>{item.info}</p></div>)
            }
            
        </section>
    </>
    
  )
}

export default TeachingInfo;