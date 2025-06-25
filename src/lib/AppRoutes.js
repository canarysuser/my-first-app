import ProductHome from "../Products/ProductHome";
import RoutedDetails from "../Routed/RoutedDetails";
import RoutedList from "../Routed/RoutedList";
import ContextComponent from "../StateManagement/ContextComponent";
import CounterStoreComponent from "../StateManagement/CounterStoreComponent";
import SimpleReducer from "../StateManagement/SimpleReducer";
import Error from "../UI/Error";
import Home from "../UI/Home";
import Lifecycle from "../UI/Lifecycle";
import MemoizationComponent from "../UI/Memoization";
import Memoization from "../UI/Memoization";
import NotFound from "../UI/NotFound";

const routes=[
    {
      name:'Home',  path: "/", element:<Home/>, linkVisible:true
    }, 
      {
      name:'Context',  path: "/context", element:<ContextComponent/>, linkVisible:true
    }, 
    {
      name:'Redux-Ctr',  path: "/rcounter", element:<CounterStoreComponent/>, linkVisible:true
    },
    {
      name:'Lifecycle',  path: "/lifecycle", element:<Lifecycle/>, linkVisible:true
    }, 
     {
      name:'Simple Reducer',  path: "/simple", element:<SimpleReducer/>, linkVisible:true
    },
    {
        name:'Memoization', path: "/memoization", element:<MemoizationComponent />, linkVisible:true
    },
    {
       name:'Routed Details', path: "/routed/details/:id", element:<RoutedDetails />, linkVisible:true
    }, 
    {
        name:'Routed List', path:'/routed/list', element:<RoutedList/>, linkVisible:true
    }, 
    {
       name:'Products', path: "/products", element:<ProductHome />, linkVisible:true
    },
    {
         name:'Error',path:"/error", element:<Error />, linkVisible:false
    },
    {
        name:'NotFound', path: "*", element:<NotFound /> , linkVisible:false
    }
];

export default routes;