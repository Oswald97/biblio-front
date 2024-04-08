import { ADHERENT_ACTIONS } from "@/utils/_constants";
import { createStore } from "redux";

const initialState: adherentState = {
  adherentList: [],
};

const adherentReducer = (
  state: adherentState = initialState,
  action: actionType
) => {
    switch (action.type) {
        case ADHERENT_ACTIONS.ADD:
            return {
                adherentList: [...state.adherentList, action.payload]
            }
            break;
        
        case ADHERENT_ACTIONS.SET: 
            return {
                adherentList: [...action?.payload]
            }
            break;
        default:
          return state
    }
};

export const store = createStore(adherentReducer)