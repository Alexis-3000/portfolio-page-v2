import { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";

function ButtonShowToggle({ buttonType, dispatchType }) {
  const { state, dispatch } = useContext(GlobalContext);

  return (
    <>
    {/* can i write this shorter? something like this? */}
    {/* {
      <button onClick={() => dispatch({ type: {dispatchType} })}>
        {
          !state.showMore.${buttonType} ? "Show more" : "Show less"
        }
      </button>
    } */}
    {
      buttonType === "teaching" ?
      <button onClick={() => dispatch({ type: "toggleShowTeachingInfo" })}>
        {
          !state.showMore.teaching ? "Show more" : "Show less"
        }
      </button>
      :
      <button onClick={() => dispatch({ type: "toggleShowAwardsInfo" })}>
        {
          !state.showMore.awards ? "Show more" : "Show less"
        }
      </button>
    }

    {/* Old version: */}
    {/* <button onClick={() => dispatch({ type: "toggleShowTeachingInfo"})}>
      {
        !state.showMore ? "Show more" : "Show less"
      }
    </button> */}
    </>
  )
}

export default ButtonShowToggle;