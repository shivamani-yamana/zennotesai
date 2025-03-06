import { NextApiRequest, NextApiResponse } from "next";
import { createClerkClient } from '@clerk/backend'

const clerkClient = createClerkClient({ secretKey: process.env.CLERK_SECRET_KEY });

export default async function checkEmail(req:NextApiRequest,res:NextApiResponse){
    const {email} = req.query;
    
    if(!email) {
        return res.status(400).json({message:"Email is required!"});
    }
    
    try{
        const response = await clerkClient.users.getUserList();
        const userExists = response.data.some((user)=>user.emailAddresses.some((emailAddress)=>emailAddress.emailAddress === email));

        if(userExists) return res.status(200).json({message:"User exists"});
        else return res.status(404).json({message:"Email not found"});
    }
    catch(error){
        console.log(error)
        return res.status(500).json({message:"Unknown Error"})
    }
}