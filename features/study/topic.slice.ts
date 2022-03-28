import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import Topic from "../../modules/share/model/topic";
import { apiOffsetTopicsByParentId } from "./topic.api";

export type TopicState = {
  rootTopic: Topic;
  subTopic: Topic;
  currentTopic: Topic;
  loading: boolean;
  totalCurrent: number;
  totalSub: number;
  currentList: Topic[];
  subList: Topic[];
  currentIndex: number;
}

const initialState: TopicState = {
  rootTopic: null,
  subTopic: null,
  currentTopic: null,
  loading: true,
  totalCurrent: 0,
  totalSub: 0,
  currentList: [],
  subList: [],
  currentIndex: -1
}

export const fetchTopicsList = createAsyncThunk("topic/fetchCurrentList", async(args: { parentId: string; courseId: string; userId?: string; target: "current" | "sub" }) => {
  const topics = await apiOffsetTopicsByParentId({ courseId: args.courseId, parentId: args.parentId });
  return {
    data: topics,
    target: args.target
  }
});

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
      state.currentTopic = action.payload;
    },
    setTopicLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
    setCurrentTopicIndex: (state, action: PayloadAction<number>) => {
      state.currentIndex = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTopicsList.fulfilled, (state, action) => {
      if (action.payload.target === "current") {
        state.currentList = action.payload.data;
        const currentTopicIdx = action.payload.data.findIndex((topic) => topic._id === state.currentTopic?._id);
        if (currentTopicIdx !== -1) state.currentTopic = action.payload.data[currentTopicIdx];
        state.currentIndex = currentTopicIdx;
      } else {
        state.subList = action.payload.data;
        const subTopic = action.payload.data.find((topic) => topic._id === state.subTopic?._id);
        if (subTopic) state.subTopic = subTopic;
      }
    })
  }
});

export const {
  setRootTopic,
  setSubTopic,
  setCurrentTopic,
  setTopicLoading,
  setCurrentTopicIndex
} = topicSlice.actions;
export default topicSlice.reducer;
