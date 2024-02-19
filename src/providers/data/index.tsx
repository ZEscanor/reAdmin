import graphQLDataProvider, { GraphQLClient,
    liveProvider as graphQLLiveProvider

} from "@refinedev/nestjs-query";
import { fetchWrapper } from './fetch-wrapper';
import { createClient } from 'graphql-ws';

export const BASE_URL = 'https://api.crm.refine.dev'
export const API_URL = `${BASE_URL}/graphql`
export const webSocketURL = 'wss://api.crm.refine.dev/graphql'


// create a new graphql instance based on refine
export const client = new GraphQLClient(API_URL, {
   fetch: (url:string, options: RequestInit) => {
    try{
          return fetchWrapper(url,options)
    }
    catch(error){
        return Promise.reject(error as Error)
    }
   }
})  


// handles logic for the websocket
export const webSocketClient = typeof window !== 'undefined'
 ? createClient({
    url : webSocketURL,
    connectionParams: () => {
        const webSocketToken = localStorage.getItem("access_token");

        return {
            headers: {
                Authorization: `Bearer ${webSocketToken}`
            }
        }
    }
 }) : undefined  // undefined if we are not in the browser currently


 export const dataProvider = graphQLDataProvider(client);
 export const liveProvider = webSocketClient? graphQLLiveProvider(webSocketClient) : undefined