import { useReducer, useEffect, useMemo } from "react";
import {collection, getDocs, doc, getDoc} from "firebase/firestore";
import {db} from '../utils/firebase'


//1. Setting initial state
const initialState = {
	doctors: [],
};

//2. Reducer function
const reducer = (state, action) => {
	switch (action.type) {
		case "GET_doctorS":
			return { ...state, doctors: action.payload };
		default:
			return state;
	}
};

//3. Exportable function
const useGetDoctors = () => {
	const [state, dispatch] = useReducer(reducer, initialState);

	useEffect(() => {
		const getData = async () => {
			try {
				const query = collection(db, 'doctores');
            const response = await getDocs(query);
						const data = response.docs.map(doc=>{return {id: doc.id, ...doc.data()}});
				dispatch({ type: "GET_doctorS", payload: data });
			} catch (error) {
				console.error(error);
			}
		};

		getData();
	}, []);




	const memoizeddoctors = useMemo(() => state.doctors, [state.doctors]);

	return { doctors: memoizeddoctors };
};

export default useGetDoctors;
