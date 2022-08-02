import { configureStore } from "@reduxjs/toolkit";
import walletReducer from "./slices/walletSlice";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import thunkMiddleware from "redux-thunk";
import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";

const reducers = combineReducers({
	wallet: walletReducer,
});

const persistConfig = {
	key: "root",
	storage: storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
	reducer: persistedReducer,
	devTools: process.env.NODE_ENV !== "production",
	middleware: [thunkMiddleware],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
