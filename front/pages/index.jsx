import { Box, Heading, Hide, Show } from "@chakra-ui/react";
import Acceuil from "./Accueil";
import React,{useEffect ,useState} from "react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

 
  return(  
   
    <Acceuil />
  )
}

