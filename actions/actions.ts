"use server";

import { auth } from "@clerk/nextjs/server";
import { adminDb } from "../firebase-admin";

export async function createNewDocument() {
  await auth.protect();

  const { sessionClaims } = await auth();

  if (!sessionClaims) throw new Error("Session Claims is null!!!");

  const docCollectionRef = adminDb.collection("documents");
  const docRef = await docCollectionRef.add({ title: "Untitled Doc" });

  // await adminDb
  //   .collection("users")
  //   .doc(sessionClaims?.email)
  //   .collection("rooms")
  //   .doc(docRef.id)
  //   .set({
  //     userId: sessionClaims.email,
  //     role: "Owner",
  //     createdAt: new Date(),
  //     roomId: docRef.id,
  //   });

  return docRef.id;
}
