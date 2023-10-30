import { TypedUseSelectorHook, useDispatch as UseAppDispatch, useSelector as useAppSelector } from "react-redux";
import type { RootState, AppDispatch } from "../store/configureStore";

type DispatchFunc = () => AppDispatch;
export const useDispatch: DispatchFunc = UseAppDispatch;
export const useSelector: TypedUseSelectorHook<RootState> = useAppSelector;
