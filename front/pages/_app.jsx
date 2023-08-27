import { ChakraProvider, extendTheme } from "@chakra-ui/react";

import "@fontsource/open-sans";


function MyApp({ Component, pageProps}) {
  const theme = extendTheme({
    fonts: {
      heading: `'Open Sans', sans-serif`,
      body: `'Open Sans', sans-serif`,
    },
    colors: {
      colors: {
        primary: "#0e341f",
        secondary: "#e2d39c",
        tertiary: "f6f7fb",
        quaternary: "#E53E3E",
        quinzaine: "pink.300",
        greencolor: "#2F855A",
        bluecolor: "#BEE3F8",
        orangeColor: "#FBD38D",
        greenColor: "green",
        redColor400: "#F56565",
        greenColor400: "#48BB78",
        whiteColor: "white"
      }, 
    },
  });  

  // const ApolloClient = useApollo(pageProps.initialApolloState);

  return (
   
            <ChakraProvider theme={theme}>
              <Component {...pageProps} />
            </ChakraProvider>
  );
}
// export default appWithTranslation(MyApp)
// export default MyApp;

export default MyApp