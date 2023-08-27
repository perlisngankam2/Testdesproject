import React,{useEffect ,useState} from "react";
import { useRouter } from "next/router";
import { Box, Button, Card, Flex, Heading, Image, Text, Divider, Center } from "@chakra-ui/react";
import Link from "next/link";
const axios = require('axios');


const Details = () => {

    // const axiosInstance = axios.create({
    //     headers: {
    //         "Content-Type": "application/json"
    //     },
    //     baseURL: "http://localhost:3020/restaurants"
    // });
    const router = useRouter();
    const [dataDetail, setDataDetails] = useState([])
    // const [description, setDescription] = useState([])

  useEffect(()=>{
    const id = router.query.id
    axios.get(`http://localhost:3020/restaurants/${id}`)
    .then(response => {
      const data = response.data
      setDataDetails(data)
      console.log(dataDetail); 
    //   console.log(data);                                                                                 
    //   console.log(data[0].category.image);
    //   console.log(data[0].descriptifsSet[0].fr);
    //   console.log(data[0].name);
    //   console.log(data[0].average_price);
    })
    .catch(error=>{
        console.error(error);
    })
 }, [])

  return  (

    <Box width={"full"} >
    {dataDetail && ( 
        <Box width={"full"}>
        <Box
           zIndex={10}
        >
            <Image 
                src={dataDetail.category.image}
                alt="image"
                // src=""
                height={{base:"200px", md:"400px"}} 
                width={{base: "full", md:"full "}} 
            />
        </Box>
        <Center>
            <Box 
                width={{ base:"240px", sm: "500px", md:"800px"}}
                mt={{base:"-50px", sm: "-50px",md:"-50px"}}
                bg={"white"}
                p={{base:5, sm:5, md:5}}
                position="relative"
                zIndex={20}
                rounded={{base:"md", sm:"md", md:"md"}}
                alignContent={"center"}
                justifyContent={"center"}
            > 
                <Text>Apercue</Text>
                <Divider colorScheme={"black"} size={"2px"} border={"1px"}/>
                <Heading fontSize={"30px"} mt={"20px"}>{dataDetail.name}</Heading>
            </Box>
        </Center>
        </Box>
    )}
{/* {console.log(dataDetail.category.image)} */}

    </Box>
  );
};

export default Details;

