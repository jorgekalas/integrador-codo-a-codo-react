import { collection, getDocs } from "firebase/firestore";
import { useEffect } from "react";
import  db  from "./firebase";

export const UsarFirebase = () => {
	useEffect(() => {
		const getData = async () => {
			const query = collection(db, "doctores");
			const response = await getDocs(query);
			console.log(response);
			const data = response.docs.map((doc) => doc.data());
			console.log("data", data);
		};
		getData();
	}, []);
};
