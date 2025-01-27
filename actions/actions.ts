"use server";

import { adminDb } from "../firebase-admin";
import { auth } from "@clerk/nextjs/server" // Adjust the import path as necessary
import liveblocks from "../src/lib/liveblocks";

export async function createNewDocument() {
  await auth.protect();

  const { sessionClaims } = await auth();

  if (!sessionClaims) throw new Error("Session Claims is null!!!");

  const docCollectionRef = adminDb.collection("documents");
  const docRef = await docCollectionRef.add({ title: "Untitled Doc" });

  await adminDb
    .collection("users")
    .doc(sessionClaims?.email)
    .collection("rooms")
    .doc(docRef.id)
    .set({
      userId: sessionClaims.email,
      role: "Owner",
      createdAt: new Date(),
      roomId: docRef.id,
    });

  return docRef.id;
}


// Delete Document Action

export async function deleteDocument(id: string){
  auth.protect();
  try{
    await adminDb.collection("documents").doc(id).delete();
    const query = await adminDb.collectionGroup("rooms").where("roomId",'==',id).get();
    const batch = adminDb.batch();

    query.docs.forEach((doc)=>{
      batch.delete(doc.ref);
    })

    await batch.commit();

    // Deleting rooms in liveblocks
    await liveblocks.deleteRoom(id);

    return {success:true}

  }catch(error){
    console.log(error);
    return {success:false}
  }
}

// Invite Document Action

export async function inviteUserToDocument(roomId:string,email:string){
  auth.protect();
  try{
    await adminDb
    .collection("users")
    .doc(email)
    .collection("rooms")
    .doc(roomId)
    .set({
      userId: email,
      role: "editor",
      createdAt: new Date(),
      roomId,
    });
    return {success:true}

  }catch(error){
    console.log(error);
    return {success:false}
  }
}
