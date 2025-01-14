import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Home } from "../pages/Home/Home";

import { DashboardLayout } from "../Dashboard/DashboardLayout";

import Login from "../pages/Login";


import Dashboard from "../Dashboard/Dashboard";


import Signup from "../pages/Signup";
import Logout from "../pages/Logout";
import ErrorPage from "../pages/shared/ErrorPage";


import Moredetails from "../pages/Home/Specific/Moredetails";


import PetListing from "../Pet/PetListing";
import AddPet from "../Dashboard/AddPet";
import MyPet from "../Dashboard/PetBoard/MyPet";


import CreateDonationsCampign from "../Dashboard/CreateDonationsCampign";
import MyDonation from "../Dashboard/PetBoard/MyDonation";
import AdmitPet from "../Pet/AdmitPet";
import DonationCampign from "../Pet/DonationCampign";
import Moredetail2 from "../pages/Home/Specific/Moredetail2";

import MyDonationCampaign from "../Dashboard/PetBoard/MyDonationCampaign";
import AdoptionRequest from "../Dashboard/PetBoard/AdoptionRequest";
import Users from "../Dashboard/PetBoard/Admin/Users";
import AllDonations from "../Dashboard/PetBoard/Admin/AllDonations";
import AllPets from "../Dashboard/PetBoard/Admin/AllPets";
import PetFoodPage from "../pages/Shop/Product";
import OrderTable from "../pages/Shop/Order";
import CampaignsPage from "../components/CampaignList";
import Payment from "../components/Payment";
import Success from "../components/Success";
import Cancel from "../components/Cancel";
import PetList from "../Dashboard/PetBoard/PetList";
import PetAdoptionTable from "../Dashboard/PetBoard/AdoptionList";

import CampaignsTable from "../Dashboard/PetBoard/DonationList";
import ShopList from "../Dashboard/PetBoard/ShopList";
import PaymentList from "../Dashboard/PetBoard/PaymentList";
import { BaseUrl } from "../APiDomain/ApiDomain";




const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home />,
        loader:()=>fetch(`${BaseUrl}pet-listing`),
      },
      {
        path: "/petlisting",
        element: <PetListing></PetListing>,
        loader:()=>fetch(`${BaseUrl}pet-listing`),

      }
      ,
   
 
      
      {
        path:"/adopt",
        element:<AdmitPet></AdmitPet>,
        loader:()=>fetch(`${BaseUrl}adopt`),
      },

      {
        path:"/donation-campign",
        element:<DonationCampign></DonationCampign>,
        loader:()=>fetch(`${BaseUrl}pet-listing`),
      },

      {
       path:"/donation-list",
       element:<CampaignsPage></CampaignsPage>

      }
,

{
  path:"/donation-list/:id",
  element:<Payment></Payment>

 },

 {
  path:"/success",
  element:<Success></Success>

 },
 {
  path: "/moredetail/:id",
  element:<Moredetails></Moredetails>,
  loader:({params})=> fetch(`${BaseUrl}moredetail/${params.id}`)  
},
{
  path: "/moredetail2/:id",
  element:<Moredetail2></Moredetail2>,
  loader:({params})=> fetch(`${BaseUrl}moredetail2/${params.id}`)  
},




{
  path:"cancel",
  element:<Cancel></Cancel> 


}
,

      {
        path:"/shop",
        element:<PetFoodPage></PetFoodPage>,
       
      },
     

    
    ]
  },
  {
    path: "/admin/dashboard",
    element: <DashboardLayout />,
    children: [
      { path: "/admin/dashboard", element: <Dashboard></Dashboard>},
      { path: "/admin/dashboard/mydonation", element: <MyDonation></MyDonation> ,
      loader:()=> fetch(`${BaseUrl}donation-detail`),},
      { path: "/admin/dashboard/add-pet", element: <AddPet></AddPet> },
      { path: "/admin/dashboard/adoption-list", element: <PetAdoptionTable></PetAdoptionTable> },
      { path: "/admin/dashboard/donation-list", element: <CampaignsTable></CampaignsTable> },
      { path: "/admin/dashboard/shop", element: <ShopList></ShopList> },
      { path: "/admin/dashboard/payment", element: <PaymentList></PaymentList> },

      { path: "/admin/dashboard/alldonations", element: <AllDonations></AllDonations>,
        loader: () => fetch(`${BaseUrl}adopt`)
        },
        
      { path: "/admin/dashboard/my-pet", element: <MyPet></MyPet>,
      loader:()=> fetch(`${BaseUrl}add-pet`), },
      { path: "/admin/dashboard/adoption", element: <AdoptionRequest></AdoptionRequest> ,
      loader:()=> fetch(`${BaseUrl}pet-listing`),
    },
      { path: "/admin/dashboard/donation-campaign", element: <MyDonationCampaign></MyDonationCampaign>,
      loader:()=> fetch(`${BaseUrl}donation-campaign`),
    },
      { path: "/admin/dashboard/create-donation-campaign", element:<CreateDonationsCampign></CreateDonationsCampign> },
     


  { path: "/admin/dashboard/users", element: <Users></Users>,
  loader: () => fetch(`${BaseUrl}users`)
  
}, 
{ path: "/admin/dashboard/order", element: <OrderTable></OrderTable>,
 
  
}, 



{ path: "/admin/dashboard/petlisting", element: <PetList></PetList>
 
  },


{ path: "/admin/dashboard/allpets", element: <AllPets></AllPets>,
loader: () => fetch(`${BaseUrl}pet-listing`),
},
    
    ],
  },
  
  

  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/create-user",
    element: <Signup/>
  },
  {
    path:"/logout",
    element: <Logout/>
  }
]);

export default router;