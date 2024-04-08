import { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";
import { awardInfo } from "../data";
import ButtonShowToggle from "./ButtonShowToggle";

function Awards() {
  const { state, dispatch } = useContext(GlobalContext);

  return (
    <>
      <section className="awardsSection">
        <h2>Awards, Exhibitions & Publications</h2>

        {/* before: && !state.showMore */}
        { state.screenWidth < 768 && !state.showMore.awards ? 
          <>
            { 
              awardInfo.filter((item, index) => index < 3).map((item, index) => <div key={index}><p>{item.year}</p><p>{item.info}</p></div>) 
            }
            {/* before: without prop dispatchType */}
            <ButtonShowToggle buttonType={"awards"} dispatchType={"toggleShowAwardsInfo"}/> 
            </>
            : 
            state.screenWidth < 768 && state.showMore.awards ?
            <>
            { 
              awardInfo.map((item, index) => <div key={index}><p>{item.year}</p><p>{item.info}</p></div>) 
            }
            {/* before: without prop dispatchType */}
            <ButtonShowToggle buttonType={"awards"} dispatchType={"toggleShowAwardsInfo"}/> 
          </>
          :
          awardInfo.map((item, index) => <div key={index}><p>{item.year}</p><p>{item.info}</p></div>)
        }
      </section>
    </>
  )
}

export default Awards;