import { useEffect, useState } from "react";
import Card from "./Card";
import Container from "../Shared/Container";

const Rooms = () => {
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        fetch("../../../public/rooms.json")
            .then(res => res.json())
            .then(data => {
                setRooms(data)
                console.log(data)
            })
    }, [])
    return (
        <div>
            <Container>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
                    {
                        rooms.map(room => (
                            <Card key={room._id} room={room}></Card>
                        ))
                    }
                </div>
            </Container>
        </div>
    );
};

export default Rooms;