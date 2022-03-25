import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Topic from "../../modules/share/model/topic";

export type TopicState = {
  rootTopic: Topic;
  subTopic: Topic;
  currentTopic: Topic;
}

const initialState: TopicState = {
  rootTopic: null,
  subTopic: null,
  currentTopic: null
}

const topicSlice = createSlice({
  name: "topic",
  initialState,
  reducers: {
    setRootTopic: (state, action: PayloadAction<Topic>) => {
      state.rootTopic = action.payload
    },
    setSubTopic: (state, action: PayloadAction<Topic>) => {
      state.subTopic = action.payload
    },
    setCurrentTopic: (state, action: PayloadAction<Topic>) => {
      state.currentTopic = action.payload
    },
  }
});

export const { setRootTopic, setSubTopic, setCurrentTopic } = topicSlice.actions;
export default topicSlice.reducer;
