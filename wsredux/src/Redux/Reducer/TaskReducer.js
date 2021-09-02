import { ADD_TASK, COMPLETE_TASK, DELETE_TASK, EDIT_TASK } from "../Action/ActionTypes";

const InitialState = {
  taskList: [
    {
      id: 0,
      name: "Learn HTML And CSS",
      isDone: true,
    },
    {
      id: 1,
      name: "Learn JS and ES6",
      isDone: true,
    },
    {
      id: 2,
      name: "Learn NODE JS",
      isDone: false,
    },
  ],
};

export const TaskReducer = (state = InitialState, { type, payload }) => {
  switch (type) {
    case ADD_TASK:
      return { ...state, taskList: [...state.taskList, payload] };
    case DELETE_TASK:
      return {
        ...state,
        taskList: state.taskList.filter((task) => task.id !== payload),
      };
    case COMPLETE_TASK:
      return {
        ...state,
        taskList: state.taskList.map((task) =>
          task.id === payload ? { ...task, isDone: !task.isDone } : task
        ),
      };

      case EDIT_TASK:
        return {...state,taskList: state.taskList.map((task) => 
            task.id === payload.id ? { ...task,name: payload.value } : task ),
        };

    default: return state;
  }
};
