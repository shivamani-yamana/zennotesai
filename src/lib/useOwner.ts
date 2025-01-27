import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../../firebase";
import { collectionGroup, query, where } from "firebase/firestore";
import { useRoom } from "@liveblocks/react/suspense";

function useOwner() {
  const { user } = useUser();
  const room = useRoom();
  const [isOwner, setIsOwner] = useState(false);
  const [usersInRoom,,] = useCollection(
    user && query(collectionGroup(db, "rooms"), where("roomId", "==", room.id))
  );

  useEffect(() => {
    if (usersInRoom && usersInRoom.docs && usersInRoom.docs.length > 0) {
      const owners = usersInRoom.docs.filter((doc) => doc.data().role === "Owner");
      if (owners.some((owner) => {
        return user && user.emailAddresses && owner.data().userId === user.emailAddresses[0].emailAddress;
      })) {
        setIsOwner(true);
      }
    }
  }, [user, usersInRoom]);

  return isOwner;
}

export default useOwner;