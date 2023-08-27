import React,{useEffect ,useState} from "react";
import { useRouter } from "next/router";
import Routes from "../modules/routes";
import { Box, Button, Card, Center, Flex, Heading, Image, Text } from "@chakra-ui/react";
import Link from "next/link";
const axios = require('axios');


const Acceuil = () => {

    // const axiosInstance = axios.create({
    //     headers: {
    //         "Content-Type": "application/json"
    //     },
    //     baseURL: "http://localhost:3020/restaurants"
    // });
    const router = useRouter();
    const [data, setData] = useState([])
    // const [description, setDescription] = useState([])

  useEffect(()=>{
    axios.get( "http://localhost:3020/restaurants")
    .then(response => {
      const datas = response.data
      setData(datas)
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

    <Box 
        width={"full"} 
        p={"30px"}
        
    >
        <Heading 
            textAlign={"center"}
        >
            Liste des produits
        </Heading>
        {console.log(data)}
        <Flex 
            gap={8} 
            flexWrap={"wrap"}
            justifyContent="center"
            p={"10px"}
        > 
        { data &&  
            data.map((item, index) => ( 
         <Flex 
            p={"10px"} 
            key={index}  
            w={"280px"} 
            border={"1px"}
            borderColor={""}
            gap={10} 
            flexWrap="wrap"
            rounded={"lg"}
          > 
            <Box  w={"full"} >
                <Center>
                    <Image
                        src={item.category.image}
                        alt="image du produit"
                        borderRadius={"lg"}
                        w={"120px"} n
                    />
                </Center>
            </Box>
           
            <Flex 
                gap={1} 
                // justifyContent="center"
                flexWrap={"wrap"}
            >
                {item.descriptifsSet && item.descriptifsSet.map((descriptif, index) =>(         
                    <Card
                        width={"50px"} 
                        textAlign={"center"}
                        color={"white"}
                        bg="red.500"
                        key={index}
                        // rounded={"md"}
                        // direction={"row"}
                        // display={"flex"}
                        p={1}
                        w={"75px"}
                        fontSize={"12px"}
                    >
                        {`${descriptif.fr}`}
                    </Card>
                ))}
            </Flex>
            <Flex 
                direction={"column"} gap={1} 
                mb={{base:"-25px", sm:"-25px", md:"-25px"}}
                mt={{base:"-25px", sm:"-25px", md:"-25px"}}
            > 
                <Heading size='sm'> {item.name}</Heading>
                <Box display={"flex"} gap={1} >
                    <Text fontWeight={"bold"}>Lieu:</Text>
                    <Text 
                        fontSize={"15px"}
                        mt={"2px"}
                     >
                        {item.location.name}
                    </Text>
                </Box>
                <Text 
                    fontSize={"15px"}
                    mt={1} 
                    fontWeight={"bold"}
                > 
                    {item.average_price} FCFA
                </Text>
            </Flex>
            <Link
                href={{
                    pathname: Routes.ProduitsDetails?.path || "",
                    query: { id: item.id },
                }}
            >
                <Button
                    bg={"blue.500"}
                    _hover={{bg:"blue.600"}}
                    color={"white"}
                >
                    Details
                </Button>
            </Link>
            </Flex>

            ))
        }
    </Flex>
    </Box>
  );
};

// export async function getServerSideProps () {
    
//     const rest = await axios.get("http://localhost:3020")
//     console.log("ggggg", rest);
//     const data = await rest.json()
//     console.log("fffff", data);
//     return {
//         props:{data}
//     }
// }
  
export default Acceuil;

