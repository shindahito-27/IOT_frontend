import { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import { db } from "../firebase/config";

const useFirebaseData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const dataRef = ref(db, "/");

    onValue(dataRef, (snapshot) => {
      const val = snapshot.val();
      setData(val);
    });
  }, []);

  return data;
};

export default useFirebaseData;