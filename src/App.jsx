// import styled from "styled-components";
// import GlobalStyle from "./styles/GlobalStyles";
// import Button from "./ui/Button";
// import Input from "./ui/Input";
// import Heading from "./ui/Heading";
// import Row from "./ui/Row";

// const StyledApp = styled.div`
//   /* background-color: orangered; */
//   padding: 20px;
// `;

// function App() {
//   return (
//     <>
//       <GlobalStyle />
//       <StyledApp>
//         <Row>
//           <Row type="horizontal">
//             <Heading as="h1">The Wild Oasis</Heading>
//             <div>
//               <Heading as="h2">Check in and out</Heading>
//               <Button onClick={() => alert("Check out")}>Sign up</Button>
//               <Button variation='secondary' size='small' onClick={() => alert("Check out")}>Sign up</Button>
//             </div>
//           </Row>

//           <Row>
//             <Heading as="h3">Form</Heading>
//             <form>
//               <Input type="number" placeholder="Number of guests" />
//               <Input type="number" placeholder="Number of guests" />
//             </form>
//           </Row>
//         </Row>
//       </StyledApp>
//     </>
//   );
// }

// export default App;

import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import GlobalStyles from "./styles/GlobalStyles";
import Dashboard from "./pages/Dashboard";
import Bookings from "./pages/Bookings";
import Cabins from "./pages/Cabins";
import Users from "./pages/Users";
import Settings from "./pages/Settings";
import Account from "./pages/Account";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./ui/AppLayout";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // staleTime: 60 * 1000,
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="bookings" element={<Bookings />} />
            <Route path="cabins" element={<Cabins />} />
            <Route path="users" element={<Users />} />
            <Route path="settings" element={<Settings />} />
            <Route path="account" element={<Account />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
