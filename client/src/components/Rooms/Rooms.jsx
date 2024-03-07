import { useEffect, useState } from "react";

const Rooms = () => {
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        fetch("../../../public/rooms.json")
        .then(res => res.json())
        .then(data => console.log(data))
    }, [])
    return (
        <div>
            This is room card
        </div>
    );
};

export default Rooms;