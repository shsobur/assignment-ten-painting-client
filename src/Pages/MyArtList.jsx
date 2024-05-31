import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import MyArtListCart from "./MyArtListCart";

const MyArtList = () => {
  const { user } = useContext(AuthContext) || {};
  const [myArts, setMyArts] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/myartlist/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMyArts(data);
      });
  }, [user]);

  return (
    <div>
      <div className="font-bold text-5xl text-center font-serif text-[#a2c4fa] mt-10 mb-10">
        <h2>My All Arts_!</h2>
      </div>
      <div className="grid gap-3 md:grid-cols-2 sm:grid-cols-1 justify-items-center p-5">
        {myArts.map((myArt) => (
          <MyArtListCart key={myArt._id} myArt={myArt}></MyArtListCart>
        ))}
      </div>
    </div>
  );
};

export default MyArtList;
