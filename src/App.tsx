import { Authenticated, GitHubBanner, Refine, WelcomePage } from "@refinedev/core";
import { DevtoolsPanel, DevtoolsProvider } from "@refinedev/devtools";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";

import { useNotificationProvider } from "@refinedev/antd";
import "@refinedev/antd/dist/reset.css";


import {dataProvider, liveProvider, authProvider} from "./providers";

import routerBindings, {
  CatchAllNavigate,
  DocumentTitleHandler,
  UnsavedChangesNotifier,
} from "@refinedev/react-router-v6";
import { App as AntdApp } from "antd";

import  Layout  from "./components/layout/index";

import { createClient } from "graphql-ws";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import {Home, ForgotPassword, Login, Register} from './pages';
import { resources } from "./config/resources";


const API_URL = "https://api.nestjs-query.refine.dev/graphql";
const WS_URL = "wss://api.nestjs-query.refine.dev/graphql";

// const gqlClient = new GraphQLClient(API_URL);
// const wsClient = createClient({ url: WS_URL });

function App() {
  return (
    <BrowserRouter>
      <GitHubBanner />
      <RefineKbarProvider>
      
          <AntdApp>
            <DevtoolsProvider>
              <Refine
                 dataProvider={dataProvider}
                 liveProvider={liveProvider}
                notificationProvider={useNotificationProvider}
                routerProvider={routerBindings}
                authProvider={authProvider}
                resources={resources}
                options={{
                  syncWithLocation: true,
                  warnWhenUnsavedChanges: true,
                  useNewQueryKeys: true,
                  projectId: "I3DMzd-GBnFXL-ZCRRoK",
                  liveMode: "auto",
                }}
              >
                <Routes>
                 
                  <Route path="/register" element={<Register/>}/>
                  <Route path="/login" element={<Login/>}/>

                  <Route path="/forgotPassword" element={<ForgotPassword/>}/>

                  <Route element={
                  <Authenticated
                    key={"authenticated-Layout"}
                    fallback = {<CatchAllNavigate to="/login"/>}
                    >

                    <Layout>
                    <Outlet />
                  </Layout>
                  </Authenticated>
                }>

                  <Route index element={<Home/>}/>
                  </Route>
                  
                </Routes>
                <RefineKbar />
                <UnsavedChangesNotifier />
                <DocumentTitleHandler />
              </Refine>
              <DevtoolsPanel />
            </DevtoolsProvider>
          </AntdApp>
        
      </RefineKbarProvider>
    </BrowserRouter>
  );
}

export default App;
